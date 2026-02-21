import Link from "next/link";
import {
    LayoutDashboard,
    ShoppingBag,
    BookOpen,
    User,
    LogOut,
    Star,
    ArrowLeft,
    Zap,
    PlayCircle,
    ArrowRight,
    Sparkles,
    Package,
    Lock,
} from "lucide-react";

// ── Mock data ────────────────────────────────────────────────────
const MOCK_PURCHASES = [
    {
        id: "1",
        product: {
            id: "p1",
            name: "Mesa de São Miguel — Proteção Suprema",
            slug: "mesa-sao-miguel",
            shortDesc: "Proteção energética máxima, remoção de laços negativos e blindagem espiritual profunda com o Arcanjo Miguel.",
            materialsCount: 3,
            emoji: "⚔️",
        },
        paidAtFormatted: "15/11/2025",
    },
    {
        id: "2",
        product: {
            id: "p2",
            name: "Mesa da Prosperidade & Abundância",
            slug: "mesa-prosperidade",
            shortDesc: "Desbloqueie os caminhos financeiros, atraia oportunidades e reprograme sua frequência para a abundância.",
            materialsCount: 1,
            emoji: "🌟",
        },
        paidAtFormatted: "01/12/2025",
    },
    {
        id: "3",
        product: {
            id: "p3",
            name: "Mesa da Saúde & Cura Celular",
            slug: "mesa-saude",
            shortDesc: "Harmonização do campo energético físico, fortalecimento do sistema imune e equilíbrio dos chakras da saúde.",
            materialsCount: 0,
            emoji: "💚",
        },
        paidAtFormatted: "10/01/2026",
    },
];

const navItems = [
    { href: "/preview/dashboard", icon: LayoutDashboard, label: "Minhas Mesas", active: true },
    { href: "/preview/loja", icon: ShoppingBag, label: "Vitrine de Mesas", active: false },
    { href: "?tab=perfil", icon: User, label: "Meu Perfil", active: false },
];

