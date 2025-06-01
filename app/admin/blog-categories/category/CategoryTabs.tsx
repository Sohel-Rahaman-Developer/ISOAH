'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AllCategories } from './AllCategories'
import { CreateCategory } from './CreateCategory'

type Tab = 'all' | 'create'

export function CategoryTabs() {
  const [active, setActive] = useState<Tab>('all')

  return (
    <Tabs value={active} onValueChange={(v) => setActive(v as Tab)} className="space-y-4">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <AllCategories />
      </TabsContent>
      <TabsContent value="create">
        <CreateCategory onSuccess={() => setActive('all')} />
      </TabsContent>
    </Tabs>
  )
}
