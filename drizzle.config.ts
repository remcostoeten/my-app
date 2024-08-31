
import type { Config } from 'drizzle-kit'

/** @type {import('drizzle-kit').Config} */
export default {
  driver: 'turso',
  out: './src/core/server/db/migrations',
  schema: 'src/core/server/sche ma/index.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_URL,
    authToken: process.env.AUTH_TOKEN,
  },
  verbose: true,
} satisfies Config
 