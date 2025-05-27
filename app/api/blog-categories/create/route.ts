export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { createCategory } from '@/models/BlogCategory'
import { createCategorySchema } from '@/schemas/blogCategory'
import { requireAdmin } from '@/lib/auth'

export async function POST(req: NextRequest) {
  console.log(req)
  const authErr = await requireAdmin(req)
  if (authErr) return authErr

  const body = await req.json()
  const parsed = createCategorySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const cat = await createCategory(parsed.data)
  return NextResponse.json(cat, { status: 201 })
}
