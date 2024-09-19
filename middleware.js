import { NextResponse } from 'next/server';
import { generateNonce } from './utils/nonce';

export function middleware(request) {
  const nonce = generateNonce();
  const response = NextResponse.next();

  response.headers.set(
    'Content-Security-Policy',
    `script-src 'self' 'nonce-${nonce}' https://maps.googleapis.com;`
  );

  // Add the nonce to the request so it can be accessed in pages
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: ['/map'], // Apply this middleware only to the /map route
};