export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { updateCategory } from '@/models/BlogCategory'
import { editCategorySchema } from '@/schemas/blogCategory'
import { requireAdmin } from '@/lib/auth'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const authErr = await requireAdmin(req)
  if (authErr) return authErr

  const { id } = params
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: 'Invalid category ID' }, { status: 400 })
  }

  const body = await req.json()
  const parsed = editCategorySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const ok = await updateCategory(id, parsed.data)
  if (!ok) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 })
  }
  return NextResponse.json({ message: 'Category updated' })
}
