// app/admin/blog-categories/page.tsx

import { CategoryTabs } from "./category/CategoryTabs";



export default function BlogCategoriesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Categories</h1>
      <CategoryTabs />
    </div>
  )
}
