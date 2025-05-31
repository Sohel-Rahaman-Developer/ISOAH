// app/api/blogs/[id]/route.ts

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { findBlogById } from "@/models/Blog";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Because `params` is a Promise, await it:
  const { id } = await params;

  // 1) Validate ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  // 2) Fetch the blog from MongoDB
  const blog = await findBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
  }

  // 3) Return the blog (convert ObjectIds to strings)
  return NextResponse.json({
    id: blog._id!.toHexString(),
    title: blog.title,
    content: blog.content,
    categoryId: blog.categoryId.toHexString(),
    images: blog.images,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
  });
}
