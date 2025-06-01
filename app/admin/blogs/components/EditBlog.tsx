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

// Dynamically load JoditEditor (no SSR)
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

interface Category {
  id: string
  name: string
}

interface Blog {
  id: string
  title: string
  content: string
  categoryId: string
  images: string[]   // URLs for existing images
  createdAt: string
  updatedAt: string
}

interface PreviewFile {
  file: File
  previewUrl: string
}

export function EditBlog({
  id,
  initialValues,
  onSuccess,
}: {
  id: string
  initialValues: Blog
  onSuccess: () => void
}) {
  const qc = useQueryClient()

  // Prepopulate fields from initialValues
  const [title, setTitle] = useState(initialValues.title)
  const [categoryId, setCategoryId] = useState(initialValues.categoryId)
  const [content, setContent] = useState(initialValues.content)

  // Existing images (read-only URLs)
  const [existingImages] = useState<string[]>(initialValues.images)

  // New files + previews
  const [previewFiles, setPreviewFiles] = useState<PreviewFile[]>([])

  // Fetch categories for the dropdown
  const { data: categories, isLoading: catLoading } = useQuery<
    Category[],
    Error
  >({
    queryKey: ['categories'],
    queryFn: () =>
      api.get<Category[]>('/blog-categories/all').then((res) => res.data),
  })

  // The mutation to submit edits
  const editMutation = useMutation<void, Error, FormData>({
    mutationFn: (formData) =>
      api.put(`/blogs/edit/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    onSuccess: () => {
      toast.success('Blog updated')
      qc.invalidateQueries({ queryKey: ['blogs'] })
      // Revoke object URLs for newly added previews
      previewFiles.forEach((pf) => URL.revokeObjectURL(pf.previewUrl))
      onSuccess()
    },
    onError: (err) => {
      toast.error(err.message || 'Update failed')
    },
  })

  // ===== Jodit Config: remove the “fullsize” button =====
  const joditConfig = useMemo(
    () => ({
      readonly: false,
      height: 300,
      placeholder: 'Edit blog content…',
      removeButtons: ['fullsize', 'about'],
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  )

  // Handle new file selection
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const filesArray = Array.from(e.target.files)
    const newPreviews = filesArray.map((f) => ({
      file: f,
      previewUrl: URL.createObjectURL(f),
    }))

    setPreviewFiles((prev) => {
      const combined = [...prev, ...newPreviews]
      if (combined.length > 5) {
        toast.error('You can append up to 5 new images.')
        // Revoke the URLs of any extras
        combined.slice(5).forEach((pf) => URL.revokeObjectURL(pf.previewUrl))
        return combined.slice(0, 5)
      }
      return combined
    })
    // Clear input so user can rechoose
    e.target.value = ''
  }

  // Remove a newly added preview
  const removePreview = (index: number) => {
    setPreviewFiles((prev) => {
      const removed = prev[index]
      URL.revokeObjectURL(removed.previewUrl)
      return prev.filter((_, i) => i !== index)
    })
  }

  // Submit edited fields
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    if (title !== initialValues.title) formData.append('title', title)
    if (content !== initialValues.content) formData.append('content', content)
    if (categoryId !== initialValues.categoryId)
      formData.append('categoryId', categoryId)

    previewFiles.forEach((pf) => formData.append('images', pf.file))

    if ([...formData.keys()].length === 0) {
      toast.error('No changes detected')
      return
    }

    editMutation.mutate(formData)
  }

  // Clean up object URLs if component unmounts
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
          <label htmlFor="edit-title" className="block font-medium text-gray-700">
            Title
          </label>
          <Input
            id="edit-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="bg-white"
          />
        </div>

        {/* Category */}
        <div className="space-y-1">
          <label htmlFor="edit-category" className="block font-medium text-gray-700">
            Category
          </label>
          <Select
            onValueChange={(val) => setCategoryId(val)}
            value={categoryId}
          >
            <SelectTrigger id="edit-category" className="w-full bg-white">
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
          <label htmlFor="edit-content" className="block font-medium text-gray-700">
            Content
          </label>
          <JoditEditor
            value={content}
            config={joditConfig}
            onBlur={(newContent: string) => setContent(newContent)}
            className="border rounded"
          />
        </div>

        {/* Existing Images */}
        {existingImages.length > 0 && (
          <div className="space-y-1">
            <label className="block font-medium text-gray-700">
              Existing Images
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {existingImages.map((url, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-24 rounded overflow-hidden border"
                >
                  <Image
                    src={url}
                    alt={`existing-${idx}`}
                    width={96}      // 24 * 4 = 96px
                    height={96}     // maintain square thumbnail
                    className="object-cover"
                    unoptimized     // use if your domain isn’t configured in next.config.js
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Append New Images */}
        <div className="space-y-1">
          <label htmlFor="edit-images" className="block font-medium text-gray-700">
            Append New Images (max 5)
          </label>
          <input
            id="edit-images"
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
                    width={96}
                    height={96}
                    className="object-cover"
                    unoptimized
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
          disabled={editMutation.status === 'pending'}
          className="w-full"
        >
          {editMutation.status === 'pending' ? 'Updating…' : 'Save Changes'}
        </Button>
      </form>
    </div>
  )
}
