// app/certifications/[slug]/page.tsx
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import type { Course } from "@/app/types/course";

import Navbar from "@/app/components/Header/Navbar";
import CourseDetails from "@/app/components/course/CourseDetails";
import CourseSecondComponent from "@/app/components/course/CourseSecondComponent";
import CourseCurriculum from "@/app/components/course/CourseCurriculum";
import ToolsShowcase from "@/app/components/course/ToolsShowcase";
import DemoCertificate from "@/app/components/course/DemoCertificate";
import Cursor from "@/app/Cursor";
import { Footer } from "@/app/components/Footer";

// statically generate one page for each `slug`
export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

type Params = { slug: string };

export default async function Page({
  params,
}: {
  // ← must be Promise<Params>, never a union
  params: Promise<Params>;
}) {
  const { slug } = await params; // ← await your params
  const course = courses.find((c) => c.slug === slug) as Course | undefined;
  if (!course) notFound();

  return (
    <main className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <div className="relative z-10 text-white pt-20">
          <CourseDetails details={course.details} />
          <CourseSecondComponent
            overview={course.overview}
            objectives={course.objectives}
          />
          <CourseCurriculum milestones={course.curriculum} />
          <ToolsShowcase tools={course.tools} />
          <DemoCertificate features={course.certificateFeatures} />
        </div>
        <div className="px-6 max-w-7xl mx-auto">
          <hr />
        </div>
        <Footer />
      </div>
    </main>
  );
}
