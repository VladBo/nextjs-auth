import { auth, authConfig } from '@/auth';
import { Auth, skipCSRFCheck } from '@auth/core';

export default auth((req) => {
  const session = req.auth;

  if (!session) {
    const headers = new Headers(req.headers);
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const url = `${req.nextUrl.origin}/api/auth/callback/guest`;

    const body = new URLSearchParams({ callbackUrl: '/' });
    const authRequest = new Request(url, { method: 'POST', headers, body });

    return Auth(authRequest, {
      ...authConfig,
      skipCSRFCheck,
    });
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
