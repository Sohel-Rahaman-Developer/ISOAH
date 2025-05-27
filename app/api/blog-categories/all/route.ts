export const runtime = 'nodejs'
import { NextResponse } from 'next/server'
import { findAllCategories } from '@/models/BlogCategory'

export async function GET() {
  const cats = await findAllCategories()
  return NextResponse.json(
    cats.map((c) => ({
      id: c._id!.toHexString(),
      name: c.name,
      description: c.description,
    }))
  )
}
