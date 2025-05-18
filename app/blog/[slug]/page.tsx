// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import type { Blog } from "@/data/blogs";
import BlogDetailClient from "./BlogDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post: Blog | undefined = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  return <BlogDetailClient post={post} />;
}
