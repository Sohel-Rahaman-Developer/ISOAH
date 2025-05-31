// app/api/blogs/delete/[id]/route.ts

/**
 * Disable Next.js built-in bodyParser (for consistency).
 */
export const config = {
  api: {
    bodyParser: false,
  },
};

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import path from "path";

import { findBlogById, deleteBlog } from "@/models/Blog";
import { requireAdmin } from "@/lib/auth";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Because `params` is now a Promise, we must await it:
  const { id } = await params;

  // 1) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) {
    return authErr;
  }

  // 2) Validate ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  // 3) Fetch the blog to get its `images[]` array
  const blog = await findBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // 4) Delete each associated image file from disk
  for (const imgUrl of blog.images) {
    try {
      const relativePath = imgUrl.replace(/^\/+/, ""); // e.g. "uploads/blogs/filename.jpg"
      const absolutePath = path.join(process.cwd(), "public", relativePath);
      await fsPromises.unlink(absolutePath);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.warn(`Could not delete file ${imgUrl}: ${err.message}`);
      } else {
        console.warn(`Could not delete file ${imgUrl}:`, err);
      }
      // Continue even if unlink fails
    }
  }

  // 5) Delete the blog document from MongoDB
  const ok = await deleteBlog(id);
  if (!ok) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }

  // 6) Return success
  return NextResponse.json({ message: "Blog deleted (and associated images removed)" });
}
