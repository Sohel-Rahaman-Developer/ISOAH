// app/api/courses/delete/[id]/route.ts

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { deleteCourse } from "@/models/Course";
import { requireAdmin } from "@/lib/auth";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1) Get id from params
  const { id } = await params;

  // 2) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) return authErr;

  // 3) Validate ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
  }

  // 4) Attempt delete
  const ok = await deleteCourse(id);
  if (!ok) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  // 5) Return success
  return NextResponse.json({ message: "Course deleted" });
}
