// app/api/auth/login/route.ts
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { compare }                  from 'bcrypt';
import { getDb }                    from '@/lib/mongo';
import { signAccessToken, signRefreshToken } from '@/lib/tokens';
import { env }                      from '@/lib/env';
import { ObjectId }                 from 'mongodb';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const normalized = String(email).trim().toLowerCase();
  console.log(`🔑 Login attempt for: ${normalized}`);

  const db = await getDb();
  const user = await db
    .collection<{ _id: ObjectId; passwordHash: string; role: string }>('admins')
    .findOne({ email: normalized });

  if (!user) {
    console.warn(`🚫 No user found with email: ${normalized}`);
    return NextResponse.json(
      { error: '❌ Invalid credentials' },
      { status: 401 }
    );
  }

  const valid = await compare(password, user.passwordHash);
  if (!valid) {
    console.warn(`🚫 Password mismatch for: ${normalized}`);
    return NextResponse.json(
      { error: '❌ Invalid credentials' },
      { status: 401 }
    );
  }

  // Credentials valid → issue tokens
  const sub = user._id.toHexString();
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken(sub, user.role),
    signRefreshToken(sub, user.role),
  ]);

  console.log(`✅ Login successful for ${normalized}`);

  // Set refresh token cookie
  const response = NextResponse.json(
    { message: '🎉 Login successful!', accessToken },
    { status: 200 }
  );
  response.cookies.set({
    name: env.REFRESH_TOKEN_COOKIE_NAME,
    value: refreshToken,
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    path: '/api/auth/refresh',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return response;
}
