// app/api/courses/edit/[id]/route.ts

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { findCourseById, updateCourse } from "@/models/Course";
import { editCourseSchema } from "@/schemas/course";
import { requireAdmin } from "@/lib/auth";
import type { CourseUpdateInput } from "@/types/course";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1) Await params to get { id }
  const { id } = await params;

  // 2) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) return authErr;

  // 3) Validate ID format (must be a 24-character hex string)
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
  }

  // 4) Ensure the course exists
  const existing = await findCourseById(id);
  if (!existing) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  // 5) Parse JSON body
  let body: unknown;
  try {
    body = await req.json();
  } catch (err: unknown) {
    console.error("Error parsing JSON in editCourse:", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 6) Validate via Zod (all fields optional, but at least one required)
  const parsed = editCourseSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 7) Cast parsed.data to CourseUpdateInput
  const data = parsed.data as CourseUpdateInput;

  // 8) Attempt update in MongoDB
  const ok = await updateCourse(id, data);
  if (!ok) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  // 9) Return success
  return NextResponse.json({ message: "Course updated" });
}