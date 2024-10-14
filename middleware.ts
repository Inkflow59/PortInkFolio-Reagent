import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request :Request) {
  const allowedPaths = ['/desktop/accueil', '/desktop/contact', '/desktop/veille', '/desktop/projets'];
  const { pathname } = request.nextUrl.pathname;

  if (!allowedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url)); // Redirige vers la page d'accueil
  }

  return NextResponse.next();
}