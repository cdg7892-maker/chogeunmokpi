import { createObichaeDietHandler } from '@/lib/obichaeDietSms.mjs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 30

// Reuse existing server-only SOLAPI settings; no credentials leave this project.
export const POST = createObichaeDietHandler()
