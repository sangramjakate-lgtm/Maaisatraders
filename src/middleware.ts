import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';

    // Enforce non-www for SEO consistency (301 Redirect)
    if (hostname.startsWith('www.')) {
        url.hostname = hostname.replace('www.', '');
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Only run on document requests to avoid overhead on assets/interception
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
