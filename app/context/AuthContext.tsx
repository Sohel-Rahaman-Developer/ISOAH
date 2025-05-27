// context/AuthContext.tsx
'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import api, { setAccessToken as setAxiosToken } from '@/lib/axios'

interface AuthContextType {
  accessToken: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [accessToken, setAccessTokenState] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = sessionStorage.getItem('accessToken')
    if (saved) setAxiosToken(saved)
    return saved
  })

  useEffect(() => {
    if (accessToken) {
      sessionStorage.setItem('accessToken', accessToken)
      setAxiosToken(accessToken)
    } else {
      sessionStorage.removeItem('accessToken')
      setAxiosToken('')
    }
  }, [accessToken])

  const login = async (email: string, password: string) => {
    const { data } = await api.post(
      '/auth/login',
      { email, password },
      { withCredentials: true }
    )
    setAccessTokenState(data.accessToken)
    router.push('/admin/dashboard')
  }

  const logout = () => {
    setAccessTokenState(null)
    router.push('/admin/login')
  }

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
