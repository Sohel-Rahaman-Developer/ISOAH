// models/BlogCategory.ts
import { getDb } from '@/lib/mongo';
import { ObjectId } from 'mongodb';

export interface BlogCategoryDoc {
  _id?: ObjectId;
  name: string;
  description?: string;
  createdAt: Date;
}

const COLL = 'blogCategories';

export async function createCategory(data: {
  name: string;
  description?: string;
}): Promise<BlogCategoryDoc> {
  const db = await getDb();
  const doc: BlogCategoryDoc = {
    name: data.name,
    description: data.description,
    createdAt: new Date(),
  };
  const { insertedId } = await db.collection<BlogCategoryDoc>(COLL).insertOne(doc);
  return { ...doc, _id: insertedId };
}

export async function findAllCategories(): Promise<BlogCategoryDoc[]> {
  const db = await getDb();
  return db.collection<BlogCategoryDoc>(COLL)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
}

export async function updateCategory(
  id: string,
  data: { name: string; description?: string }
): Promise<boolean> {
  const db = await getDb();
  const result = await db.collection(COLL).updateOne(
    { _id: new ObjectId(id) },
    { $set: { name: data.name, description: data.description } }
  );
  return result.matchedCount > 0;
}

export async function deleteCategory(id: string): Promise<boolean> {
  const db = await getDb();
  const result = await db.collection(COLL).deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}
