// app/api/courses/create/route.ts

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { createCourse } from "@/models/Course";
import { createCourseSchema } from "@/schemas/course";
import { requireAdmin } from "@/lib/auth";
import type { CourseCreateInput } from "@/types/course";

export async function POST(req: NextRequest) {
  // 1) Admin check
  const authErr = await requireAdmin(req);
  if (authErr) return authErr;

  // 2) Parse JSON body
  let body: unknown;
  try {
    body = await req.json();
  } catch (err: unknown) {
    console.error("Error parsing JSON in createCourse:", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 3) Validate with Zod
  const parsed = createCourseSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 4) Cast parsed.data to CourseCreateInput
  const data = parsed.data as CourseCreateInput;

  // 5) Insert into MongoDB
  let savedCourse;
  try {
    savedCourse = await createCourse(data);
  } catch (err: unknown) {
    console.error("DB error in createCourse:", err);
    return NextResponse.json(
      { error: "Server error. Could not save course." },
      { status: 500 }
    );
  }

  // 6) Return 201 Created with the newly saved course
  return NextResponse.json(
    {
      id: savedCourse._id.toHexString(),
      slug: savedCourse.slug,
      title: savedCourse.title,
      des: savedCourse.des,
      img: savedCourse.img,
      iconLists: savedCourse.iconLists,
      link: savedCourse.link,
      availability: savedCourse.availability,
      details: savedCourse.details,
      overview: savedCourse.overview,
      objectives: savedCourse.objectives,
      curriculum: savedCourse.curriculum,
      tools: savedCourse.tools,
      certificateFeatures: savedCourse.certificateFeatures,
      createdAt: savedCourse.createdAt,
      updatedAt: savedCourse.updatedAt,
    },
    { status: 201 }
  );
}
