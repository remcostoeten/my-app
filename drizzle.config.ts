
import type { Config } from 'drizzle-kit'

/** @type {import('drizzle-kit').Config} */
export default {
  driver: 'turso',
  out: './src/core/server/db/migrations',
  schema: 'src/core/server/schema/index.ts',
  dialect: 'sqlite',
  dbCredentials: {
url: 'libsql://smashing-eternity-remcostoeten.turso.io',     authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjUwNjk1MTIsImlkIjoiOTAyZTFhY2ItNDIxYy00ZGQ0LTliZjktYjgwNmI1NTI5OTNiIn0.gTms4uP2lUD3SzFxxPB2-jhsVhejK5pUUq1q1xI0vUN1r6omegQYOLm0AcxN5DN8zHquKBthxVE3uGRUR5FZDA'
  },
  verbose: true,
} satisfies Config
