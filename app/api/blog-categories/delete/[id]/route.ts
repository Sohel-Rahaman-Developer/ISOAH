// app/api/blog-categories/delete/[id]/route.ts

export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { deleteCategory } from '@/models/BlogCategory';
import { requireAdmin } from '@/lib/auth';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Because `params` is now a Promise, we must await it:
  const { id } = await params;

  const authErr = await requireAdmin(req);
  if (authErr) return authErr;

  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: 'Invalid category ID' }, { status: 400 });
  }

  const ok = await deleteCategory(id);
  if (!ok) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Category deleted' });
}