// ── Component ─────────────────────────────────────────────────────
export default function PreviewDashboardPage() {
    const userName = "Silvana";
    const userInitial = "S";

    return (
        <div className="min-h-screen bg-background flex">
            {/* ── Sidebar ── */}
            <aside
                className="hidden md:flex w-72 flex-col shrink-0 fixed top-0 bottom-0 left-0 z-30 border-r border-white/[0.06]"
                style={{ background: "hsl(270 50% 4%)" }}
            >
                {/* Ambient glow */}
                <div className="absolute bottom-0 left-0 w-48 h-64 rounded-full pointer-events-none blur-[80px]"
                    style={{ background: "rgba(191,149,63,0.08)" }} />

                {/* Logo */}
                <div className="p-6 border-b border-white/[0.06] relative z-10">
                    <Link href="/" className="flex flex-col gap-1">
                        <span className="font-display text-2xl tracking-wider text-white">PERSIKE</span>
                        <span className="text-[9px] tracking-[0.4em] uppercase font-medium" style={{ color: "#BF953F" }}>
                            Portal do Paciente
                        </span>
                    </Link>
                </div>

                {/* User block */}
                <div className="px-5 py-5 border-b border-white/[0.04] relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(135deg,#BF953F,#B38728)", boxShadow: "0 0 20px rgba(191,149,63,0.3)" }}
                            >
                                <span className="text-sm font-bold text-black">{userInitial}</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white">{userName}</p>
                            <p className="text-[10px] text-white/40">silvana@persike.com.br</p>
                        </div>
                        <Star className="h-3.5 w-3.5 shrink-0" style={{ color: "#BF953F" }} fill="#BF953F" />
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 relative z-10">
                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] mb-4 px-3">Navegação</p>
                    <ul className="space-y-1">
                        {navItems.map(({ href, icon: Icon, label, active }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium relative overflow-hidden transition-all duration-300"
                                    style={{
                                        color: active ? "white" : "rgba(255,255,255,0.5)",
                                        background: active ? "rgba(255,255,255,0.06)" : "transparent",
                                    }}
                                >
                                    {active && (
                                        <span
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                                            style={{ background: "#BF953F" }}
                                        />
                                    )}
                                    <Icon
                                        className="h-4 w-4 shrink-0"
                                        style={{ color: active ? "#BF953F" : undefined }}
                                    />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-white/[0.04] relative z-10 space-y-1">
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-white/40">
                        <ArrowLeft className="h-3.5 w-3.5" />Voltar ao Site
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-white/40">
                        <LogOut className="h-3.5 w-3.5" />Sair da Conta
                    </div>
                </div>
            </aside>

            {/* ── Main ── */}
            <main className="flex-1 flex flex-col md:ml-72 min-h-screen">
                {/* Top bar */}
                <div
                    className="hidden md:flex items-center justify-between px-8 py-4 border-b border-white/[0.05] sticky top-0 z-20 backdrop-blur-xl"
                    style={{ background: "hsl(270 50% 3% / 0.85)" }}
                >
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-0.5">Portal do Paciente</p>
                        <div className="flex items-center gap-2">
                            <Zap className="h-3.5 w-3.5" style={{ color: "#BF953F" }} />
                            <span className="text-sm font-medium text-white">
                                Bem-vinda de volta,{" "}
                                <span style={{ color: "#FCF6BA" }}>{userName}</span>
                                {" "}— sua frequência está ativada.
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                            style={{ background: "rgba(191,149,63,0.1)", color: "#BF953F", borderColor: "rgba(191,149,63,0.3)" }}
                        >
                            🎨 Modo Preview
                        </span>
                        <Link href="/" className="text-xs text-white/30 transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>
                            ← Voltar ao site
                        </Link>
                    </div>
                </div>

                {/* Page content */}
                <div className="flex-1 p-4 md:p-10 mt-14 md:mt-0">
                    <div className="max-w-5xl mx-auto">

                        {/* Header */}
                        <div className="mb-14">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="h-3.5 w-3.5" style={{ color: "#BF953F" }} />
                                <span
                                    className="text-[10px] font-bold uppercase tracking-[0.3em]"
                                    style={{ color: "#BF953F" }}
                                >
                                    Suas Mesas Radiônicas
                                </span>
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">
                                Portal de{" "}
                                <span
                                    className="italic"
                                    style={{
                                        background: "linear-gradient(90deg,#BF953F,#FCF6BA,#B38728)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Transformação
                                </span>
                            </h1>
                            <p className="text-white/50 font-light max-w-xl leading-relaxed">
                                Você possui acesso a {MOCK_PURCHASES.length} mesas radiônicas. Selecione abaixo para acessar seu tratamento exclusivo.
                            </p>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {[
                                { label: "Mesas Ativas", value: String(MOCK_PURCHASES.length), Icon: Star },
                                { label: "Acesso", value: "Vitalício", Icon: Lock },
                            ].map(({ label, value, Icon }) => (
                                <div
                                    key={label}
                                    className="p-5 rounded-2xl border text-center backdrop-blur-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        borderColor: "rgba(255,255,255,0.07)",
                                    }}
                                >
                                    <Icon className="h-4 w-4 mx-auto mb-2" style={{ color: "#BF953F" }} />
                                    <p className="text-2xl font-display font-light text-white mb-0.5">{value}</p>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mesa grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MOCK_PURCHASES.map(({ product, paidAtFormatted }) => (
                                <Link
                                    key={product.id}
                                    href={`/preview/mesa/${product.slug}`}
                                    className="group relative overflow-hidden flex flex-col cursor-pointer transition-all duration-500"
                                    style={{
                                        borderRadius: "2rem",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        background: "rgba(0,0,0,0.4)",
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <div
                                        className="relative h-48 overflow-hidden"
                                        style={{
                                            borderRadius: "2rem 2rem 0 0",
                                            background: "radial-gradient(circle at 30% 40%, rgba(191,149,63,0.15) 0%, transparent 60%), hsl(270 50% 6%)",
                                        }}
                                    >
                                        {/* Orb */}
                                        <div
                                            className="absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl"
                                            style={{ background: "rgba(191,149,63,0.1)" }}
                                        />

                                        {/* Emoji */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow">
                                                {product.emoji}
                                            </span>
                                        </div>

                                        {/* Hover play */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: "rgba(191,149,63,0.9)",
                                                    boxShadow: "0 0 30px rgba(191,149,63,0.5)",
                                                }}
                                            >
                                                <PlayCircle className="h-8 w-8 text-black" />
                                            </div>
                                        </div>

                                        {/* Badge Ativa */}
                                        <div className="absolute top-3 right-3">
                                            <span
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm"
                                                style={{
                                                    color: "#BF953F",
                                                    border: "1px solid rgba(191,149,63,0.4)",
                                                    background: "rgba(0,0,0,0.6)",
                                                }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                                Ativa
                                            </span>
                                        </div>


                                    </div>

                                    {/* Card content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="font-display text-lg font-light text-white mb-2 leading-snug group-hover:text-[#FCF6BA] transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-white/40 mb-4 leading-relaxed flex-1 font-light">
                                            {product.shortDesc}
                                        </p>
                                        <p className="text-[10px] text-white/25 mb-4 uppercase tracking-wider">
                                            Adquirida em {paidAtFormatted}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold" style={{ color: "#BF953F" }}>
                                            <span>Acessar Tratamento</span>
                                            <div
                                                className="flex-1 h-[1px] transition-colors duration-500"
                                                style={{ background: "rgba(191,149,63,0.3)" }}
                                            />
                                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Upsell */}
                        <div
                            className="mt-16 p-8 text-center relative overflow-hidden"
                            style={{
                                borderRadius: "2rem",
                                border: "1px solid rgba(191,149,63,0.2)",
                                background: "radial-gradient(circle at 50% 50%, rgba(191,149,63,0.06) 0%, transparent 70%), hsl(270 40% 5%)",
                            }}
                        >
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                                style={{ background: "rgba(191,149,63,0.05)", filter: "blur(60px)" }}
                            />
                            <p className="text-[10px] uppercase tracking-[0.3em] mb-3 relative z-10" style={{ color: "#BF953F" }}>
                                Expanda seu Ecossistema
                            </p>
                            <p className="font-display text-xl text-white/80 mb-6 relative z-10 font-light">
                                Pronto para ir mais fundo na sua transformação?
                            </p>
                            <div
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase relative z-10 transition-all duration-500"
                                style={{
                                    border: "1px solid rgba(191,149,63,0.5)",
                                    color: "#FCF6BA",
                                }}
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                Adquirir Nova Mesa
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
