// app/api/courses/all/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { findAllCourses } from "@/models/Course";

export async function GET() {
  const courses = await findAllCourses();
  // Convert ObjectId to string for the client:
  const safe = courses.map((c) => ({
    id: c._id.toHexString(),
    slug: c.slug,
    title: c.title,
    des: c.des,
    img: c.img,
    iconLists: c.iconLists,
    link: c.link,
    availability: c.availability,
    details: c.details,
    overview: c.overview,
    objectives: c.objectives,
    curriculum: c.curriculum,
    tools: c.tools,
    certificateFeatures: c.certificateFeatures,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
  }));
  return NextResponse.json(safe);
}
