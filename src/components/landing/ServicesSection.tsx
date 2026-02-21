"use client";

import { motion } from "framer-motion";
import { Sparkles, Hexagon, Fingerprint, Waves, ShieldAlert, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: Sparkles,
        title: "Mesa Radiônica",
        subtitle: "A Ferramenta Primária",
        description:
            "O mais alto nível de intervenção energética. Opero 20+ mesas (São Miguel, Prosperidade, Saúde) para varrer bloqueios e reprogramar sua realidade.",
        featured: true,
    },
    {
        icon: Hexagon,
        title: "Alinhamento de Chakras",
        subtitle: "Equilíbrio Total",
        description:
            "Sincronização dos seus centros de poder através de Cristalterapia e Reiki para operar no seu eixo máximo.",
    },
    {
        icon: Fingerprint,
        title: "Diagnóstico Vibracional",
        subtitle: "Radiestesia Clínica",
        description:
            "Mapeamento cirúrgico de onde sua vida está travando — ambientes, relacionamentos ou finanças — e a correção imediata da frequência.",
    },
    {
        icon: Waves,
        title: "Energia Vital",
        subtitle: "Reiki & Terapia Floral",
        description:
            "Protocolos 100% naturais para blindar você contra estresse, ansiedade profunda e insônia crônica.",
    },
    {
        icon: ShieldAlert,
        title: "Santuário Pet",
        subtitle: "Cuidado Animal",
        description:
            "Seu animal absorve as cargas da casa. Alinhamento e cura energética exclusiva para quem também faz parte da família.",
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 60, damping: 15 } },
};

export function ServicesSection() {
    return (
        <section
            id="services"
            className="py-40 bg-background relative border-t border-white/[0.02] overflow-hidden"
        >
            {/* Background orbs */}
            <motion.div
                className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#BF953F]/5 rounded-full blur-[150px] pointer-events-none"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 15, repeat: 9999, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 20, repeat: 9999, ease: "easeInOut", delay: 5 }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="text-[#BF953F] font-medium tracking-[0.3em] uppercase text-[10px] mb-6 inline-block px-4 py-1 border border-[#BF953F]/30 rounded-full bg-[#BF953F]/5"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(191,149,63,0.10)" }}
                        >
                            O Ecossistema de Cura
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-display mb-8 leading-tight tracking-tight text-white">
                            Intervenção{" "}
                            <motion.span
                                className="italic text-white/40 inline-block"
                                whileHover={{ color: "rgba(191,149,63,1)", textShadow: "0 0 20px rgba(191,149,63,0.5)" }}
                            >
                                Estratégica
                            </motion.span>
                        </h2>
                        <p className="text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
                            Não tratamos apenas sintomas. Vamos à raiz energética do problema utilizando as
                            ferramentas mais avançadas da espiritualidade quântica.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })}
                            className={`group relative overflow-hidden flex flex-col h-full rounded-[2.5rem] border transition-all duration-500 cursor-pointer backdrop-blur-sm ${service.featured
                                    ? "md:col-span-2 lg:col-span-2 bg-white/[0.04] border-[#BF953F]/40 shadow-[0_0_50px_rgba(191,149,63,0.08)] hover:shadow-[0_0_80px_rgba(191,149,63,0.2)]"
                                    : "bg-black/60 border-white/[0.08] hover:border-white/30 hover:bg-white/[0.04]"
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {service.featured && (
                                <>
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#BF953F]/20 to-transparent rounded-full blur-3xl pointer-events-none group-hover:opacity-70 transition-opacity duration-700 opacity-30" />
                                    <motion.div
                                        className="absolute inset-0 border border-[#BF953F] rounded-[2.5rem] pointer-events-none opacity-0"
                                        animate={{ opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 3, repeat: 9999, ease: "easeInOut" }}
                                    />
                                </>
                            )}

                            <div className="p-10 md:p-12 flex-grow flex flex-col relative z-10">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border shadow-lg transition-colors duration-500 ${service.featured
                                                ? "bg-gradient-to-br from-[#BF953F]/20 to-black border-[#BF953F]/50 text-[#FCF6BA] group-hover:bg-[#BF953F] group-hover:text-background"
                                                : "bg-white/5 border-white/10 text-white group-hover:bg-white/20"
                                            }`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <service.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </motion.div>
                                    <div className="pt-2">
                                        <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 transition-colors duration-300 ${service.featured ? "text-[#BF953F]" : "text-white/40 group-hover:text-white/70"}`}>
                                            {service.subtitle}
                                        </p>
                                        <h3 className={`font-display leading-tight text-white group-hover:text-[#FCF6BA] transition-colors duration-300 ${service.featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className={`text-white/60 font-light leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-300 ${service.featured ? "text-xl max-w-2xl" : "text-lg"}`}>
                                    {service.description}
                                </p>

                                {service.featured && (
                                    <div className="mt-12 flex items-center gap-4 text-[#BF953F] text-sm uppercase tracking-widest font-bold">
                                        <span>Solicitar Análise</span>
                                        <div className="w-10 h-[1px] bg-[#BF953F]/50 group-hover:w-20 group-hover:bg-[#BF953F] transition-all duration-500" />
                                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: 9999, ease: "easeInOut" }}>
                                            <ArrowUpRight className="w-5 h-5" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
