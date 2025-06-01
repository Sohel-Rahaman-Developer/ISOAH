// src/schemas/course.ts

import { z } from "zod";

//
// 1) Nested sub‐schemas for validation:
//

const StatSchema = z.object({
  averageCtc: z.string().nonempty("averageCtc is required"),
  linkedinJobs: z.string().nonempty("linkedinJobs is required"),
  mentors: z.string().nonempty("mentors is required"),
});

// Only allow relative hrefs ("/path" or "#anchor")
const RelativeHrefSchema = z
  .string()
  .regex(
    /^\/.*|^#.*$/,
    "href must be a relative path (starting with '/' or '#')"
  )
  .nonempty("href is required");

const ActionSchema = z.object({
  type: z.enum(["primary", "secondary"]),
  label: z.string().nonempty("Action label is required"),
  href: RelativeHrefSchema,
});

const PricingSchema = z.object({
  original: z.number().positive("original must be positive"),
  discounted: z.number().positive("discounted must be positive"),
  currency: z.string().nonempty("currency is required"),
  emiInfo: z.string().nonempty("emiInfo is required"),
});

const DemoOfferSchema = z.object({
  text: z.string().nonempty("demoOffer text is required"),
  icon: z.string().nonempty("demoOffer icon is required"),
});

// Only allow relative playDemoLink
const PlayDemoLinkSchema = z
  .string()
  .regex(
    /^\/.*|^#.*$/,
    "playDemoLink must be a relative path (starting with '/' or '#')"
  )
  .nonempty("playDemoLink is required");

const DetailsSchema = z.object({
  title: z.string().nonempty("details.title is required"),
  tagline: z.string().nonempty("details.tagline is required"),
  description: z.string().nonempty("details.description is required"),
  stats: StatSchema,
  actions: z.array(ActionSchema).min(1, "At least one action is required"),
  heroImage: z.string().nonempty("heroImage is required"),
  playDemoLink: PlayDemoLinkSchema,
  cohortStart: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "cohortStart must be YYYY-MM-DD"),
  pricing: PricingSchema,
  demoOffer: DemoOfferSchema,
  finePrint: z.string().nonempty("finePrint is required"),
});

const StatsRowItemSchema = z.object({
  label: z.string().nonempty("statsRow label is required"),
  value: z.string().nonempty("statsRow value is required"),
});

const OverviewSchema = z.object({
  eligibility: z.string().nonempty("overview.eligibility is required"),
  learningOutcome: z.string().nonempty("overview.learningOutcome is required"),
  statsRow: z
    .array(StatsRowItemSchema)
    .min(1, "overview.statsRow must have at least one item"),
  icons: z.array(z.string().nonempty("icon string is required")),
});

const CurriculumModuleSchema = z.object({
  title: z.string().nonempty("module.title is required"),
  bullets: z.array(z.string().nonempty("bullet is required")).min(1),
  project: z.string().optional(),
  caseStudy: z.string().optional(),
});

// **No `id` here**—we generate it server‐side.
const CurriculumItemSchema = z.object({
  title: z.string().nonempty("curriculum.title is required"),
  duration: z.string().nonempty("curriculum.duration is required"),
  stats: z.object({
    liveSessions: z.number().int().nonnegative(),
    projects: z.number().int().nonnegative(),
    caseStudies: z.number().int().nonnegative(),
    quizzes: z.number().int().nonnegative(),
  }),
  modules: z
    .array(CurriculumModuleSchema)
    .min(1, "At least one module is required"),
});

const ToolSchema = z.object({
  name: z.string().nonempty("tool.name is required"),
  src: z.string().nonempty("tool.src is required"),
});

const CertificateFeatureSchema = z.object({
  icon: z.string().nonempty("certificate feature icon is required"),
  title: z.string().nonempty("certificate feature title is required"),
  description: z.string().nonempty("certificate feature description is required"),
});

// Only allow a relative link for the top‐level course link.
const CourseLinkSchema = z
  .string()
  .regex(
    /^\/[A-Za-z0-9\-/]*$/,
    "link must be a relative path (starting with '/')"
  )
  .nonempty("link is required");

//
// 2) Top‐level schemas:
//

export const createCourseSchema = z.object({
  slug: z
    .string()
    .regex(
      /^[a-z0-9-]+$/,
      "slug must be lowercase alphanumeric plus dashes"
    )
    .nonempty("slug is required"),
  title: z.string().nonempty("title is required"),
  des: z.string().nonempty("des is required"),
  img: z.string().nonempty("img is required"),
  iconLists: z
    .array(z.string().nonempty("icon string is required"))
    .min(1, "iconLists must have at least one icon"),
  link: CourseLinkSchema,
  availability: z.enum(["online", "offline", "both"]),
  details: DetailsSchema,
  overview: OverviewSchema,
  objectives: z
    .array(z.string().nonempty("objective is required"))
    .min(1, "At least one objective is required"),
  curriculum: z
    .array(CurriculumItemSchema)
    .min(1, "At least one curriculum item is required"),
  tools: z.array(ToolSchema).min(1, "At least one tool is required"),
  certificateFeatures: z
    .array(CertificateFeatureSchema)
    .min(1, "At least one certificate feature is required"),
});

// For updates, all fields are optional, but at least one must appear.
export const editCourseSchema = createCourseSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, "At least one field must be provided");
