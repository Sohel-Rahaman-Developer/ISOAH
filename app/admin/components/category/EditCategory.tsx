'use client'

import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

export interface Category {
  id: string
  name: string
  description?: string
}

export function EditCategory({
  id,
  onSuccess,
}: {
  id: string
  onSuccess: () => void
}) {
  const qc = useQueryClient()
  const { data, isLoading, isError } = useQuery<Category | undefined, Error>({
    queryKey: ['category', id],
    queryFn: async () => {
      const res = await api.get<Category[]>('/blog-categories/all')
      return res.data.find((c) => c.id === id)
    },
    enabled: !!id,
  })

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    if (data) {
      setName(data.name)
      setDesc(data.description || '')
    }
  }, [data])

  const mutation = useMutation<void, Error, { name: string; description?: string }>({
    mutationFn: (body) => api.put(`/blog-categories/edit/${id}`, body).then(() => {}),
    onSuccess: () => {
      toast.success('Category updated')
      qc.invalidateQueries({ queryKey: ['categories'] })
      onSuccess()
    },
    onError: (err) => {
      toast.error(err.message || 'Update failed')
    },
  })

  const updating = mutation.status === 'pending'

  if (isLoading) return <p>Loading edit form…</p>
  if (isError || !data) return <p>Error loading category</p>

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ name, description: desc })
      }}
      className="space-y-4 p-4 bg-gray-50 rounded"
    >
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="flex space-x-2">
        <Button type="submit" disabled={updating}>
          {updating ? 'Updating…' : 'Update'}
        </Button>
        <Button variant="ghost" onClick={() => onSuccess()}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
