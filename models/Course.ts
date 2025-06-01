// src/models/Course.ts

import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongo";
import {
  Course,
  CourseCreateInput,
  CourseUpdateInput,
} from "@/types/course";

const COLL = "courses";

/**
 * Helper: Assign a unique `id` (string) to each curriculum item.
 * By spreading `...item` first and then `id: ...`, we avoid the
 * "specified more than once" warning.
 */
function assignCurriculumIds(
  items: CourseCreateInput["curriculum"]
): Array<Course["curriculum"][number]> {
  return items.map((item) => ({
    // Spread client‐sent fields first:
    ...item,
    // Then generate our own `id`, overriding any `item.id` (if it existed).
    id: new ObjectId().toHexString(),
  }));
}

// 1) CREATE COURSE
export async function createCourse(
  data: CourseCreateInput
): Promise<Course> {
  const db = await getDb();
  const now = new Date();

  // 1.a) Assign IDs to each curriculum entry
  const curriculumWithIds = assignCurriculumIds(data.curriculum);

  // 1.b) Build document to insert (no top‐level _id yet)
  const toInsert: Omit<Course, "_id"> = {
    ...data,
    curriculum: curriculumWithIds,
    createdAt: now,
    updatedAt: now,
  };

  // 1.c) Insert as Omit<Course, "_id">
  const insertResult = await db
    .collection<Omit<Course, "_id">>(COLL)
    .insertOne(toInsert);

  // 1.d) Fetch the inserted document (with its _id)
  const saved = await db.collection<Course>(COLL).findOne({
    _id: insertResult.insertedId,
  });

  return saved!;
}

// 2) FIND ALL COURSES
export async function findAllCourses(): Promise<Course[]> {
  const db = await getDb();
  return db.collection<Course>(COLL).find({}).sort({ createdAt: -1 }).toArray();
}

// 3) FIND ONE BY ID
export async function findCourseById(
  id: string
): Promise<Course | null> {
  const db = await getDb();
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return null;
  return db.collection<Course>(COLL).findOne({ _id: new ObjectId(id) });
}

// 4) UPDATE COURSE
export async function updateCourse(
  id: string,
  data: CourseUpdateInput
): Promise<boolean> {
  const db = await getDb();
  const now = new Date();

  // 4.a) If data.curriculum exists, assign new IDs to each item
  let curriculumToSet: Course["curriculum"] | undefined = undefined;
  if (data.curriculum) {
    curriculumToSet = assignCurriculumIds(data.curriculum);
  }

  // 4.b) Build update document
  const setFields: any = { updatedAt: now };
  if (data.slug !== undefined) setFields.slug = data.slug;
  if (data.title !== undefined) setFields.title = data.title;
  if (data.des !== undefined) setFields.des = data.des;
  if (data.img !== undefined) setFields.img = data.img;
  if (data.iconLists !== undefined) setFields.iconLists = data.iconLists;
  if (data.link !== undefined) setFields.link = data.link;
  if (data.availability !== undefined)
    setFields.availability = data.availability;
  if (data.details !== undefined) setFields.details = data.details;
  if (data.overview !== undefined) setFields.overview = data.overview;
  if (data.objectives !== undefined) setFields.objectives = data.objectives;
  if (curriculumToSet !== undefined) setFields.curriculum = curriculumToSet;
  if (data.tools !== undefined) setFields.tools = data.tools;
  if (data.certificateFeatures !== undefined)
    setFields.certificateFeatures = data.certificateFeatures;

  const result = await db
    .collection<Course>(COLL)
    .updateOne({ _id: new ObjectId(id) }, { $set: setFields });

  return result.matchedCount > 0;
}

// 5) DELETE COURSE
export async function deleteCourse(id: string): Promise<boolean> {
  const db = await getDb();
  const result = await db.collection<Course>(COLL).deleteOne({
    _id: new ObjectId(id),
  });
  return result.deletedCount > 0;
}
