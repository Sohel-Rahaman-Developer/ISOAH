// app/AdminWrapper.tsx
'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import ParticlesBackground from './ParticlesBackground'
import { AuthProvider } from './context/AuthContext'
import AdminGuard from './AdminGuard'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'

export default function AdminWrapper({ children }: { children: ReactNode }) {
  const path = usePathname() || ''
  const isAdminBase = path === '/admin'
  const isLogin = path === '/admin/login'
  // const isAdminSection = path.startsWith('/admin/') && !isLogin

  // 1) Non-admin routes: show ParticlesBackground
  if (!path.startsWith('/admin')) {
    return (
      <>
        <ParticlesBackground />
        {children}
      </>
    )
  }

  // 2) /admin or /admin/login: only AuthProvider, no guard, no sidebar
  if (isAdminBase || isLogin) {
    return <AuthProvider>{children}</AuthProvider>
  }

  // 3) All other /admin/* (except login): full admin shell + guard
  return (
    <AuthProvider>
      <AdminGuard>
        <SidebarProvider>
          <div className="flex h-screen w-screen overflow-hidden">
            <AppSidebar />
            <SidebarInset className="flex flex-1 flex-col bg-background">
              <SiteHeader />
              <main className="flex-1 overflow-auto bg-slate-50 p-4">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </AdminGuard>
    </AuthProvider>
  )
}
