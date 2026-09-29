import test from 'node:test'
import assert from 'node:assert/strict'
import { createHmac, randomUUID } from 'node:crypto'
import { createObichaeDietHandler } from '../src/lib/obichaeDietSms.mjs'

const env = { SOLAPI_API_KEY: 'test-key', SOLAPI_API_SECRET: 'test-secret', SOLAPI_SENDER: '02-000-0000', DIET_PROGRAM_SMS_TO: '010-0000-0000' }
const data = overrides => ({ name: '연동테스트', phone: '010-1234-5678', selected: 'consultation', agreed: true, requestId: randomUUID(), ...overrides })
const request = (body, origin = 'https://orbitchae.com') => new Request('https://chogeunmokpi.vercel.app/api/obichae-diet', { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
const accepted = (count = 1) => Response.json({ groupInfo: { count: { registeredSuccess: count } }, failedMessageList: [] })

test('sends only to existing configured receiver with clinic-specific text and HMAC', async () => {
  let sent
  const handler = createObichaeDietHandler({ env, fetcher: async (url, options) => { sent = { url, ...options }; return accepted() } })
  const response = await handler(request(data({ to: '01099999999', from: '01099999999', apiKey: 'injected' })))
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { ok: true })
  assert.equal(sent.url, 'https://api.solapi.com/messages/v4/send-many/detail')
  const messages = JSON.parse(sent.body).messages
  assert.equal(messages.length, 1)
  assert.equal(messages[0].to, '01000000000')
  assert.equal(messages[0].from, '020000000')
  assert.ok(messages[0].text.startsWith('[오비채한의원]'))
  assert.ok(messages[0].text.includes('엔오슬림환 상담'))
  const parts = Object.fromEntries(sent.headers.Authorization.replace('HMAC-SHA256 ', '').split(', ').map(part => part.split('=')))
  assert.equal(parts.signature, createHmac('sha256', env.SOLAPI_API_SECRET).update(parts.date + parts.salt).digest('hex'))
})

test('invalid inputs, missing consent, injected fields and cross-origin calls do not send', async () => {
  let calls = 0
  const handler = createObichaeDietHandler({ env, fetcher: async () => { calls++; return accepted() } })
  for (const body of [null, [], data({ agreed: false }), data({ selected: 'arbitrary text' }), data({ selected: 'toString' }), data({ name: '환자\n다른 알림' }), data({ phone: 'not-a-phone' }), data({ website: 'bot' }), data({ requestId: 'invalid' })]) {
    assert.equal((await handler(request(body))).status, 400)
  }
  assert.equal((await handler(request(data(), 'https://elsewhere.example'))).status, 403)
  assert.equal(calls, 0)
})

test('provider HTTP 200 with registered failures is not success and logs contain no PII', async () => {
  const logs = []
  const handler = createObichaeDietHandler({ env, log: (...args) => logs.push(args), fetcher: async () => Response.json({ groupInfo: { count: { registeredSuccess: 0 } }, failedMessageList: [{ statusCode: '3040', to: '01000000000', text: 'sensitive', statusMessage: 'sensitive' }] }) })
  assert.equal((await handler(request(data()))).status, 502)
  assert.ok(JSON.stringify(logs).includes('3040'))
  assert.ok(!/sensitive|01000000000|연동테스트/.test(JSON.stringify(logs)))
})

test('duplicate requests and changed content with same ID never trigger another SMS', async () => {
  let calls = 0
  const handler = createObichaeDietHandler({ env, fetcher: async () => { calls++; return accepted() } })
  const body = data()
  assert.equal((await handler(request(body))).status, 200)
  assert.equal((await handler(request(body))).status, 200)
  assert.equal((await handler(request({ ...body, name: '다른 이름' }))).status, 409)
  assert.equal((await handler(request(data()))).status, 429)
  assert.equal(calls, 1)
})

test('concurrent duplicate and uncertain timeout do not automatically resend', async () => {
  let release
  let calls = 0
  const handler = createObichaeDietHandler({ env, log: () => {}, fetcher: async () => { calls++; return new Promise((_, reject) => { release = reject }) } })
  const body = data()
  const first = handler(request(body))
  while (!release) await new Promise(resolve => setImmediate(resolve))
  assert.equal((await handler(request(body))).status, 409)
  release(new Error('timeout'))
  assert.equal((await first).status, 502)
  assert.equal((await handler(request(body))).status, 409)
  assert.equal(calls, 1)
})

test('missing configuration does not send; partial acceptance is recorded without resending', async () => {
  const missing = createObichaeDietHandler({ env: {}, log: () => {}, fetcher: async () => { throw new Error('must not call') } })
  assert.equal((await missing(request(data()))).status, 503)
  let calls = 0
  const handler = createObichaeDietHandler({ env: { ...env, DIET_PROGRAM_SMS_TO: '01000000000,01011111111' }, log: () => {}, fetcher: async () => { calls++; return accepted(1) } })
  const body = data()
  assert.equal((await handler(request(body))).status, 200)
  assert.equal((await handler(request(body))).status, 200)
  assert.equal(calls, 1)
})
