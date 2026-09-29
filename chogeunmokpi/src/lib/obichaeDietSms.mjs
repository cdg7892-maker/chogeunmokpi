import { createHmac, randomUUID } from 'node:crypto'

const labels = { consultation: '엔오슬림환 상담', 'one-month': '엔오슬림환 1개월 상담', 'three-month': '엔오슬림환 3개월 상담' }
const json = (body, status = 200, headers = {}) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } })
const unavailable = '신청 알림을 전달하지 못했습니다. 잠시 후 다시 시도하거나 02-2644-7555로 연락해주세요.'

// Per-instance limits reduce duplicate clicks and bursts; they are not a distributed quota.
export function createObichaeDietHandler({ env = process.env, fetcher = fetch, now = Date.now, log = console.error } = {}) {
  const attempts = new Map()
  const receipts = new Map()
  const ttl = 15 * 60 * 1000
  const fingerprint = value => createHmac('sha256', env.SOLAPI_API_SECRET || 'unconfigured').update(value).digest('hex')
  function limit(key, maximum, duration, time) {
    const entry = attempts.get(key)
    if (entry && entry.expires > time && entry.count >= maximum) return false
    attempts.set(key, { count: entry && entry.expires > time ? entry.count + 1 : 1, expires: time + duration })
    return true
  }
  return async function handle(request) {
    if (request.headers.get('origin') !== 'https://orbitchae.com') return json({ ok: false, message: '허용되지 않은 요청입니다.' }, 403)
    if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ ok: false, message: '잘못된 요청 형식입니다.' }, 415)
    if (Number(request.headers.get('content-length')) > 4096) return json({ ok: false, message: '요청이 너무 큽니다.' }, 413)
    let payload
    try {
      const raw = await request.text()
      if (Buffer.byteLength(raw) > 4096) return json({ ok: false, message: '요청이 너무 큽니다.' }, 413)
      payload = JSON.parse(raw)
    } catch { return json({ ok: false, message: '잘못된 요청입니다.' }, 400) }
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return json({ ok: false, message: '잘못된 요청입니다.' }, 400)
    const name = typeof payload.name === 'string' ? payload.name.trim() : ''
    const phone = typeof payload.phone === 'string' ? payload.phone.replace(/[\s-]/g, '') : ''
    const selected = typeof payload.selected === 'string' ? payload.selected : ''
    const requestId = typeof payload.requestId === 'string' ? payload.requestId : ''
    if (payload.website || payload.agreed !== true || name.length < 2 || name.length > 40 || /[\r\n\x00-\x1f<>]/.test(name) || !/^01[016789]\d{7,8}$/.test(phone) || !Object.hasOwn(labels, selected) || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
      return json({ ok: false, message: '성함·휴대폰 번호·상담 항목과 개인정보 동의를 확인해주세요.' }, 400)
    }
    const apiKey = env.SOLAPI_API_KEY?.trim()
    const apiSecret = env.SOLAPI_API_SECRET?.trim()
    const sender = (env.SOLAPI_SENDER || '').replace(/\D/g, '')
    const receivers = [...new Set((env.DIET_PROGRAM_SMS_TO || '').split(',').map(value => value.replace(/\D/g, '')).filter(Boolean))]
    if (!apiKey || !apiSecret || !/^\d{8,12}$/.test(sender) || !receivers.length || receivers.some(value => !/^\d{8,12}$/.test(value))) {
      log('[obichae-diet] configuration_missing')
      return json({ ok: false, message: unavailable }, 503)
    }
    const time = now()
    for (const [key, entry] of attempts) if (entry.expires <= time) attempts.delete(key)
    for (const [key, entry] of receipts) if (entry.expires <= time) receipts.delete(key)
    const payloadHash = fingerprint(JSON.stringify({ name, phone, selected }))
    const previous = receipts.get(requestId)
    if (previous) {
      if (previous.hash !== payloadHash) return json({ ok: false, message: '새로고침 후 다시 신청해주세요.' }, 409)
      if (previous.accepted) return json({ ok: true })
      return json({ ok: false, message: '접수 여부를 확인 중입니다. 중복 신청을 피하려면 02-2644-7555로 문의해주세요.' }, 409)
    }
    if (attempts.size > 5000 || receipts.size > 5000 || !limit('all', 40, 10 * 60 * 1000, time) || !limit('phone:' + fingerprint(phone), 1, 5 * 60 * 1000, time)) {
      return json({ ok: false, message: '최근 신청 내역이 있습니다. 5분 후 다시 시도하거나 전화로 문의해주세요.' }, 429, { 'Retry-After': '300' })
    }
    receipts.set(requestId, { hash: payloadHash, expires: time + ttl, accepted: false })
    const date = new Date(time).toISOString()
    const salt = randomUUID()
    const signature = createHmac('sha256', apiSecret).update(date + salt).digest('hex')
    const submittedAt = new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', dateStyle: 'medium', timeStyle: 'short' }).format(new Date(time))
    const text = ['[오비채한의원] 엔오슬림환 비대면 상담 신청', `성함: ${name}`, `연락처: ${phone}`, `희망: ${labels[selected]}`, `접수: ${submittedAt}`, `접수번호: ${requestId}`, 'orbitchae.com'].join('\n')
    try {
      const response = await fetcher('https://api.solapi.com/messages/v4/send-many/detail', {
        method: 'POST', cache: 'no-store', signal: AbortSignal.timeout(12000),
        headers: { Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: receivers.map(to => ({ to, from: sender, type: 'LMS', subject: '오비채 엔오슬림환 신청', text })) }),
      })
      const result = await response.json().catch(() => null)
      const accepted = result?.groupInfo?.count?.registeredSuccess
      if (!response.ok || !Number.isInteger(accepted) || accepted < 1 || accepted > receivers.length) {
        // Never log recipient numbers, names, message bodies, credentials, or raw provider errors.
        const codes = (result?.failedMessageList || []).map(item => String(item.statusCode || '').replace(/[^0-9]/g, '').slice(0, 8))
        log('[obichae-diet] provider_rejected', { status: response.status, codes })
        return json({ ok: false, message: unavailable }, 502)
      }
      receipts.set(requestId, { hash: payloadHash, expires: time + ttl, accepted: true })
      if (accepted !== receivers.length) log('[obichae-diet] partial_acceptance', { accepted, total: receivers.length })
      return json({ ok: true })
    } catch {
      log('[obichae-diet] provider_unavailable')
      return json({ ok: false, message: '처리 결과를 확인하지 못했습니다. 다시 누르기 전에 02-2644-7555로 접수 여부를 확인해주세요.' }, 502)
    }
  }
}
