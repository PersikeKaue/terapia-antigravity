import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PlayCircle, Package, ArrowRight, Sparkles, Star, Zap, Lock } from "lucide-react";

function getMesaEmoji(name: string) {
    const lower = name.toLowerCase();
    if (lower.includes("miguel") || lower.includes("proteção")) return "⚔️";
    if (lower.includes("prosperidade") || lower.includes("abundância")) return "🌟";
    if (lower.includes("saúde") || lower.includes("cura")) return "💚";
    if (lower.includes("amor") || lower.includes("relacionamento")) return "💛";
    if (lower.includes("pet") || lower.includes("animal")) return "🐾";
    return "✦";
}

export default async function DashboardPage() {
    const session = await auth();
    if (!session?.user?.id) redirect("/login");

    const purchases = await prisma.purchase.findMany({
        where: { userId: session.user.id, status: "PAID" },
        include: { product: { include: { materials: { select: { id: true } } } } },
        orderBy: { paidAt: "desc" },
    });

    return (
        <div className="max-w-5xl mx-auto">
            {/* ── Page Header ── */}
            <div className="mb-14">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-3.5 w-3.5 text-[#BF953F]" />
                    <span className="text-[10px] font-bold text-[#BF953F] uppercase tracking-[0.3em]">
                        Suas Mesas Radiônicas
                    </span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">
                    Portal de{" "}
                    <span
                        className="gold-gradient-text italic"
                        style={{ background: "linear-gradient(90deg,#BF953F,#FCF6BA,#B38728,#FCF6BA,#BF953F)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer-gold 6s linear infinite" }}
                    >
                        Transformação
                    </span>
                </h1>
                <p className="text-white/50 font-light leading-relaxed max-w-xl">
                    {purchases.length === 0
                        ? "Você ainda não possui nenhuma mesa ativa. Inicie sua jornada de transformação energética."
                        : `Você possui acesso a ${purchases.length} mesa${purchases.length > 1 ? "s radiônicas" : " radiônica"}. Selecione abaixo para acessar seu tratamento exclusivo.`
                    }
                </p>
            </div>

            {/* ── Empty State ── */}
            {purchases.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                    <div className="relative mb-8">
                        {/* Pulsing ring */}
                        <div className="absolute inset-0 rounded-full bg-[#BF953F]/20 animate-ping" />
                        <div className="relative w-28 h-28 rounded-full border border-[#BF953F]/30 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                            <Package className="h-12 w-12 text-[#BF953F]/60" />
                        </div>
                    </div>
                    <h2 className="font-display text-3xl font-light text-white mb-4">
                        Nenhuma mesa ainda
                    </h2>
                    <p className="text-white/40 mb-10 max-w-sm text-sm leading-relaxed font-light">
                        Adquira sua primeira Mesa Radiônica com Silvana Persike e comece sua jornada de
                        transformação energética vitalícia.
                    </p>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#BF953F]/30" style={{ animation: "pulse-ring 2.2s cubic-bezier(0.215,0.61,0.355,1) infinite" }} />
                        <Link
                            href="/#oferta"
                            className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-background shadow-[0_0_40px_rgba(191,149,63,0.3)] hover:shadow-[0_0_60px_rgba(252,246,186,0.5)] transition-all duration-500 overflow-hidden"
                            style={{ background: "linear-gradient(135deg,#BF953F,#FCF6BA,#B38728)" }}
                        >
                            <Zap className="h-4 w-4" />
                            Adquirir Minha Mesa
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        {[
                            { label: "Mesas Ativas", value: purchases.length, icon: Star },
                            { label: "Materiais", value: purchases.reduce((acc, p) => acc + p.product.materials.length, 0), icon: Package },
                            { label: "Acesso", value: "Vitalício", icon: Lock },
                        ].map(({ label, value, icon: Icon }) => (
                            <div key={label} className="glass-panel-dark p-5 rounded-2xl border border-white/[0.05] text-center">
                                <Icon className="h-4 w-4 text-[#BF953F] mx-auto mb-2" />
                                <p className="text-2xl font-display font-light text-white mb-0.5">{value}</p>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest">{label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mesa grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {purchases.map(({ product, paidAt }) => (
                            <Link
                                key={product.id}
                                href={`/dashboard/mesa/${product.slug}`}
                                className="group relative overflow-hidden flex flex-col rounded-[2rem] border border-white/[0.08] bg-black/40 backdrop-blur-sm hover:border-[#BF953F]/40 hover:shadow-[0_0_50px_rgba(191,149,63,0.10)] transition-all duration-500 cursor-pointer"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />

                                {/* Thumbnail */}
                                <div className="relative h-48 overflow-hidden rounded-t-[2rem]"
                                    style={{ background: "radial-gradient(circle at 30% 40%, rgba(191,149,63,0.15) 0%, transparent 60%), hsl(270 50% 6%)" }}>
                                    {/* Decorative orbs */}
                                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#BF953F]/10 blur-2xl" />
                                    <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full bg-purple-700/10 blur-2xl" />

                                    {/* Emoji / icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow">
                                            {getMesaEmoji(product.name)}
                                        </span>
                                    </div>

                                    {/* Hover play */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-[#BF953F]/90 flex items-center justify-center shadow-[0_0_30px_rgba(191,149,63,0.5)]">
                                            <PlayCircle className="h-8 w-8 text-background fill-background/20" />
                                        </div>
                                    </div>

                                    {/* Status badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#BF953F] border border-[#BF953F]/40 bg-black/60 backdrop-blur-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                            Ativa
                                        </span>
                                    </div>

                                    {/* Materials count */}
                                    {product.materials.length > 0 && (
                                        <div className="absolute bottom-3 left-3">
                                            <span className="inline-flex items-center gap-1 text-[10px] bg-black/60 text-white/70 border border-white/10 rounded-full px-2.5 py-1 backdrop-blur-sm">
                                                <Star className="h-2.5 w-2.5 fill-[#BF953F] text-[#BF953F]" />
                                                {product.materials.length} material{product.materials.length > 1 ? "is" : ""}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-display text-lg font-light text-white mb-2 leading-snug group-hover:text-[#FCF6BA] transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-white/40 mb-4 leading-relaxed flex-1 font-light">
                                        {product.shortDesc ?? "Mesa radiônica ativada com intenção terapêutica por Silvana Persike."}
                                    </p>

                                    {paidAt && (
                                        <p className="text-[10px] text-white/25 mb-4 uppercase tracking-wider">
                                            Adquirida em {new Intl.DateTimeFormat("pt-BR").format(new Date(paidAt))}
                                        </p>
                                    )}

                                    <div className="flex items-center gap-2 text-[#BF953F] text-xs uppercase tracking-widest font-bold">
                                        <span>Acessar Tratamento</span>
                                        <div className="flex-1 h-[1px] bg-[#BF953F]/30 group-hover:bg-[#BF953F] transition-colors duration-500" />
                                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Upsell footer */}
                    <div className="mt-16 p-8 rounded-[2rem] border border-[#BF953F]/20 text-center relative overflow-hidden"
                        style={{ background: "radial-gradient(circle at 50% 50%, rgba(191,149,63,0.06) 0%, transparent 70%), hsl(270 40% 5%)" }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#BF953F]/5 rounded-full blur-3xl pointer-events-none" />
                        <p className="text-[10px] text-[#BF953F] uppercase tracking-[0.3em] mb-3 relative z-10">Expanda seu Ecossistema</p>
                        <p className="font-display text-xl text-white/80 mb-6 relative z-10 font-light">
                            Pronto para ir mais fundo na sua transformação?
                        </p>
                        <Link
                            href="/#oferta"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#BF953F]/50 text-[#FCF6BA] hover:border-[#FCF6BA] hover:shadow-[0_0_20px_rgba(191,149,63,0.3)] transition-all duration-500 relative z-10"
                        >
                            <Sparkles className="h-3.5 w-3.5" />
                            Adquirir Nova Mesa
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
