// models/Admin.ts
import { getDb } from '@/lib/mongo';
import { ObjectId } from 'mongodb';

export interface AdminDoc {
  _id?: ObjectId;
  email: string;
  passwordHash: string;
  role: string;
  createdAt: Date;
}

// Find by email
export async function findAdminByEmail(email: string): Promise<AdminDoc | null> {
  const db = await getDb();
  return db
    .collection<AdminDoc>('admins')
    .findOne({ email });
}

// Create a new admin
export async function createAdmin(admin: Omit<AdminDoc, '_id'>): Promise<AdminDoc> {
  const db = await getDb();
  const { insertedId } = await db
    .collection('admins')
    .insertOne(admin);
  return { ...admin, _id: insertedId };
}
