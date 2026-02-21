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
    ArrowRight,
    Sparkles,
    Check,
    Lock,
    RefreshCw,
} from "lucide-react";

const ownedSlugs = ["sao-miguel", "prosperidade", "saude-cura"];

const allMesas = [
    {
        slug: "sao-miguel",
        name: "Mesa de São Miguel Arcanjo",
        emoji: "⚔️",
        category: "Proteção",
        price: 97,
        shortDesc: "Sessão única e personalizada de corte de laços negativos, blindagem espiritual e proteção de alto grau para você e sua família.",
        features: ["Sessão exclusiva e personalizada", "Corte de laços e blindagem do lar", "Proteção familiar personalizada", "Materiais enviados via WhatsApp"],
        popular: false,
    },
    {
        slug: "prosperidade",
        name: "Mesa da Prosperidade",
        emoji: "🌟",
        category: "Finanças",
        price: 97,
        shortDesc: "Atendimento único e exclusivo de desbloqueio financeiro, abertura de caminhos e harmonização da sua relação com a abundância.",
        features: ["Sessão exclusiva e personalizada", "Desbloqueio financeiro individual", "Abertura de caminhos únicos", "Materiais enviados via WhatsApp"],
        popular: true,
    },
    {
        slug: "saude-cura",
        name: "Mesa de Saúde e Cura",
        emoji: "💚",
        category: "Saúde",
        price: 97,
        shortDesc: "Atendimento personalizado de harmonização energética do corpo físico e emocional, acelerando processos de cura naturais.",
        features: ["Sessão exclusiva e personalizada", "Cura energética individual", "Equilíbrio emocional único", "Materiais enviados via WhatsApp"],
        popular: false,
    },
    {
        slug: "amor-relacionamentos",
        name: "Mesa do Amor e Relacionamentos",
        emoji: "💛",
        category: "Amor",
        price: 97,
        shortDesc: "Sessão única de harmonização de vínculos afetivos, atração de amor verdadeiro e cura de relacionamentos conturbados.",
        features: ["Sessão exclusiva e personalizada", "Harmonia afetiva individual", "Cura de vínculos únicos", "Materiais enviados via WhatsApp"],
        popular: false,
    },
    {
        slug: "guardioes",
        name: "Mesa dos Guardiões",
        emoji: "🛡️",
        category: "Proteção Avançada",
        price: 97,
        shortDesc: "Sessão única e personalizada de proteção espiritual de altíssimo grau com a energia dos Guardiões, para casos mais complexos.",
        features: ["Sessão exclusiva e personalizada", "Proteção avançada individual", "Escudo energético exclusivo", "Materiais enviados via WhatsApp"],
        popular: false,
    },
    {
        slug: "pet",
        name: "Mesa Radiônica Pet",
        emoji: "🐾",
        category: "Animais",
        price: 97,
        shortDesc: "Atendimento personalizado de alinhamento energético e de cura especialmente desenvolvido para animais de estimação.",
        features: ["Sessão exclusiva e personalizada", "Cura energética individual do pet", "Equilíbrio comportamental", "Materiais enviados via WhatsApp"],
        popular: false,
    },
];

const navItems = [
    { href: "/preview/dashboard", icon: LayoutDashboard, label: "Minhas Mesas", active: false },
    { href: "/preview/loja", icon: ShoppingBag, label: "Vitrine de Mesas", active: true },
    { href: "?tab=perfil", icon: User, label: "Meu Perfil", active: false },
];

const waBase = "https://wa.me/5511964482515?text=Olá+Silvana,+quero+adquirir+a+";

