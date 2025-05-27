// lib/env.ts
import { z } from 'zod';

// define your schema
const _env = z.object({
  // existing vars
  MONGODB_URI:           z.string(),
  PASETO_SECRET:         z.string(),
  NODE_ENV:              z.enum(['development', 'production', 'test']),
  RATE_LIMIT_WINDOW:     z.string(),
  RATE_LIMIT_MAX:        z.string(),
  REFRESH_TOKEN_COOKIE_NAME: z.string(),

  // add these two:
  ACCESS_TOKEN_EXPIRES_IN:  z.string().default('15m'),
  REFRESH_TOKEN_EXPIRES_IN: z.string().default('7d'),
});

// read from process.env and export
export const env = _env.parse(process.env);
