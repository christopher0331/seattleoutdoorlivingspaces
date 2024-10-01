// middleware.js

// Import necessary modules
import { NextResponse } from 'next/server';

// Define your middleware function
export function middleware(request) {
  // You can perform other middleware operations here

  // Example: If you need to redirect or modify the response
  const response = NextResponse.next();

  // Return the response
  return response;
}

// Configure the middleware to match specific routes if needed
export const config = {
  matcher: ['/map'], // Apply this middleware only to the /map route (if necessary)
};
