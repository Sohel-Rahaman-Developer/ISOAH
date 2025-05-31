// app/api/blogs/create/route.ts

/**
 * Disable Next.js’s built-in bodyParser: not strictly required when using Web FormData,
 * but we include it to ensure consistency and avoid any interfering parsers.
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

import { createBlog } from "@/models/Blog";
import { createBlogSchema } from "@/schemas/blog";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  // 1) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) return authErr;

  // 2) Parse the multipart/form-data via Web API
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch (e: unknown) {
    console.error("Error calling req.formData():", e);
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // 3) Extract & validate text fields
  const titleEntry = formData.get("title");
  const contentEntry = formData.get("content");
  const categoryIdEntry = formData.get("categoryId");

  const title = typeof titleEntry === "string" ? titleEntry : "";
  const content = typeof contentEntry === "string" ? contentEntry : "";
  const categoryId = typeof categoryIdEntry === "string" ? categoryIdEntry : "";

  const zodResult = createBlogSchema.safeParse({ title, content, categoryId });
  if (!zodResult.success) {
    return NextResponse.json(
      { error: zodResult.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 4) Collect & validate uploaded images
  // formData.getAll("images") returns an array of FormDataEntryValue | null
  const rawImageEntries = formData.getAll("images");
  const imageBlobs: File[] = rawImageEntries.filter((entry): entry is File => {
    return entry instanceof File;
  });

  // Enforce max 5 images
  const MAX_IMAGES = 5;
  if (imageBlobs.length > MAX_IMAGES) {
    return NextResponse.json(
      { error: `You can upload up to ${MAX_IMAGES} images.` },
      { status: 400 }
    );
  }

  // Only allow certain MIME types
  const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  for (const blob of imageBlobs) {
    if (!ALLOWED_MIME.includes(blob.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, WEBP, or GIF images are allowed." },
        { status: 400 }
      );
    }
  }

  // 5) Save each file to public/uploads/blogs/
  const uploadDir = path.join(process.cwd(), "public", "uploads", "blogs");
  try {
    await fsPromises.mkdir(uploadDir, { recursive: true });
  } catch (e: unknown) {
    console.error("Failed to create upload directory:", e);
    return NextResponse.json(
      { error: "Server error. Could not prepare upload directory." },
      { status: 500 }
    );
  }

  const imageUrls: string[] = [];
  for (const blob of imageBlobs) {
    // Convert Blob → ArrayBuffer → Buffer
    let buffer: Buffer;
    try {
      const arrayBuffer = await blob.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } catch (e: unknown) {
      console.error("Failed to read blob as arrayBuffer:", e);
      return NextResponse.json(
        { error: "Server error. Could not read uploaded image." },
        { status: 500 }
      );
    }

    // Extract extension from blob.name (e.g. "photo.jpg")
    const originalName = blob.name || "file";
    const ext = path.extname(originalName) || "";
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename = `blog_${uniqueSuffix}${ext}`;
    const filePath = path.join(uploadDir, filename);

    try {
      await fsPromises.writeFile(filePath, buffer);
      imageUrls.push(`/uploads/blogs/${filename}`);
    } catch (e: unknown) {
      console.error("Failed to write file to disk:", e);
      return NextResponse.json(
        { error: "Server error. Could not save one of the images." },
        { status: 500 }
      );
    }
  }

  // 6) Insert the blog document into MongoDB
  let savedBlog;
  try {
    savedBlog = await createBlog({
      title: zodResult.data.title,
      content: zodResult.data.content,
      categoryId: zodResult.data.categoryId,
      images: imageUrls,
    });
  } catch (e: unknown) {
    console.error("DB error in createBlog():", e);
    return NextResponse.json(
      { error: "Server error. Could not save blog post." },
      { status: 500 }
    );
  }

  // 7) Return 201 Created with the new blog
  return NextResponse.json(
    {
      id: savedBlog._id!.toHexString(),
      title: savedBlog.title,
      content: savedBlog.content,
      categoryId: savedBlog.categoryId.toHexString(),
      images: savedBlog.images,
      createdAt: savedBlog.createdAt,
      updatedAt: savedBlog.updatedAt,
    },
    { status: 201 }
  );
}
