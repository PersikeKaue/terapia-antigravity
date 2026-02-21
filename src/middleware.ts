import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const isLoggedIn = !!req.auth;

    // Protect all /dashboard routes
    if (pathname.startsWith("/dashboard")) {
        if (!isLoggedIn) {
            const loginUrl = new URL("/login", req.nextUrl.origin);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Redirect logged-in users away from login page
    if (pathname === "/login" && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
    }

    return NextResponse.next();
});

export const config = {
    // Run middleware on dashboard and login routes only
    matcher: ["/dashboard/:path*", "/login"],
};
