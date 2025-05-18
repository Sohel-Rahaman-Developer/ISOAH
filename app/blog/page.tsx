// app/blog/page.tsx
"use client"
import Link from "next/link";
import { Footer } from "../components/Footer";
import Cursor from "../Cursor";
import Navbar from "../components/Header/Navbar";
import Blogs from "./Blogs";

export default function BlogListPage() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <Blogs />
        <div className="px-6 max-w-7xl mx-auto">
          <hr />
        </div>
        <Footer />
      </div>
    </main>
  );
}
