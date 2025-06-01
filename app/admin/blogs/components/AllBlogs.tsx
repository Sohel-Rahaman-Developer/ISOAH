'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import api from '@/lib/axios'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import toast from 'react-hot-toast'

// Lazy‐load EditBlog inside a dialog
const EditBlog = dynamic(() => import('./EditBlog').then((mod) => mod.EditBlog), {
  ssr: false,
})

interface Blog {
  id: string
  title: string
  content: string
  categoryId: string
  images: string[]
  createdAt: string
  updatedAt: string
}

interface Category {
  id: string
  name: string
}

export function AllBlogs() {
  const qc = useQueryClient()
  const [editingId, setEditingId] = useState<string | null>(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5 // number of blogs per page

  // 1) Fetch all blogs
  const {
    data: blogs,
    isLoading: blogsLoading,
    isError: blogsError,
  } = useQuery<Blog[], Error>({
    queryKey: ['blogs'],
    queryFn: () => api.get<Blog[]>('/blogs/all').then((res) => res.data),
  })

  // 2) Fetch all categories
  const {
    data: categories,
    isLoading: catsLoading,
    isError: catsError,
  } = useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: () => api.get<Category[]>('/blog-categories/all').then((res) => res.data),
  })

  // Build lookup map: categoryId → categoryName
  const categoryNameById: Record<string, string> = {}
  if (categories) {
    categories.forEach((cat) => {
      categoryNameById[cat.id] = cat.name
    })
  }

  // 3) Delete mutation
  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: (id) => api.delete(`/blogs/delete/${id}`).then(() => {}),
    onSuccess: () => {
      toast.success('Blog deleted')
      qc.invalidateQueries({ queryKey: ['blogs'] })
    },
    onError: (err) => {
      toast.error(err.message || 'Delete failed')
    },
  })

  // Handle loading states
  if (blogsLoading || catsLoading) {
    return <p className="text-center py-8">Loading...</p>
  }
  if (blogsError) {
    return <p className="text-center py-8">Error loading blogs.</p>
  }
  if (catsError) {
    return <p className="text-center py-8">Error loading categories.</p>
  }
  if (!blogs || blogs.length === 0) {
    return <p className="text-center py-8">No blogs found.</p>
  }

  // 4) Pagination calculations
  const totalBlogs = blogs.length
  const totalPages = Math.ceil(totalBlogs / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const pagedBlogs = blogs.slice(startIndex, startIndex + pageSize)

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <Card className="rounded-lg shadow-md overflow-hidden">
      <CardHeader>
        <CardTitle>All Blogs</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="pl-6 pr-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  SL.
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </TableHead>
                <TableHead className="relative px-4 py-3">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              {pagedBlogs.map((blog, index) => {
                const serialNumber = startIndex + index + 1
                const categoryName = categoryNameById[blog.categoryId] || 'Unknown'
                return (
                  <TableRow
                    key={blog.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <TableCell className="pl-6 pr-4 py-4 whitespace-nowrap text-sm text-gray-700">
                      {serialNumber}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {blog.title}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                      {categoryName}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        {/* Edit Button & Dialog */}
                        <Dialog
                          open={editingId === blog.id}
                          onOpenChange={(open) =>
                            setEditingId(open ? blog.id : null)
                          }
                        >
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-7xl">
                            <div className="max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Edit Blog</DialogTitle>
                                <DialogDescription>
                                  Change fields and click “Save Changes.”
                                </DialogDescription>
                              </DialogHeader>
                              <EditBlog
                                id={blog.id}
                                initialValues={blog}
                                onSuccess={() => {
                                  setEditingId(null)
                                  qc.invalidateQueries({ queryKey: ['blogs'] })
                                  toast.success('Blog updated')
                                }}
                              />
                              <div className="pt-4 text-right">
                                <DialogClose asChild>
                                  <Button variant="ghost">Close</Button>
                                </DialogClose>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* Delete Button */}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteMutation.mutate(blog.id)}
                          disabled={deleteMutation.status === 'pending'}
                        >
                          {deleteMutation.status === 'pending'
                            ? 'Deleting…'
                            : 'Delete'}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Controls */}
        <div className="py-4 px-6 flex items-center justify-between bg-gray-50 border-t">
          <div>
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min(startIndex + pageSize, totalBlogs)}
              </span>{' '}
              of <span className="font-medium">{totalBlogs}</span> results
            </p>
          </div>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`
                px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-md 
                hover:bg-gray-100 hover:text-gray-700
                ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1
              const isActive = pageNum === currentPage
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`
                    px-3 py-2 leading-tight border border-gray-300 text-sm 
                    ${isActive
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  {pageNum}
                </button>
              )
            })}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`
                px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-md 
                hover:bg-gray-100 hover:text-gray-700
                ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              Next
            </button>
          </nav>
        </div>
      </CardContent>
    </Card>
  )
}
