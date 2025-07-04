// src/types/course.ts

import { ObjectId } from "mongodb";

//
// 1) The “final” Course document shape in MongoDB:
//    Each curriculum item has its own `id: string` field.
//
export interface Course {
  _id: ObjectId;
  slug: string;
  title: string;
  des: string;
  img: string; // e.g. "/c1.webp"
  iconLists: string[];
  link: string; // relative path, e.g. "/certifications/..."
  availability: "online" | "offline" | "both";
  details: {
    title: string;
    tagline: string;
    description: string;
    stats: {
      averageCtc: string;
      linkedinJobs: string;
      mentors: string;
    };
    actions: { type: "primary" | "secondary"; label: string; href: string }[];
    heroImage: string;
    playDemoLink: string; // relative path or "#"
    cohortStart: string; // "YYYY-MM-DD"
    pricing: {
      original: number;
      discounted: number;
      currency: string;
      emiInfo: string;
    };
    demoOffer: {
      text: string;
      icon: string;
    };
    finePrint: string;
  };
  overview: {
    eligibility: string;
    learningOutcome: string;
    statsRow: { label: string; value: string }[];
    icons: string[];
  };
  objectives: string[];
  curriculum: {
    id: string; // generated server‐side
    title: string;
    duration: string;
    stats: {
      liveSessions: number;
      projects: number;
      caseStudies: number;
      quizzes: number;
    };
    modules: {
      title: string;
      bullets: string[];
      project?: string;
      caseStudy?: string;
    }[];
  }[];
  tools: { name: string; src: string }[];
  certificateFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

//
// 2) Input shapes for creation and update (curriculum items come in WITHOUT `id`):
//

// A single curriculum item as sent by the client (no `id` property).
export type CurriculumItemInput = Omit<Course["curriculum"][number], "id">;

// When creating a new Course, the client sends everything except:
//   - `_id`, `createdAt`, `updatedAt` (server/Mongo set these).
//   - `curriculum[].id` (server will generate that).
export type CourseCreateInput = Omit<
  Course,
  "_id" | "createdAt" | "updatedAt" | "curriculum"
> & {
  curriculum: CurriculumItemInput[];
};

// When updating an existing Course, all fields are optional, but if
// `curriculum` is provided it must be an array of CurriculumItemInput[].
export type CourseUpdateInput = Partial<
  Omit<
    Course,
    "_id" | "createdAt" | "updatedAt" | "curriculum"
  > & { curriculum: CurriculumItemInput[] }
>;
