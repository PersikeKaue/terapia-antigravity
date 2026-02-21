import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";

const plans = [
    {
        id: "mesa-abundancia",
        name: "Mesa da Abundância",
        tagline: "Prosperidade e fluxo de riqueza",
        price: 97,
        badge: null,
        emoji: "🌟",
        features: [
            "Sessão única e personalizada",
            "Vídeo de ativação HD (60 min)",
            "Materiais de apoio enviados via WhatsApp",
            "Protocolo de Uso Diário",
            "Meditação Guiada de Ativação",
            "Suporte via WhatsApp (30 dias)",
        ],
        cta: "Adquirir Mesa da Abundância",
        highlight: false,
    },
    {
        id: "mesa-amor",
        name: "Mesa do Amor e Cura",
        tagline: "Cura emocional e vínculos afetivos",
        price: 97,
        badge: "Mais Popular",
        emoji: "💚",
        features: [
            "Sessão única e personalizada",
            "Vídeo de ativação HD (75 min)",
            "Materiais de apoio enviados via WhatsApp",
            "Afirmações e Decretos Especiais",
            "Meditação de Abertura do Coração",
            "Suporte via WhatsApp (60 dias)",
            "Bônus: Ritual de Início",
        ],
        cta: "Adquirir Mesa do Amor",
        highlight: true,
    },
    {
        id: "mesa-protecao",
        name: "Mesa de Proteção",
        tagline: "Escudo energético e equilíbrio",
        price: 97,
        badge: null,
        emoji: "🛡️",
        features: [
            "Sessão única e personalizada",
            "Vídeo de ativação HD (60 min)",
            "Materiais de apoio enviados via WhatsApp",
            "Protocolo de Blindagem Diária",
            "Decreto de Proteção da Família",
            "Suporte via WhatsApp (30 dias)",
        ],
        cta: "Adquirir Mesa de Proteção",
        highlight: false,
    },
];

const combo = {
    name: "Combo Completo — 3 Mesas",
    originalPrice: 291,
    price: 197,
    savings: 94,
    features: [
        "Todas as 3 mesas radiônicas",
        "Todos os materiais de apoio",
        "Suporte ilimitado por 90 dias",
        "Bônus exclusivos do combo",
        "Grupo VIP de praticantes",
    ],
};

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-sage-50/40">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sage-500 text-sm font-semibold tracking-wider uppercase mb-4">
                        Escolha sua Mesa
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                        Invista na sua{" "}
                        <span className="text-gradient-gold">transformação</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Acesso imediato após a confirmação do pagamento. Suporte via WhatsApp incluso.
                    </p>
                </div>

                {/* Plans grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {plans.map((plan) => (
                        <Card
                            key={plan.id}
                            className={`relative flex flex-col ${plan.highlight
                                ? "border-sage-400 shadow-2xl shadow-sage-100 scale-[1.02]"
                                : "border-border hover:border-sage-200 card-glow"
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge variant="sage" className="shadow-sm px-4 py-1 text-xs font-semibold">
                                        <Star className="h-3 w-3 mr-1 fill-current" />
                                        {plan.badge}
                                    </Badge>
                                </div>
                            )}

                            {plan.highlight && (
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sage-50/50 to-transparent pointer-events-none" />
                            )}

                            <CardHeader className="pb-4">
                                <div className="text-4xl mb-3">{plan.emoji}</div>
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.tagline}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-end gap-1">
                                        <span className="text-sm text-muted-foreground">R$</span>
                                        <span className="font-display text-5xl font-bold text-foreground">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        pagamento único · atendimento personalizado
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                                            <Check className="h-4 w-4 text-sage-500 mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="pt-4">
                                <Button
                                    variant={plan.highlight ? "default" : "outline"}
                                    className="w-full"
                                    size="lg"
                                >
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Combo banner */}
                <div className="relative bg-gradient-to-r from-sage-700 to-sage-800 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full bg-gold-400/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="h-5 w-5 text-gold-300" />
                                <span className="text-gold-300 text-sm font-semibold tracking-wider uppercase">
                                    Melhor Valor
                                </span>
                            </div>
                            <h3 className="font-display text-3xl font-semibold mb-2">{combo.name}</h3>
                            <ul className="space-y-1.5 mb-4">
                                {combo.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sage-100 text-sm">
                                        <Check className="h-4 w-4 text-gold-300 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center shrink-0">
                            <div className="mb-1">
                                <span className="line-through text-sage-300 text-lg">
                                    {formatPrice(combo.originalPrice)}
                                </span>
                                <span className="ml-2 bg-gold-400 text-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                                    -{formatPrice(combo.savings)}
                                </span>
                            </div>
                            <div className="font-display text-5xl font-bold text-white mb-1">
                                {formatPrice(combo.price)}
                            </div>
                            <p className="text-sage-300 text-xs mb-6">pagamento único</p>
                            <Button variant="gold" size="xl" className="shadow-xl w-full md:w-auto">
                                Quero o Combo Completo!
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Guarantee */}
                <div className="text-center mt-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                        <span className="text-2xl">🛡️</span>
                    </div>
                    <p className="font-semibold text-foreground">Garantia de 7 dias</p>
                    <p className="text-sm text-muted-foreground max-w-md">
                        Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu
                        investimento. Sem burocracia.
                    </p>
                </div>
            </div>
        </section>
    );
}
