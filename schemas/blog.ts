// schemas/blog.ts

import { z } from "zod";

/**
 * Zod schema for creating a new blog post.
 * Only validates text fields; uploaded files are handled via formidable.
 */
export const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  categoryId: z
    .string()
    .length(24, "Invalid categoryId")
    .refine((val) => /^[0-9a-fA-F]{24}$/.test(val), "categoryId must be a valid Mongo ObjectId"),
});

/**
 * Zod schema for editing an existing blog post.
 * All fields are optional but at least one must be supplied.
 */
export const editBlogSchema = z
  .object({
    title: z.string().min(1, "Title is required").optional(),
    content: z.string().min(1, "Content is required").optional(),
    categoryId: z
      .string()
      .length(24, "Invalid categoryId")
      .refine((val) => /^[0-9a-fA-F]{24}$/.test(val), "categoryId must be a valid Mongo ObjectId")
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, "At least one field must be provided to update");
