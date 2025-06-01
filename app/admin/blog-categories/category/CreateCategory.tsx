'use client'

import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

interface CreateInput {
  name: string
  description?: string
}

export function CreateCategory({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const qc = useQueryClient()

  const mutation = useMutation<void, Error, CreateInput>({
    mutationFn: (data) => api.post('/blog-categories/create', data).then(() => {}),
    onSuccess: () => {
      toast.success('Category created')
      qc.invalidateQueries({ queryKey: ['categories'] })
      onSuccess()
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Creation failed')
    },
  })

  const creating = mutation.status === 'pending'

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ name, description: desc })
      }}
      className="space-y-4 max-w-md"
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
      <Button type="submit" disabled={creating}>
        {creating ? 'Creating…' : 'Create Category'}
      </Button>
    </form>
  )
}
