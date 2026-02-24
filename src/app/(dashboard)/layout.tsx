import Link from "next/link";
import {
    Zap,
    LayoutDashboard,
    User,
    LogOut,
    Star,
    ArrowLeft,
} from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Minhas Mesas" },
    { href: "?tab=perfil", icon: User, label: "Meu Perfil" },
];

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    const userName = session.user.name?.split(" ")[0] ?? "Cliente";
    const userInitial = userName[0]?.toUpperCase() ?? "C";

    return (
        <div className="min-h-screen bg-background flex">
            {/* ── Desktop Sidebar ─────────────────────────────────────── */}
            <aside className="hidden md:flex w-72 flex-col shrink-0 fixed top-0 bottom-0 left-0 z-30 border-r border-white/[0.06]"
                style={{ background: "hsl(270 50% 4%)" }}>

                {/* Ambient gold glow */}
                <div className="absolute bottom-0 left-0 w-48 h-64 bg-[#BF953F]/8 blur-[80px] rounded-full pointer-events-none" />

                {/* Logo */}
                <div className="p-6 border-b border-white/[0.06] relative z-10">
                    <Link href="/" className="flex flex-col gap-1 group">
                        <span className="font-display text-2xl tracking-wider text-white group-hover:text-[#FCF6BA] transition-colors duration-500">
                            PERSIKE
                        </span>
                        <span className="text-[9px] tracking-[0.4em] text-[#BF953F] uppercase font-medium">
                            Portal do Paciente
                        </span>
                    </Link>
                </div>

                {/* User block */}
                <div className="px-5 py-5 border-b border-white/[0.04] relative z-10">
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#BF953F] to-[#B38728] flex items-center justify-center shadow-[0_0_20px_rgba(191,149,63,0.3)]">
                                <span className="text-sm font-bold text-background">{userInitial}</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white truncate">{userName}</p>
                            <p className="text-[10px] text-white/40 truncate">{session.user.email}</p>
                        </div>
                        <Star className="h-3.5 w-3.5 text-[#BF953F] shrink-0" fill="#BF953F" />
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 relative z-10">
                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] mb-4 px-3">
                        Navegação
                    </p>
                    <ul className="space-y-1">
                        {navItems.map(({ href, icon: Icon, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Hover gold left accent */}
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-[#BF953F] rounded-full group-hover:h-5 transition-all duration-300" />
                                    <Icon className="h-4 w-4 group-hover:text-[#BF953F] transition-colors shrink-0" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer actions */}
                <div className="p-4 border-t border-white/[0.04] relative z-10 space-y-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-white/40 hover:text-white/70 transition-colors"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Voltar ao Site
                    </Link>
                    <form action="/api/auth/signout" method="POST">
                        <button
                            type="submit"
                            className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-xs text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
                        >
                            <LogOut className="h-3.5 w-3.5" />
                            Sair da Conta
                        </button>
                    </form>
                </div>
            </aside>

            {/* ── Mobile Header ───────────────────────────────────────── */}
            <div
                className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 border-b border-white/[0.06] backdrop-blur-xl"
                style={{ background: "hsl(270 50% 4% / 0.95)" }}
            >
                <Link href="/" className="flex flex-col leading-none">
                    <span className="font-display text-lg tracking-wider text-white">PERSIKE</span>
                    <span className="text-[8px] text-[#BF953F] uppercase tracking-widest">Portal</span>
                </Link>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-white/50 hidden sm:block">Olá, {userName}!</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#BF953F] to-[#B38728] flex items-center justify-center shadow-[0_0_12px_rgba(191,149,63,0.3)]">
                        <span className="text-xs font-bold text-background">{userInitial}</span>
                    </div>
                </div>
            </div>

            {/* ── Main Content ────────────────────────────────────────── */}
            <main className="flex-1 flex flex-col md:ml-72 min-h-screen relative">
                {/* Top bar (desktop) */}
                <div
                    className="hidden md:flex items-center justify-between px-8 py-4 border-b border-white/[0.05] sticky top-0 z-20 backdrop-blur-xl"
                    style={{ background: "hsl(270 50% 3% / 0.85)" }}
                >
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-0.5">Portal do Paciente</p>
                        <div className="flex items-center gap-2">
                            <Zap className="h-3.5 w-3.5 text-[#BF953F]" />
                            <span className="text-sm font-medium text-white">
                                Bem-vindo de volta, <span className="text-[#FCF6BA]">{userName}</span> — sua frequência está ativada.
                            </span>
                        </div>
                    </div>
                    <Link
                        href="/"
                        className="text-xs text-white/30 hover:text-[#BF953F] transition-colors tracking-wider"
                    >
                        ← Voltar ao site
                    </Link>
                </div>

                {/* Page content */}
                <div className="flex-1 p-4 md:p-10 mt-14 md:mt-0">
                    {children}
                </div>
            </main>
        </div>
    );
}
