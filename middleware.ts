import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const allowedPaths = ['/', '/desktop/accueil', '/desktop/contact', '/desktop/veille', '/desktop/projets'];
  const { pathname } = request.nextUrl;

  // Vérifie si le chemin d'accès est autorisé
  if (!allowedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url)); // Redirige vers la page de connexion
  }

  return NextResponse.next();
}