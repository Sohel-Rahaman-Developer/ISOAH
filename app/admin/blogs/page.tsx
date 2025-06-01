// app/admin/blog-categories/page.tsx
import { BlogTabs } from "./components/BlogTabs";

export default function BlogCategoriesPage() {
  return (
    <div className="p-6 bg-[#f5f9d0b5] rounded-lg shadow-md border">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <BlogTabs/>
    </div>
  )
}