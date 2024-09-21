'use client'

import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

type ClientConfig = {
  url: string
  authToken: string
}

export default function createDatabase({ url, authToken }: ClientConfig) {
  const client = createClient({
    url,
    authToken
  })

  return drizzle(client)
}

export const db = createDatabase({
  url: 'libsql://smashing-eternity-remcostoeten.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjUwNjk1MTIsImlkIjoiOTAyZTFhY2ItNDIxYy00ZGQ0LTliZjktYjgwNmI1NTI5OTNiIn0.gTms4uP2lUD3SzFxxPB2-jhsVhejK5pUUq1q1xI0vUN1r6omegQYOLm0AcxN5DN8zHquKBthxVE3uGRUR5FZDA'
})
