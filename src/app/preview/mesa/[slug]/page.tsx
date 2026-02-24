import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    Play,
    Sparkles,
    Leaf,
    LayoutDashboard,
    User,
    LogOut,
    Heart,
} from "lucide-react";

const mockMesas: Record<string, {
    name: string;
    emoji: string;
    description: string;
    paidAt: string;
    videoUrl: string | null;
    materials: { id: string; name: string; fileType: string; size: string }[];
}> = {
    "sao-miguel": {
        name: "Mesa de São Miguel Arcanjo",
        emoji: "⚔️",
        description:
            "A Mesa de São Miguel trabalha com energia de proteção espiritual de alto grau. Ideal para corte de laços negativos, blindagem de ambientes e proteção de toda a família contra energias densas e ataques astrais.",
        paidAt: "2024-11-15",
        videoUrl: null,
        materials: [
            { id: "1", name: "Protocolo de Ativação da Mesa", fileType: "PDF", size: "1.2 MB" },
            { id: "2", name: "Meditação Guiada com São Miguel", fileType: "PDF", size: "856 KB" },
            { id: "3", name: "Oração de Proteção Diária", fileType: "PDF", size: "320 KB" },
        ],
    },
    "prosperidade": {
        name: "Mesa da Prosperidade",
        emoji: "🌟",
        description:
            "A Mesa da Prosperidade trabalha diretamente com o campo energético financeiro, desbloqueando crenças limitantes sobre dinheiro, abrindo novos caminhos de renda e harmonizando sua relação com a abundância.",
        paidAt: "2024-12-01",
        videoUrl: null,
        materials: [
            { id: "1", name: "Manual da Mesa da Prosperidade", fileType: "PDF", size: "2.1 MB" },
            { id: "2", name: "Afirmações Positivas de Abundância", fileType: "PDF", size: "450 KB" },
            { id: "3", name: "Ritual de Ativação Mensal", fileType: "PDF", size: "780 KB" },
            { id: "4", name: "Diário de Gratidão e Prosperidade", fileType: "PDF", size: "1.0 MB" },
        ],
    },
    "saude-cura": {
        name: "Mesa de Saúde e Cura",
        emoji: "💚",
        description:
            "A Mesa de Saúde e Cura trabalha no campo sutil do corpo físico e emocional, acelerando processos naturais de cura, harmonizando chakras relacionados à saúde e trazendo vitalidade e equilíbrio.",
        paidAt: "2025-01-08",
        videoUrl: null,
        materials: [
            { id: "1", name: "Protocolo de Cura Energética", fileType: "PDF", size: "1.5 MB" },
            { id: "2", name: "Visualização de Cura do Corpo de Luz", fileType: "PDF", size: "620 KB" },
        ],
    },
};

const navItems = [
    { href: "/preview/dashboard", icon: LayoutDashboard, label: "Minhas Mesas" },
    { href: "?tab=perfil", icon: User, label: "Meu Perfil" },
];

export default async function MesaPreviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const mesa = mockMesas[slug];

    if (!mesa) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg font-semibold mb-4">Mesa não encontrada no preview.</p>
                    <Button asChild variant="outline">
                        <Link href="/preview/dashboard">← Voltar</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-sage-50/30 flex">
            {/* ── Sidebar ── */}
            <aside className="hidden md:flex w-64 flex-col bg-white border-r border-sage-100 shadow-sm shrink-0 fixed top-0 bottom-0 left-0 z-30">
                <div className="p-6 border-b border-sage-100">
                    <Link href="/" className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center">
                                <Leaf className="h-4 w-4 text-sage-500" />
                            </div>
                            <span className="font-display text-base font-semibold text-sage-800">Persike</span>
                        </div>
                        <span className="text-[10px] text-sage-400 font-medium tracking-wider uppercase pl-10">
                            Portal do Paciente
                        </span>
                    </Link>
                </div>

                <div className="px-5 py-4 border-b border-sage-50 bg-sage-50/60">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <Heart className="h-3 w-3 text-sage-400" />
                        <span className="text-xs text-sage-400">Bem-vinda de volta</span>
                    </div>
                    <p className="text-sm font-semibold text-sage-800">
                        Olá, Silvana! Que bom ter você aqui.
                    </p>
                </div>

                <nav className="flex-1 p-4">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-3">
                        Navegação
                    </p>
                    <ul className="space-y-1">
                        {navItems.map(({ href, icon: Icon, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-sage-700 hover:bg-sage-50 transition-all"
                                >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-sage-100">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-sage-50 mb-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sage-300 to-sage-500 flex items-center justify-center shrink-0">
                            <span className="text-sm font-bold text-white">S</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">Silvana</p>
                            <p className="text-xs text-muted-foreground truncate">silvana@persike.com.br</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 w-full text-sm text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                        <LogOut className="h-4 w-4" />
                        Sair
                    </button>
                </div>
            </aside>

            {/* ── Main ── */}
            <main className="flex-1 flex flex-col md:ml-64 min-h-screen">
                {/* Top bar */}
                <div className="hidden md:flex items-center justify-between px-8 py-4 border-b border-sage-100 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
                    <div>
                        <p className="text-xs text-muted-foreground">Portal do Paciente</p>
                        <h2 className="text-sm font-semibold text-foreground">
                            Olá, Silvana! 🌿 Que bom ter você aqui.
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] bg-gold-100 text-gold-600 font-bold px-2.5 py-1 rounded-full border border-gold-200">
                            🎨 Modo Preview
                        </span>
                        <Link href="/" className="text-xs text-sage-500 hover:text-sage-700 transition-colors">
                            ← Voltar ao site
                        </Link>
                    </div>
                </div>

                <div className="flex-1 p-4 md:p-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Back */}
                        <Link
                            href="/preview/dashboard"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                            Minhas Mesas
                        </Link>

                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                <Badge className="bg-sage-600 text-white border-0">✓ Liberada</Badge>
                                <span className="text-xs text-muted-foreground">
                                    Adquirida em{" "}
                                    {new Intl.DateTimeFormat("pt-BR").format(new Date(mesa.paidAt))}
                                </span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                                {mesa.emoji} {mesa.name}
                            </h1>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm">
                                {mesa.description}
                            </p>
                        </div>

                        {/* ── Video Player (Placeholder) ── */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-7 h-7 rounded-lg bg-sage-100 flex items-center justify-center">
                                    <Play className="h-3.5 w-3.5 text-sage-600" />
                                </div>
                                <h2 className="font-semibold text-foreground">Vídeo de Ativação</h2>
                                <span className="text-xs text-muted-foreground">— assista para ativar sua mesa</span>
                            </div>

                            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-sage-800 via-sage-900 to-sage-950 aspect-video flex flex-col items-center justify-center gap-4 shadow-2xl relative">
                                {/* Decorative orbs in video placeholder */}
                                <div className="absolute top-6 right-8 w-32 h-32 rounded-full bg-sage-600/20 blur-2xl pointer-events-none" />
                                <div className="absolute bottom-6 left-8 w-24 h-24 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />

                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    {/* Play button */}
                                    <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                                        <Play className="h-8 w-8 text-white fill-white/60 ml-1 group-hover:scale-110 transition-transform" />
                                    </div>

                                    <div className="text-center">
                                        <p className="text-white/90 font-semibold font-display text-xl mb-1">
                                            {mesa.name}
                                        </p>
                                        <p className="text-white/50 text-sm">
                                            Vídeo de ativação por Silvana Persike
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-3.5 w-3.5 text-gold-300" />
                                        <span className="text-gold-300 text-xs font-medium">
                                            Em preparação com muito amor ✨
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    );
}
