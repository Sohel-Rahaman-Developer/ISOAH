'use client'

import { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import toast from 'react-hot-toast'

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

interface Category {
  id: string
  name: string
}

// Remove this unused interface:
// interface Blog {
//   id: string
//   title: string
//   content: string
//   categoryId: string
//   images: string[]
//   createdAt: string
//   updatedAt: string
// }

interface PreviewFile {
  file: File
  previewUrl: string
}

export function CreateBlog({ onSuccess }: { onSuccess?: () => void }) {
  const qc = useQueryClient()

  // Form state
  const [title, setTitle] = useState('')
  const [categoryId, setCategoryId] = useState<string>('')
  const [content, setContent] = useState('')
  const [previewFiles, setPreviewFiles] = useState<PreviewFile[]>([])

  // Fetch blog categories
  const { data: categories, isLoading: catLoading } = useQuery<
    Category[],
    Error
  >({
    queryKey: ['categories'],
    queryFn: () =>
      api.get<Category[]>('/blog-categories/all').then((res) => res.data),
  })

  // Create‐blog mutation
  const createMutation = useMutation<void, Error, FormData>({
    mutationFn: (formData) =>
      api.post('/blogs/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    onSuccess: () => {
      toast.success('Blog created')
      qc.invalidateQueries({ queryKey: ['blogs'] })
      // Reset form
      setTitle('')
      setCategoryId('')
      setContent('')
      // Revoke all existing preview URLs
      previewFiles.forEach((pf) => URL.revokeObjectURL(pf.previewUrl))
      setPreviewFiles([])
      if (onSuccess) onSuccess()
    },
    onError: (err) => {
      toast.error(err.message || 'Creation failed')
    },
  })

  // Jodit configuration
  const joditConfig = useMemo(
    () => ({
      readonly: false,
      height: 300,
      placeholder: 'Write all blog content here…',
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  )

  // Handle selecting files: add to previewFiles with object URLs
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const filesArray = Array.from(e.target.files)

    // Map new files to PreviewFile objects
    const newPreviews = filesArray.map((f) => ({
      file: f,
      previewUrl: URL.createObjectURL(f),
    }))

    // Append to existing previews (but limit to 5 total)
    setPreviewFiles((prev) => {
      const combined = [...prev, ...newPreviews]
      if (combined.length > 5) {
        toast.error('You can upload up to 5 images.')
        // Clean up excess object URLs
        combined.slice(5).forEach((pf) => URL.revokeObjectURL(pf.previewUrl))
        return combined.slice(0, 5)
      }
      return combined
    })

    // Clear input so user can select the same file again if needed:
    e.target.value = ''
  }

  // Remove one preview (and revoke its URL)
  const removePreview = (index: number) => {
    setPreviewFiles((prev) => {
      const removed = prev[index]
      URL.revokeObjectURL(removed.previewUrl)
      return prev.filter((_, i) => i !== index)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !content.trim() || !categoryId) {
      toast.error('Title, Content, and Category are required')
      return
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('categoryId', categoryId)

    // Append each selected file under "images"
    previewFiles.forEach((pf) => formData.append('images', pf.file))

    createMutation.mutate(formData)
  }

  // Clean up all object URLs on unmount
  useEffect(() => {
    return () => {
      previewFiles.forEach((pf) => URL.revokeObjectURL(pf.previewUrl))
    }
  }, [previewFiles])

  if (catLoading) return <p>Loading categories…</p>

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-full mx-auto py-4 px-2 sm:px-0"
        encType="multipart/form-data"
      >
        {/* Title */}
        <div className="space-y-1">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <Input
            id="title"
            placeholder="Blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="bg-white"
          />
        </div>

        {/* Category */}
        <div className="space-y-1">
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <Select
            onValueChange={(val) => setCategoryId(val)}
            value={categoryId}
          >
            <SelectTrigger id="category" className="w-full bg-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories!.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Content (JoditEditor) */}
        <div className="space-y-1">
          <label htmlFor="content" className="block font-medium text-gray-700">
            Content
          </label>
          <JoditEditor
            value={content}
            config={joditConfig}
            onBlur={(newContent: string) => setContent(newContent)}
            className="border rounded"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-1">
          <label htmlFor="images" className="block font-medium text-gray-700">
            Upload Images (max 5)
          </label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileInput}
            className="block"
          />
          {previewFiles.length > 0 && (
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-2">
              {previewFiles.map((pf, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-24 rounded overflow-hidden border"
                >
                  <Image
                    src={pf.previewUrl}
                    alt={`preview-${idx}`}
                    width={96}   // 24*4 = 96px
                    height={96}  // same as h-24
                    className="object-cover"
                    unoptimized   // allow blob URL without Next.js optimization
                  />
                  <button
                    type="button"
                    onClick={() => removePreview(idx)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-75"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={createMutation.status === 'pending'}
          className="w-full"
        >
          {createMutation.status === 'pending' ? 'Creating…' : 'Create Blog'}
        </Button>
      </form>
    </div>
  )
}
