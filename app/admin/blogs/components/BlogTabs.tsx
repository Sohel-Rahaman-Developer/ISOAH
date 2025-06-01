'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AllBlogs } from './AllBlogs'
import { CreateBlog } from './CreateBlog'

export function BlogTabs() {
  const [active, setActive] = useState<'all' | 'create'>('all')

  return (
    <Tabs
      value={active}
      onValueChange={v => setActive(v as 'all' | 'create')}
      className="space-y-6"
    >
      <TabsList>
        <TabsTrigger value="all">All Blogs</TabsTrigger>
        <TabsTrigger value="create">Create Blog</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <AllBlogs />
      </TabsContent>
      <TabsContent value="create">
        <CreateBlog onSuccess={() => setActive('all')} />
      </TabsContent>
    </Tabs>
  )
}
