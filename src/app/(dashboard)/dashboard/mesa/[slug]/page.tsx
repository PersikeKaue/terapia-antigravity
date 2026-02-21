import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { VideoPlayer } from "@/components/dashboard/VideoPlayer";
import Link from "next/link";
import {
    Download,
    FileText,
    ArrowLeft,
    Lock,
    Play,
    BookOpen,
    Sparkles,
    Star,
    Shield,
} from "lucide-react";

interface MesaPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: MesaPageProps) {
    const { slug } = await params;
    const product = await prisma.product.findUnique({
        where: { slug },
        select: { name: true },
    });
    return { title: product?.name ?? "Mesa Radiônica | Persike Terapias" };
}

function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default async function MesaDetailPage({ params }: MesaPageProps) {
    const { slug } = await params;
    const session = await auth();
    if (!session?.user?.id) redirect("/login");

    const product = await prisma.product.findUnique({
        where: { slug, isActive: true },
        include: { materials: { orderBy: { order: "asc" } } },
    });

    if (!product) notFound();

    const purchase = await prisma.purchase.findFirst({
        where: { userId: session.user.id, productId: product.id, status: "PAID" },
    });

    /* ── Not purchased ───────────────────────────────────────────── */
    if (!purchase) {
        return (
            <div className="max-w-xl mx-auto py-28 text-center">
                <div className="relative mb-10 inline-block">
                    <div className="w-24 h-24 rounded-full border border-[#BF953F]/30 bg-black/40 backdrop-blur-sm flex items-center justify-center mx-auto">
                        <Lock className="h-10 w-10 text-[#BF953F]/60" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#BF953F]/10 animate-ping" />
                </div>
                <p className="text-[10px] text-[#BF953F] uppercase tracking-[0.3em] mb-4">Acesso Restrito</p>
                <h1 className="font-display text-4xl font-light text-white mb-4 tracking-tight">
                    Acesso não autorizado
                </h1>
                <p className="text-white/50 mb-10 text-sm leading-relaxed max-w-sm mx-auto font-light">
                    Você ainda não possui acesso à <strong className="text-white">{product.name}</strong>.
                    Adquira com Silvana Persike e comece sua transformação.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Minhas Mesas
                    </Link>
                    <Link
                        href="/#oferta"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-background shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:shadow-[0_0_50px_rgba(252,246,186,0.5)] transition-all duration-500"
                        style={{ background: "linear-gradient(135deg,#BF953F,#FCF6BA,#B38728)" }}
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        Adquirir Agora
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Back */}
            <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-[#BF953F] mb-8 transition-colors group uppercase tracking-widest"
            >
                <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Minhas Mesas
            </Link>

            {/* ── Header ── */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#BF953F] border border-[#BF953F]/40 bg-[#BF953F]/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        Mesa Ativa
                    </span>
                    {purchase.paidAt && (
                        <span className="text-[10px] text-white/30 uppercase tracking-wider">
                            Adquirida em {new Intl.DateTimeFormat("pt-BR").format(new Date(purchase.paidAt))}
                        </span>
                    )}
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-light text-white mb-4 tracking-tight">
                    {product.name}
                </h1>
                <p className="text-white/50 leading-relaxed max-w-2xl font-light">
                    {product.description}
                </p>
            </div>

            {/* ── Video Section ── */}
            <div className="mb-14">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-xl border border-[#BF953F]/40 bg-[#BF953F]/10 flex items-center justify-center">
                        <Play className="h-3.5 w-3.5 text-[#BF953F] fill-[#BF953F]/30" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-white">Vídeo de Ativação</h2>
                        <p className="text-[10px] text-white/30">Assista para ativar e potencializar sua mesa</p>
                    </div>
                </div>

                {product.videoUrl ? (
                    <div className="rounded-[1.5rem] overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        <VideoPlayer url={product.videoUrl} title={product.name} />
                    </div>
                ) : (
                    /* Elegant placeholder */
                    <div
                        className="rounded-[1.5rem] overflow-hidden aspect-video flex flex-col items-center justify-center gap-5 border border-[#BF953F]/20 relative"
                        style={{ background: "radial-gradient(circle at 40% 50%, rgba(191,149,63,0.1) 0%, transparent 60%), hsl(270 50% 5%)" }}
                    >
                        {/* Ambient orb */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-64 h-64 rounded-full bg-[#BF953F]/5 blur-3xl" />
                        </div>
                        <div className="w-20 h-20 rounded-full border border-[#BF953F]/40 bg-[#BF953F]/10 flex items-center justify-center relative z-10">
                            <Play className="h-8 w-8 text-[#BF953F]/80 fill-[#BF953F]/20" />
                        </div>
                        <div className="text-center relative z-10">
                            <p className="font-display text-lg text-white mb-2">{product.name}</p>
                            <p className="text-white/40 text-sm font-light">Vídeo de ativação em preparação — Silvana Persike</p>
                        </div>
                        <div className="flex items-center gap-2 relative z-10">
                            <Sparkles className="h-3.5 w-3.5 text-[#BF953F]" />
                            <span className="text-[#BF953F] text-xs tracking-wider">Sendo preparado com muito amor ✨</span>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}
