import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import type { Course } from "@/app/types/course"; 
import { Footer } from "../components/Footer";
import Navbar from "../components/Header/Navbar";
import Cursor from "../Cursor";
import CourseDetails from "../components/course/CourseDetails";
import CourseSecondComponent from "../components/course/CourseSecondComponent";
import CourseCurriculum from "../components/course/CourseCurriculum";
import ToolsShowcase from "../components/course/ToolsShowcase";
import DemoCertificate from "../components/course/DemoCertificate";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function Page({ params: { slug } }: PageProps) {
  const course: Course | undefined = courses.find((c) => c.slug === slug);
  if (!course) {
    notFound();
  }

  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <div className=" relative z-10 text-white  pt-20">
          <CourseDetails {...course.details} />
          <CourseSecondComponent {...course.overview} />
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
