export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { deleteCategory } from '@/models/BlogCategory'
import { requireAdmin } from '@/lib/auth'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const authErr = await requireAdmin(req)
  if (authErr) return authErr

  const { id } = params
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: 'Invalid category ID' }, { status: 400 })
  }

  const ok = await deleteCategory(id)
  if (!ok) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 })
  }
  return NextResponse.json({ message: 'Category deleted' })
}
