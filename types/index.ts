// types/index.ts
export interface TokenPayload {
  sub: string;      // admin ID
  role: 'admin';
  [key: PropertyKey]: unknown;
}
