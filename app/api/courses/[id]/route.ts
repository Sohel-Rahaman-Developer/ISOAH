// app/api/courses/[id]/route.ts

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { findCourseById } from "@/models/Course";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Await promise to get `{ id }`
  const { id } = await params;

  // Validate ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
  }

  const course = await findCourseById(id);
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  // Return fully typed object (with id as string)
  return NextResponse.json({
    id: course._id.toHexString(),
    slug: course.slug,
    title: course.title,
    des: course.des,
    img: course.img,
    iconLists: course.iconLists,
    link: course.link,
    availability: course.availability,
    details: course.details,
    overview: course.overview,
    objectives: course.objectives,
    curriculum: course.curriculum,
    tools: course.tools,
    certificateFeatures: course.certificateFeatures,
    createdAt: course.createdAt,
    updatedAt: course.updatedAt,
  });
}
