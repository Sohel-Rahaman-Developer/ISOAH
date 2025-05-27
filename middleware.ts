// middleware.ts  (Edge runtime — no paseto imports here)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { env } from '@/lib/env';

// Convert string env vars to numbers
const RATE_WINDOW_MS = Number(env.RATE_LIMIT_WINDOW) * 1000;  // env was in seconds
const MAX_CALLS      = Number(env.RATE_LIMIT_MAX);
const BLOCK_TIME_MS  = 15 * 60 * 1000;

type Entry = { count: number; windowReset: number; blockedUntil: number };
const ipStore = new Map<string, Entry>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  let e = ipStore.get(ip);

  if (!e) {
    // start new window
    ipStore.set(ip, {
      count: 1,
      windowReset: now + RATE_WINDOW_MS,
      blockedUntil: 0,
    });
    return true;
  }

  // still blocked?
  if (now < e.blockedUntil) {
    return false;
  }

  // window expired → reset
  if (now > e.windowReset) {
    e.count = 1;
    e.windowReset = now + RATE_WINDOW_MS;
    e.blockedUntil = 0;
    return true;
  }

  // within window → increment
  e.count++;
  if (e.count > MAX_CALLS) {
    e.blockedUntil = now + BLOCK_TIME_MS;
    return false;
  }

  return true;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1) Rate-limit only your auth endpoints
  if (pathname.startsWith('/api/auth/')) {
    const ip =
      req.headers.get('x-real-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      'unknown';

    if (!rateLimit(ip)) {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
  }

  // 2) Security + CORS headers for all API responses
  const res = NextResponse.next();
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'no-referrer');

  if (pathname.startsWith('/api/')) {
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
  }

  return res;
}

export default middleware;

export const config = {
  matcher: ['/api/:path*'],
};
