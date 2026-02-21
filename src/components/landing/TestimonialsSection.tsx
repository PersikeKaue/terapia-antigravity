"use client";

import Image from "next/image";
import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Fernanda Oliveira",
        location: "São Paulo, SP",
        avatar: "/testimonial-fernanda.jpg",
        rating: 5,
        testimonial:
            "Incrível! A Silvana montou minha mesa de um jeito completamente personalizado. Em 3 semanas recebi uma proposta de emprego dos sonhos e várias oportunidades financeiras se abriram. O atendimento dela é diferente de tudo que já vi — é realmente único.",
        product: "Mesa da Prosperidade",
    },
    {
        name: "Carolina Mendes",
        location: "Belo Horizonte, MG",
        avatar: "/testimonial-carolina.jpg",
        rating: 5,
        testimonial:
            "A minha mesa foi criada especialmente para mim, com ferramentas que a Silvana escolheu exclusivamente para o meu caso. O resultado foi transformador. Comecei a me amar de verdade e meu casamento também floresceu. Não tenho palavras para agradecer.",
        product: "Mesa do Amor e Cura",
    },
    {
        name: "Patricia Santos",
        location: "Rio de Janeiro, RJ",
        avatar: "/testimonial-patricia.jpg",
        rating: 5,
        testimonial:
            "Estava passando por um momento difícil no trabalho. A Silvana entendeu minha situação e criou algo exclusivo para mim. Os materiais que ela enviou pelo WhatsApp eram exatamente o que eu precisava. Sinto uma blindagem real ao meu redor!",
        product: "Mesa de Proteção",
    },
    {
        name: "Juliana Costa",
        location: "Curitiba, PR",
        avatar: "/testimonial-juliana.jpg",
        rating: 5,
        testimonial:
            "Fui com muita cautela, mas o atendimento da Silvana me surpreendeu. Com 40 anos de experiência em assistência social, ela realmente sabe escutar. Os materiais chegaram pelo WhatsApp, todos personalizados para a minha situação. Mudanças profundas em poucas semanas!",
        product: "Mesa Radiônica",
    },
];

export function TestimonialsSection() {
    return (
        <section id="depoimentos" className="py-32 bg-[#0a0510] relative overflow-hidden border-t border-white/[0.02]">
            {/* Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+PC9zdmc+\")" }}
            />
            <motion.div
                className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-[#BF953F]/8 rounded-full blur-[120px] pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 12, repeat: 9999, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#BF953F] font-medium tracking-[0.3em] uppercase text-[10px] mb-6 inline-block px-4 py-1 border border-[#BF953F]/30 rounded-full bg-[#BF953F]/5">
                            Depoimentos Reais
                        </span>
                        <h2 className="text-5xl md:text-6xl font-display mb-6 tracking-tight text-white leading-tight">
                            Vidas{" "}
                            <span className="gold-gradient-text italic inline-block">
                                Transformadas
                            </span>
                        </h2>
                        <p className="text-xl text-white/50 font-light leading-relaxed">
                            Cada atendimento é único e personalizado. Veja o que nossas clientes dizem sobre a experiência exclusiva com Silvana.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, staggerChildren: 0.15 }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                            whileHover={{ y: -6 }}
                            className="relative flex flex-col rounded-[2rem] border border-white/[0.08] bg-black/40 backdrop-blur-sm p-6 hover:border-[#BF953F]/30 hover:shadow-[0_0_40px_rgba(191,149,63,0.08)] transition-all duration-500"
                        >
                            {/* Gold quote */}
                            <Quote className="h-6 w-6 mb-4 opacity-50" style={{ color: "#BF953F" }} />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="h-3.5 w-3.5 fill-[#BF953F] text-[#BF953F]" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-white/60 leading-relaxed text-sm font-light flex-1 mb-6">
                                &ldquo;{t.testimonial}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#BF953F]/30">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-2.5 w-2.5 text-white/30 shrink-0" />
                                        <p className="text-[10px] text-white/40 truncate">{t.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Product badge */}
                            <div className="mt-3">
                                <span
                                    className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                                    style={{ background: "rgba(191,149,63,0.1)", color: "#BF953F", border: "1px solid rgba(191,149,63,0.2)" }}
                                >
                                    {t.product}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
