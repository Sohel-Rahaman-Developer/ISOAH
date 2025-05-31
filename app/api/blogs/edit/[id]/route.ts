// app/api/blogs/edit/[id]/route.ts

/**
 * Disable Next.js built-in body parser (for consistency).
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

import { findBlogById, updateBlog } from "@/models/Blog";
import { editBlogSchema } from "@/schemas/blog";
import { requireAdmin } from "@/lib/auth";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Because `params` is a Promise, await it:
  const { id } = await params;

  // 1) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) {
    return authErr; // 403 if not an admin
  }

  // 2) Validate ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  // 3) Fetch existing blog (so we know its current images[])
  const existing = await findBlogById(id);
  if (!existing) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // 4) Parse multipart/form-data via Web FormData API
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("req.formData() error:", err.message);
    } else {
      console.error("req.formData() error:", err);
    }
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // 5) Extract & validate text fields
  const maybeTitleField = formData.get("title");
  const maybeContentField = formData.get("content");
  const maybeCategoryIdField = formData.get("categoryId");

  const maybeTitle = typeof maybeTitleField === "string" ? maybeTitleField : undefined;
  const maybeContent = typeof maybeContentField === "string" ? maybeContentField : undefined;
  const maybeCategoryId =
    typeof maybeCategoryIdField === "string" ? maybeCategoryIdField : undefined;

  const zodResult = editBlogSchema.safeParse({
    title: maybeTitle,
    content: maybeContent,
    categoryId: maybeCategoryId,
  });
  if (!zodResult.success) {
    return NextResponse.json(
      { error: zodResult.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 6) Collect & validate newly uploaded images
  const rawEntries = formData.getAll("images");
  const imageBlobs = rawEntries.filter((entry): entry is File => entry instanceof File);
  const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  for (const blob of imageBlobs) {
    if (!ALLOWED_MIME.includes(blob.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, WEBP, or GIF images are allowed." },
        { status: 400 }
      );
    }
  }

  // 7) Save new images to public/uploads/blogs/
  const uploadDir = path.join(process.cwd(), "public", "uploads", "blogs");
  try {
    await fsPromises.mkdir(uploadDir, { recursive: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("mkdir error (edit):", err.message);
    } else {
      console.error("mkdir error (edit):", err);
    }
    return NextResponse.json(
      { error: "Server error. Could not prepare upload directory." },
      { status: 500 }
    );
  }

  const newImageUrls: string[] = [];
  for (const blob of imageBlobs) {
    // Convert Blob → ArrayBuffer → Buffer
    let buffer: Buffer;
    try {
      const arrayBuffer = await blob.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("blob arrayBuffer error:", err.message);
      } else {
        console.error("blob arrayBuffer error:", err);
      }
      return NextResponse.json(
        { error: "Server error. Could not read uploaded image." },
        { status: 500 }
      );
    }

    // Create a unique filename from the original name
    const origName = blob.name || "file";
    const ext = path.extname(origName) || "";
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename = `blog_${uniqueSuffix}${ext}`;
    const filePath = path.join(uploadDir, filename);

    try {
      await fsPromises.writeFile(filePath, buffer);
      newImageUrls.push(`/uploads/blogs/${filename}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("writeFile error (edit):", err.message);
      } else {
        console.error("writeFile error (edit):", err);
      }
      return NextResponse.json(
        { error: "Server error. Could not save one of the images." },
        { status: 500 }
      );
    }
  }

  // 8) Merge existing images[] with new ones
  const updatedImages = existing.images.concat(newImageUrls);

  // 9) Build the update payload
  const updateData: {
    title?: string;
    content?: string;
    categoryId?: string;
    images?: string[];
  } = {};
  if (zodResult.data.title !== undefined) {
    updateData.title = zodResult.data.title;
  }
  if (zodResult.data.content !== undefined) {
    updateData.content = zodResult.data.content;
  }
  if (zodResult.data.categoryId !== undefined) {
    updateData.categoryId = zodResult.data.categoryId;
  }
  if (newImageUrls.length > 0) {
    updateData.images = updatedImages;
  }

  // 10) Perform the update in MongoDB
  const success = await updateBlog(id, updateData);
  if (!success) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // 11) Return success
  return NextResponse.json({ message: "Blog updated" });
}
