import { db } from '../../db';
import { hash } from 'bcrypt';

export async function createUser(email: string, password?: string, username?: string, provider?: string) {
  let hashedPassword = null;
  if (password) {
    hashedPassword = await hash(password, 10);
  }
  
  const [user] = await db.insert(users).values({
    email,
    password: hashedPassword,
    username,
    provider,
  }).returning();

  await db.insert(userPreferences).values({
    userId: user.id,
  });

  return user;
}
