// src/types/course.ts

import { ObjectId } from "mongodb";

export interface Course {
  _id: ObjectId;
  slug: string;
  title: string;
  des: string;
  img: string; // URL or path to the course image
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
    cohortStart: string; // YYYY-MM-DD
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
    id: string; // generated server-side
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

// Input type for creating a course (everything except _id, createdAt, updatedAt):
export type CourseCreateInput = Omit<
  Course,
  "_id" | "createdAt" | "updatedAt"
>;

// Input type for updating a course (all fields optional except _id, timestamps):
export type CourseUpdateInput = Partial<CourseCreateInput>;
