// utils/bcrypt.ts
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

// Export both functions
export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
