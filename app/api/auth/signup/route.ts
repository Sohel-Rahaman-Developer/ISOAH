// app/api/auth/signup/route.ts
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { hash }                    from 'bcrypt';
import { getDb }                   from '@/lib/mongo';
import { signAccessToken, signRefreshToken } from '@/lib/tokens';
import { env }                     from '@/lib/env';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email    = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  const role     = String(body.role || 'admin');

  // 1) Validate email format
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }

  // 2) Validate password complexity
  if (!PASSWORD_REGEX.test(password)) {
    return NextResponse.json(
      {
        error:
          'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
      },
      { status: 400 }
    );
  }

  const db = await getDb();

  // 3) Check if email is already registered
  if (await db.collection('admins').findOne({ email })) {
    return NextResponse.json(
      { error: 'Email is already registered' },
      { status: 409 }
    );
  }

  // 4) Hash & insert new admin
  const passwordHash = await hash(password, 10);
  const { insertedId } = await db.collection('admins').insertOne({
    email,
    passwordHash,
    role,
    createdAt: new Date()
  });

  // 5) Issue tokens
  const sub = String(insertedId);
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken(sub, role),
    signRefreshToken(sub, role)
  ]);

  // 6) Set refresh-cookie & return access token
  const res = NextResponse.json(
    { accessToken },
    { status: 201 }
  );
  res.cookies.set({
    name: env.REFRESH_TOKEN_COOKIE_NAME,
    value: refreshToken,
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    path: '/api/auth/refresh',
    maxAge: 7 * 24 * 60 * 60
  });

  return res;
}
