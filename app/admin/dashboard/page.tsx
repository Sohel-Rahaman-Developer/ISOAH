// app/admin/dashboard/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
// import api from '@/lib/axios'

// import { AppSidebar } from '@/components/app-sidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
// import { SiteHeader } from '@/components/site-header'
import {  SidebarProvider } from '@/components/ui/sidebar'

import data from './data.json'

export default function DashboardPage() {
  const { accessToken, logout } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (accessToken === null && loading) return
    if (!accessToken) {
      router.replace('/admin/login')
      return
    }
    // You can fetch stats here if needed, then setLoading(false)
    setLoading(false)
  }, [accessToken, router, loading])

  if (!accessToken || loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Loading…</p>
      </div>
    )
  }

  return (
    <SidebarProvider>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto p-4">
          <div className="flex flex-col gap-6">
            {/* Top stats cards */}
            <SectionCards />

            {/* Interactive chart */}
            <div className="w-full">
              <ChartAreaInteractive />
            </div>

            {/* Data table */}
            <div className="w-full">
              <DataTable data={data} />
            </div>
          </div>

          {/* Logout button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </main>

    </SidebarProvider>
  )
}
