// schemas/blogCategory.ts
import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
});

export const editCategorySchema = createCategorySchema;
