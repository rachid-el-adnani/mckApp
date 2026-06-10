import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except Next internals, static files, and root-level icon assets.
    "/((?!api|_next|_vercel|.*\\..*|icon|apple-icon|opengraph-image|manifest.webmanifest|sitemap.xml|robots.txt).*)",
  ],
};
