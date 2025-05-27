// lib/tokens.ts
import { V2 } from 'paseto';
import { createPrivateKey, createPublicKey, KeyObject } from 'crypto';
import { readFileSync } from 'fs';
import { resolve }      from 'path';
import { env }          from './env';

const PRIV = resolve(process.cwd(), 'private_key.pem');
const PUB  = resolve(process.cwd(), 'public_key.pem');

function signingKey(): KeyObject {
  return createPrivateKey({
    key: readFileSync(PRIV),
    format: 'pem',
    type: 'pkcs8',
  });
}
function verifyKey(): KeyObject {
  return createPublicKey({
    key: readFileSync(PUB),
    format: 'pem',
    type: 'spki',
  });
}

export async function signAccessToken(sub: string, role: string) {
  return V2.sign(
    { sub, role },
    signingKey(),
    { expiresIn: env.ACCESS_TOKEN_EXPIRES_IN }
  );
}

export async function signRefreshToken(sub: string, role: string) {
  return V2.sign(
    { sub, role },
    signingKey(),
    { expiresIn: env.REFRESH_TOKEN_EXPIRES_IN }
  );
}

export async function verifyToken<T extends Record<string, unknown> = Record<string, unknown>>(
  token: string
): Promise<T> {
  const payload = await V2.verify(token, verifyKey());
  return payload as T;
}
