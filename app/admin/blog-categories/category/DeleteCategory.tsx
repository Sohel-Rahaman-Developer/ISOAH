'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

export function DeleteCategory({
  id,
  onSuccess,
}: {
  id: string
  onSuccess: () => void
}) {
  const qc = useQueryClient()

  const mutation = useMutation<void, Error, void>({
    mutationFn: () => api.delete(`/blog-categories/delete/${id}`).then(() => {}),
    onSuccess: () => {
      toast.success('Category deleted')
      qc.invalidateQueries({ queryKey: ['categories'] })
      onSuccess()
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Delete failed')
    },
  })

  const deleting = mutation.status === 'pending'

  return (
    <div className="space-y-4 max-w-md">
      <p>Are you sure you want to delete this category?</p>
      <Button
        variant="destructive"
        onClick={() => mutation.mutate()}
        disabled={deleting}
      >
        {deleting ? 'Deleting…' : 'Confirm Delete'}
      </Button>
    </div>
  )
}
