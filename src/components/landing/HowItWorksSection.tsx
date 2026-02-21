import { Zap, BookOpen, Star, Users } from "lucide-react";

const steps = [
    {
        icon: Star,
        step: "01",
        title: "Programação Energética",
        description:
            "Cada mesa é criada e programada com intenções específicas, frequências vibracionais e geometria sagrada para potencializar o campo energético desejado.",
    },
    {
        icon: Zap,
        step: "02",
        title: "Ativação pela Intenção",
        description:
            "Você recebe instruções detalhadas para ativar e amplificar a mesa em sua realidade. Seu poder de intenção é o combustível para o processo.",
    },
    {
        icon: BookOpen,
        step: "03",
        title: "Protocolo de Uso",
        description:
            "Acompanha vídeo explicativo e materiais de apoio — enviados de forma personalizada via WhatsApp, com protocolos, afirmações e meditações guiadas para maximizar os resultados.",
    },
    {
        icon: Users,
        step: "04",
        title: "Campo em Expansão",
        description:
            "A mesa opera continuamente no campo quântico, alinhando sincronicidades e abrindo caminhos para as manifestações que você deseja.",
    },
];

export function HowItWorksSection() {
    return (
        <section id="como-funciona" className="py-24 bg-sage-50/50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sage-500 text-sm font-semibold tracking-wider uppercase mb-4">
                        Como Funciona
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                        A ciência por trás das{" "}
                        <span className="text-gradient-sage">Mesas Radiônicas</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        A radiônica é uma tecnologia energética que utiliza padrões de frequência
                        para interagir com o campo sutil da realidade — simples de usar, profunda
                        em seus efeitos.
                    </p>
                </div>

                {/* Steps grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map(({ icon: Icon, step, title, description }) => (
                        <div
                            key={step}
                            className="group relative bg-white rounded-2xl p-6 border border-sage-100 hover:border-sage-200 card-glow cursor-default"
                        >
                            {/* Step number background */}
                            <span className="absolute top-4 right-4 font-display text-6xl font-bold text-sage-50 select-none">
                                {step}
                            </span>

                            {/* Icon */}
                            <div className="relative z-10 w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                                <Icon className="h-6 w-6 text-sage-600" />
                            </div>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 relative z-10">
                                {title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 p-8 bg-gradient-to-r from-sage-50 to-ivory-100 rounded-3xl border border-sage-100">
                    <p className="font-display text-2xl text-foreground mb-2">
                        Pronta para experimentar?
                    </p>
                    <p className="text-muted-foreground mb-6">
                        Cada mesa é única e personalizada. Os materiais de apoio são enviados diretamente pelo WhatsApp, pois cada pessoa recebe ferramentas diferentes.
                    </p>
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-foreground font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
                    >
                        Ver as Mesas Disponíveis
                    </a>
                </div>
            </div>
        </section>
    );
}
