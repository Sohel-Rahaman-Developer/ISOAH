// models/Blog.ts

import { getDb } from "@/lib/mongo";
import { ObjectId } from "mongodb";

/**
 * Interface representing a blog document in MongoDB.
 * - `images` is an array of public‐accessible URLs (e.g. "/uploads/blogs/abc123.jpg").
 */
export interface BlogDoc {
  _id?: ObjectId;
  title: string;
  content: string;
  categoryId: ObjectId;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const COLL = "blogs";

/**
 * Create a new blog post in MongoDB.
 * - `data.images`: array of public paths under `/uploads/blogs/`.
 */
export async function createBlog(data: {
  title: string;
  content: string;
  categoryId: string;
  images: string[];
}): Promise<BlogDoc> {
  const db = await getDb();
  const now = new Date();
  const insertResult = await db.collection<BlogDoc>(COLL).insertOne({
    title: data.title,
    content: data.content,
    categoryId: new ObjectId(data.categoryId),
    images: data.images,
    createdAt: now,
    updatedAt: now,
  });

  const saved = await db
    .collection<BlogDoc>(COLL)
    .findOne({ _id: insertResult.insertedId });
  return saved!; // We just inserted it, so it must exist.
}

/**
 * Fetch all blog posts, including their `images` array.
 */
export async function findAllBlogs(): Promise<
  Array<{
    _id: ObjectId;
    title: string;
    content: string;
    categoryId: ObjectId;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
  }>
> {
  const db = await getDb();
  return db
    .collection<BlogDoc>(COLL)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
}

/**
 * Fetch a single blog post by its ObjectId string.
 */
export async function findBlogById(id: string): Promise<BlogDoc | null> {
  const db = await getDb();
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return null;
  }
  const doc = await db.collection<BlogDoc>(COLL).findOne({
    _id: new ObjectId(id),
  });
  return doc;
}

/**
 * Update a blog post by its ID.
 * - Allows optional updates to `title`, `content`, `categoryId`, and `images[]`.
 * - Returns `true` if a document was matched & updated, `false` otherwise.
 */
export async function updateBlog(
  id: string,
  data: {
    title?: string;
    content?: string;
    categoryId?: string;
    images?: string[];
  }
): Promise<boolean> {
  const db = await getDb();
  const setFields: any = { updatedAt: new Date() };

  if (data.title !== undefined) {
    setFields.title = data.title;
  }
  if (data.content !== undefined) {
    setFields.content = data.content;
  }
  if (data.categoryId !== undefined) {
    setFields.categoryId = new ObjectId(data.categoryId);
  }
  if (data.images !== undefined) {
    setFields.images = data.images;
  }

  const result = await db.collection<BlogDoc>(COLL).updateOne(
    { _id: new ObjectId(id) },
    { $set: setFields }
  );
  return result.matchedCount > 0;
}

/**
 * Delete a blog post by ID. Returns `true` if deleted, `false` if not found.
 */
export async function deleteBlog(id: string): Promise<boolean> {
  const db = await getDb();
  const result = await db.collection<BlogDoc>(COLL).deleteOne({
    _id: new ObjectId(id),
  });
  return result.deletedCount > 0;
}
