import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        // ── Magic Link via Email ────────────────────────────────────────────────
        Resend({
            from: process.env.EMAIL_FROM ?? "Terapia Antigravity <noreply@terapiaantigravity.com.br>",
        }),

        // ── Google OAuth (optional — enable by setting env vars) ────────────────
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    pages: {
        signIn: "/login",           // Custom login page
        verifyRequest: "/login/verify", // After magic link sent
        error: "/login",            // Auth errors → back to login
    },

    callbacks: {
        // Enrich session with userId and phone for server components
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
                // @ts-expect-error — phone is a custom field added to User
                session.user.phone = user.phone ?? null;
            }
            return session;
        },
    },

    session: {
        strategy: "database", // Use DB sessions (enables Redis swap later)
    },
});