export default function LojaPreviewPage() {
    return (
        <div className="min-h-screen bg-background flex">
            {/* ── Sidebar ── */}
            <aside
                className="hidden md:flex w-72 flex-col shrink-0 fixed top-0 bottom-0 left-0 z-30 border-r border-white/[0.06]"
                style={{ background: "hsl(270 50% 4%)" }}
            >
                {/* Ambient glow */}
                <div
                    className="absolute bottom-0 left-0 w-48 h-64 rounded-full pointer-events-none blur-[80px]"
                    style={{ background: "rgba(191,149,63,0.08)" }}
                />

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
                                <span className="text-sm font-bold text-black">S</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white">Silvana</p>
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
                        <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao Site
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-white/40">
                        <LogOut className="h-3.5 w-3.5" /> Sair da Conta
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
                                Explore todas as mesas com{" "}
                                <span style={{ color: "#FCF6BA" }}>energia exclusiva</span>.
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
                        <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                            ← Voltar ao site
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 md:p-10 mt-14 md:mt-0">
                    <div className="max-w-5xl mx-auto">

                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <ShoppingBag className="h-3.5 w-3.5" style={{ color: "#BF953F" }} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "#BF953F" }}>
                                    Vitrine de Mesas
                                </span>
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">
                                Todas as Mesas{" "}
                                <span
                                    className="italic"
                                    style={{
                                        background: "linear-gradient(90deg,#BF953F,#FCF6BA,#B38728)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Radiônicas
                                </span>
                            </h1>
                            <p className="text-white/50 font-light max-w-xl leading-relaxed">
                                Cada mesa trabalha em uma frequência específica. Adquira quantas quiser e transforme cada área — finanças, saúde, amor e mais.
                            </p>
                        </div>

                        {/* Legend */}
                        <div
                            className="flex flex-wrap items-center gap-5 mb-8 p-4 rounded-2xl border"
                            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                        >
                            <span className="text-[10px] text-white/30 font-medium uppercase tracking-widest">Legenda:</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                <span className="text-xs text-white/60">Já adquirida</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#BF953F" }} />
                                <span className="text-xs text-white/60">Disponível para adquirir</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCw className="h-3 w-3 text-white/40" />
                                <span className="text-xs text-white/60">Recompra disponível</span>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allMesas.map((mesa) => {
                                const isOwned = ownedSlugs.includes(mesa.slug);
                                const waUrl = `${waBase}${encodeURIComponent(mesa.name)}!`;

                                return (
                                    <div
                                        key={mesa.slug}
                                        className="relative flex flex-col overflow-hidden transition-all duration-300 group"
                                        style={{
                                            borderRadius: "1.5rem",
                                            border: isOwned
                                                ? "1px solid rgba(52,211,153,0.2)"
                                                : "1px solid rgba(191,149,63,0.2)",
                                            background: "hsl(270 40% 6%)",
                                        }}
                                    >
                                        {/* Popular banner */}
                                        {mesa.popular && (
                                            <div
                                                className="text-center text-[10px] font-bold tracking-widest uppercase py-2"
                                                style={{ background: "linear-gradient(90deg,#BF953F,#FCF6BA,#B38728)", color: "#0a0510" }}
                                            >
                                                ✦ Mais Popular
                                            </div>
                                        )}

                                        {/* Thumbnail */}
                                        <div
                                            className="relative h-36 flex items-center justify-center overflow-hidden"
                                            style={{
                                                background: isOwned
                                                    ? "radial-gradient(circle at 50% 60%, rgba(52,211,153,0.12) 0%, transparent 60%), hsl(270 50% 7%)"
                                                    : "radial-gradient(circle at 50% 60%, rgba(191,149,63,0.12) 0%, transparent 60%), hsl(270 50% 7%)",
                                            }}
                                        >
                                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                                {mesa.emoji}
                                            </span>

                                            {/* Status badge */}
                                            <div className="absolute top-3 right-3">
                                                {isOwned ? (
                                                    <span
                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                                        style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.3)" }}
                                                    >
                                                        <Check className="h-3 w-3" /> Você tem esta
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                                        style={{ background: "rgba(191,149,63,0.15)", color: "#BF953F", border: "1px solid rgba(191,149,63,0.3)" }}
                                                    >
                                                        <Lock className="h-3 w-3" /> Disponível
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-5">
                                            <p
                                                className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1.5"
                                                style={{ color: isOwned ? "#34d399" : "#BF953F" }}
                                            >
                                                {mesa.category}
                                            </p>
                                            <h3 className="font-display text-lg font-light text-white mb-2 leading-snug">
                                                {mesa.name}
                                            </h3>
                                            <p className="text-xs text-white/40 leading-relaxed mb-4 flex-1 font-light">
                                                {mesa.shortDesc}
                                            </p>

                                            {/* Features */}
                                            <ul className="space-y-1.5 mb-5">
                                                {mesa.features.map((f) => (
                                                    <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                                                        <Star className="h-3 w-3 shrink-0" style={{ color: "#BF953F" }} fill="#BF953F" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Price */}
                                            <div className="flex items-baseline gap-1 mb-4">
                                                <span className="text-xs text-white/30">R$</span>
                                                <span className="font-display text-2xl font-light text-white">{mesa.price}</span>
                                                <span className="text-xs text-white/30">à vista</span>
                                            </div>

                                            {/* CTAs */}
                                            {isOwned ? (
                                                <div className="flex flex-col gap-2">
                                                    <Link
                                                        href={`/preview/mesa/${mesa.slug}`}
                                                        className="w-full py-3 rounded-xl text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 flex items-center justify-center gap-2"
                                                        style={{ background: "linear-gradient(135deg,#BF953F,#FCF6BA,#B38728)", color: "#0a0510" }}
                                                    >
                                                        Acessar Tratamento <ArrowRight className="h-3.5 w-3.5" />
                                                    </Link>
                                                    <a
                                                        href={`${waUrl}&text=Olá Silvana, quero RECOMPRAR a ${encodeURIComponent(mesa.name)}!`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full py-3 rounded-xl text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 flex items-center justify-center gap-2"
                                                        style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
                                                    >
                                                        <RefreshCw className="h-3.5 w-3.5" />
                                                        Fazer Novamente
                                                    </a>
                                                </div>
                                            ) : (
                                                <a
                                                    href={waUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase text-center transition-all duration-500 flex items-center justify-center gap-2"
                                                    style={{
                                                        border: "1px solid rgba(191,149,63,0.5)",
                                                        color: "#FCF6BA",
                                                        background: "rgba(191,149,63,0.08)",
                                                    }}
                                                >
                                                    <Sparkles className="h-3.5 w-3.5" />
                                                    Adquirir — R$ {mesa.price}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom CTA */}
                        <div
                            className="mt-16 p-10 text-center relative overflow-hidden"
                            style={{
                                borderRadius: "2rem",
                                background: "radial-gradient(circle at 50% 50%, rgba(191,149,63,0.08) 0%, transparent 70%), hsl(270 40% 5%)",
                                border: "1px solid rgba(191,149,63,0.2)",
                            }}
                        >
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                                style={{ background: "rgba(191,149,63,0.05)", filter: "blur(60px)" }}
                            />
                            <p className="text-[10px] uppercase tracking-[0.3em] mb-3 relative z-10" style={{ color: "#BF953F" }}>
                                Dúvidas sobre qual mesa escolher?
                            </p>
                            <h2 className="font-display text-2xl font-light text-white mb-3 relative z-10">
                                Silvana te orienta pessoalmente 💚
                            </h2>
                            <p className="text-white/40 text-sm mb-8 max-w-md mx-auto font-light relative z-10">
                                Cada mesa tem uma finalidade específica. Entre em contato e descubra qual é ideal para o seu momento.
                            </p>
                            <a
                                href="https://wa.me/5511964482515?text=Olá+Silvana,+sou+paciente+e+quero+saber+qual+mesa+é+a+ideal+para+mim!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wider text-white transition-all duration-300 relative z-10"
                                style={{ background: "#25D366" }}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Falar com Silvana no WhatsApp
                            </a>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
