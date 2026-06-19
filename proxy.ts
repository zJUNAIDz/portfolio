import { NextResponse, type NextRequest } from "next/server";

/**
 * Exposes the active locale to Server Components (the root layout reads it to
 * set <html lang>). The site keeps English at `/` and serves Japanese at `/ja`,
 * so the locale is derived purely from the pathname.
 */
export function proxy(request: NextRequest) {
  const locale = request.nextUrl.pathname.startsWith("/ja") ? "ja" : "en";

  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on page routes only; skip Next internals, API, and static assets.
  matcher: ["/((?!_next/|api/|.*\\.[\\w]+$).*)"],
};
