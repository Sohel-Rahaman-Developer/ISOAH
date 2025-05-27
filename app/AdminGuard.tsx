// app/admin/AdminGuard.tsx
'use client';

import React, { ReactNode, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from './context/AuthContext'

export default function AdminGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { accessToken } = useAuth()

  useEffect(() => {
    // If not on the login page and not authenticated, redirect to /admin
    if (pathname.startsWith('/admin') && pathname !== '/admin' && !accessToken) {
      router.replace('/admin')
    }
  }, [pathname, accessToken, router])

  return <>{children}</>
}
