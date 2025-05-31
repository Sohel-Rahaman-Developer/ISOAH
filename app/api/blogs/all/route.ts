// app/api/blogs/all/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { findAllBlogs } from "@/models/Blog";

export async function GET() {
  // Fetch every blog post (including images[]).  
  const blogs = await findAllBlogs();

  // Convert each ObjectId to string and return fields
  const safe = blogs.map((b) => ({
    id: b._id!.toHexString(),
    title: b.title,
    content: b.content,
    categoryId: b.categoryId.toHexString(),
    images: b.images,           // array of "/uploads/blogs/..." URLs
    createdAt: b.createdAt,
    updatedAt: b.updatedAt,
  }));

  return NextResponse.json(safe);
}
