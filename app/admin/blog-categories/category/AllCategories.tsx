'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogClose 
} from '@/components/ui/dialog'
import toast from 'react-hot-toast'
import { EditCategory, Category } from './EditCategory'

export function AllCategories() {
  const qc = useQueryClient()
  const [editingId, setEditingId] = useState<string | null>(null)

  const { data, isLoading, isError } = useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: () => api.get<Category[]>('/blog-categories/all').then(r => r.data),
  })

  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: (id) => api.delete(`/blog-categories/delete/${id}`).then(() => {}),
    onSuccess: () => {
      toast.success('Category deleted')
      qc.invalidateQueries({ queryKey: ['categories'] })
    },
    onError: (err) => {
      toast.error(err.message || 'Delete failed')
    },
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading categories</p>

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>All Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {data!.map((cat) => (
                <TableRow key={cat.id}>
                  <TableCell className="w-1/4">{cat.name}</TableCell>
                  <TableCell className="w-1/2">{cat.description}</TableCell>
                  <TableCell className="flex space-x-2">
                    <Dialog
                      open={editingId === cat.id}
                      onOpenChange={(open) => setEditingId(open ? cat.id : null)}
                    >
                      <DialogTrigger asChild>
                        <Button size="sm">Edit</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Category</DialogTitle>
                          <DialogDescription>
                            Update the fields and click “Update” to save.
                          </DialogDescription>
                        </DialogHeader>
                        <EditCategory
                          id={cat.id}
                          onSuccess={() => {
                            setEditingId(null)
                            qc.invalidateQueries({ queryKey: ['categories'] })
                            toast.success('Category updated')
                          }}
                        />
                        <DialogClose asChild>
                          <Button variant="ghost" className="mt-4">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteMutation.mutate(cat.id)}
                      disabled={deleteMutation.status === 'pending'}
                    >
                      {deleteMutation.status === 'pending' ? 'Deleting…' : 'Delete'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}