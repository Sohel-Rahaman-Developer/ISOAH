// app/api/blog-categories/edit/[id]/route.ts

export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { updateCategory } from '@/models/BlogCategory';
import { editCategorySchema } from '@/schemas/blogCategory';
import { requireAdmin } from '@/lib/auth';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Because `params` is now a Promise, we must await it:
  const { id } = await params;

  // 1) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) return authErr;

  // 2) Validate ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: 'Invalid category ID' }, { status: 400 });
  }

  // 3) Parse the JSON body
  let body: unknown;
  try {
    body = await req.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Error parsing JSON body in edit:', err.message);
    } else {
      console.error('Error parsing JSON body in edit:', err);
    }
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // 4) Validate with Zod
  const parsed = editCategorySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 5) Attempt to update
  const ok = await updateCategory(id, parsed.data);
  if (!ok) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  // 6) Return success
  return NextResponse.json({ message: 'Category updated' });
}
