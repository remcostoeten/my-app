import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const userPreferences = sqliteTable('user_preferences', {
  userId: text('user_id').primaryKey(),
  allowNotifications: integer('allow_notifications', { mode: 'boolean' }).notNull().default(true),
  currency: text('currency').notNull().default('EUR'),
});
