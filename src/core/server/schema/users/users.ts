// src/core/server/db/schema/users/users.ts
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  username: text('username'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().defaultNow(),
  lastLoginAt: integer('last_login_at', { mode: 'timestamp' }),
  loginCount: integer('login_count').notNull().default(0),
  isAdmin: integer('is_admin', { mode: 'boolean' }).notNull().default(false),
});
