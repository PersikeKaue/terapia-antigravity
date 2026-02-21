"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, Lock, ArrowRight, Loader2, AlertCircle, Eye, EyeOff, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsLoading(true);
        setError(null);

        try {
            const result = await signIn("resend", {
                email,
                redirect: false,
                callbackUrl: "/dashboard",
            });

            if (result?.error) {
                setError("Não foi possível enviar o link. Verifique o e-mail e tente novamente.");
            } else {
                setSent(true);
            }
        } catch {
            setError("Erro inesperado. Tente novamente em alguns instantes.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Ambient orbs */}
            <div className="absolute top-[15%] left-[10%] w-[30vw] h-[30vw] bg-[#BF953F]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid texture */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAzdjFoMzlWM3ptMCAxMHYxaDM5di0xem0wIDEwdjFoMzl2LTF6bTAgMTB2MWgzOXYtMXptMy0zMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L3N2Zz4=\")"
                }}
            />

            <div className="relative w-full max-w-md z-10">

                {/* Card */}
                <div
                    className="rounded-[2rem] border border-white/[0.08] p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden"
                    style={{ background: "hsl(270 45% 6%)" }}
                >
                    {/* Inner card ambient glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#BF953F]/8 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center gap-1 justify-center mb-8 group">
                        <span className="font-display text-2xl tracking-wider text-white group-hover:text-[#FCF6BA] transition-colors duration-500">
                            PERSIKE
                        </span>
                        <span className="text-[9px] tracking-[0.4em] text-[#BF953F] uppercase font-medium">
                            Portal do Paciente
                        </span>
                    </Link>

                    {/* Divider */}
                    <div className="border-t border-white/[0.06] mb-8" />

                    {sent ? (
                        /* ── Success state ── */
                        <div className="text-center py-6">
                            <div className="relative inline-block mb-6">
                                <div className="w-16 h-16 rounded-full border border-[#BF953F]/40 bg-[#BF953F]/10 flex items-center justify-center mx-auto">
                                    <Mail className="h-7 w-7 text-[#BF953F]" />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-[#BF953F]/10 animate-ping" />
                            </div>
                            <h2 className="font-display text-2xl font-light text-white mb-3">
                                Verifique seu e-mail ✨
                            </h2>
                            <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                                Enviamos um link de acesso para{" "}
                                <span className="font-semibold text-[#FCF6BA]">{email}</span>.
                                Clique nele para entrar no seu portal exclusivo.
                            </p>
                            <button
                                onClick={() => setSent(false)}
                                className="text-xs text-white/30 hover:text-[#BF953F] transition-colors uppercase tracking-wider font-medium"
                            >
                                Usar outro e-mail
                            </button>
                        </div>
                    ) : (
                        /* ── Login form ── */
                        <>
                            <h1 className="font-display text-2xl font-light text-center text-white mb-1">
                                Bem-vinda de volta
                            </h1>
                            <p className="text-white/40 text-center text-sm mb-8 font-light">
                                Acesse sua área exclusiva de Transformação.
                            </p>

                            {/* Error */}
                            {error && (
                                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl mb-5 text-sm text-red-400">
                                    <AlertCircle className="h-4 w-4 shrink-0" />
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 mb-5">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">
                                        E-mail
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="seu@email.com.br"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-white/10 text-sm focus:outline-none focus:border-[#BF953F]/60 focus:ring-1 focus:ring-[#BF953F]/40 transition-all placeholder:text-white/20 text-white"
                                            style={{ background: "rgba(255,255,255,0.05)" }}
                                        />
                                    </div>
                                </div>

                                {/* Password (UI only — magic link auth) */}
                                <div>
                                    <label htmlFor="password" className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2">
                                        Senha
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full pl-10 pr-10 py-3.5 rounded-xl border border-white/10 text-sm focus:outline-none focus:border-[#BF953F]/60 focus:ring-1 focus:ring-[#BF953F]/40 transition-all placeholder:text-white/20 text-white"
                                            style={{ background: "rgba(255,255,255,0.05)" }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                                            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-white/25 mt-2 font-light">
                                        Um link de acesso mágico será enviado para o seu e-mail.
                                    </p>
                                </div>

                                {/* Submit */}
                                <div className="pt-2 relative">
                                    {!isLoading && email && (
                                        <div
                                            className="absolute inset-0 rounded-xl"
                                            style={{ background: "rgba(191,149,63,0.25)", animation: "pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite" }}
                                        />
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isLoading || !email}
                                        className="relative w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase text-background shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:shadow-[0_0_50px_rgba(252,246,186,0.5)] transition-all duration-500 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden"
                                        style={{ background: "linear-gradient(135deg,#BF953F,#FCF6BA,#B38728)" }}
                                    >
                                        {isLoading ? (
                                            <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Entrar
                                                <ArrowRight className="h-4 w-4" />
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-white/[0.06]" />
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase">
                                    <span className="px-3 text-white/30 tracking-widest" style={{ background: "hsl(270 45% 6%)" }}>
                                        ou acesse com
                                    </span>
                                </div>
                            </div>

                            {/* Google */}
                            <button
                                className="w-full py-3.5 rounded-xl border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:border-[#BF953F]/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
                                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Continuar com Google
                            </button>
                        </>
                    )}
                </div>

                {/* Back to site */}
                <p className="text-center mt-8">
                    <Link href="/" className="text-xs text-white/25 hover:text-[#BF953F] transition-colors uppercase tracking-widest inline-flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3" />
                        ← Voltar ao site da Persike
                    </Link>
                </p>
            </div>
        </div>
    );
}
