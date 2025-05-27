// lib/auth.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './tokens'
import type { TokenPayload } from '@/types'    // adjust path if needed

export async function requireAdmin(req: NextRequest) {
  const auth = req.headers.get('authorization') ?? ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null

  console.log('🛡️ [requireAdmin] raw authorization header:', auth)
  console.log('🛡️ [requireAdmin] extracted token:', token)

  if (!token) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    )
  }

  try {
    // verifyToken is generic, so we can pass our TokenPayload type
    const payload = await verifyToken<TokenPayload>(token)

    console.log('✅ [requireAdmin] token payload:', payload)

    if (payload.role !== 'admin') {
      console.warn('🚫 [requireAdmin] wrong role:', payload.role)
      return NextResponse.json(
        { error: 'Admin access only' },
        { status: 403 }
      )
    }
  } catch (err: unknown) {
    console.error('🚫 [requireAdmin] verifyToken threw:', err)
    // extract a message if it's an Error
    const message = err instanceof Error ? err.message : 'Invalid or expired token'
    return NextResponse.json(
      { error: message },
      { status: 403 }
    )
  }

  return null
}
