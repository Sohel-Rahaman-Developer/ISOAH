'use client'

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { useRouter } from 'next/navigation'
import { setAccessToken as setAxiosToken } from '@/lib/axios'

interface AuthContextType {
  accessToken: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  // lazy init from sessionStorage so it's never "null → read later"
  const [accessToken, setAccessTokenState] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = sessionStorage.getItem('accessToken')
    if (saved) {
      setAxiosToken(saved)
      return saved
    }
    return null
  })

  // sync any updates back into sessionStorage & axios
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
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.error || 'Login failed')
    }
    const { accessToken: token } = await res.json()
    setAccessTokenState(token)
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
