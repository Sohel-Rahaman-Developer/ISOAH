// app/api/auth/refresh/route.ts
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import {
  verifyToken,
  signAccessToken,
  signRefreshToken
} from '@/lib/tokens';
import { env } from '@/lib/env';

type RefreshPayload = {
  sub: string;
  role: string;
  iat?: number;   // issued-at, if you care
  exp?: number;   // expiration, if you care
};

export async function GET(req: NextRequest) {
  console.log(`🔄 Refresh token request received`);

  // 1) Extract refresh token from cookie
  const cookieHeader = req.headers.get('cookie') || '';
  const rawToken = cookieHeader
    .split(';')
    .find(c => c.trim().startsWith(env.REFRESH_TOKEN_COOKIE_NAME + '='))
    ?.split('=')[1];

  if (!rawToken) {
    console.warn(`🚫 No refresh token cookie found`);
    return NextResponse.json(
      { error: '❌ No refresh token provided' },
      { status: 401 }
    );
  }

  // 2) Verify existing refresh token
  let payload: RefreshPayload;
  try {
    payload = (await verifyToken(rawToken)) as RefreshPayload;
  } catch (err) {
    console.warn(`🚫 Invalid refresh token: ${err}`);
    return NextResponse.json(
      { error: '❌ Invalid or expired refresh token' },
      { status: 403 }
    );
  }

  // 3) Rotate tokens
  const sub  = payload.sub;
  const role = payload.role;
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken(sub, role),
    signRefreshToken(sub, role),
  ]);

  console.log(`✅ Tokens rotated for user ${sub}`);

  // 4) Send new access token + set refreshed cookie
  const res = NextResponse.json(
    { message: '🔄 Tokens refreshed!', accessToken },
    { status: 200 }
  );

  res.cookies.set({
    name: env.REFRESH_TOKEN_COOKIE_NAME,
    value: refreshToken,
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    path: '/api/auth/refresh',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return res;
}
