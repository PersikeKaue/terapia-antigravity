"use client";

import { motion } from "framer-motion";
import { Orbit, Compass, Cpu } from "lucide-react";

const benefits = [
    {
        icon: Orbit,
        title: "Alquimia Energética",
        description:
            "Uma varredura profunda no seu campo vibracional. Removemos crenças limitantes, laços tóxicos e bloqueios instalados no subconsciente.",
    },
    {
        icon: Compass,
        title: "Bússola de Decisões",
        description:
            "Clareza mental absoluta. A Mesa revela o exato caminho alinhado com o seu propósito mais elevado, seja nos negócios ou no amor.",
    },
    {
        icon: Cpu,
        title: "Ecossistema Digital",
        description:
            "Sua cura não termina na sessão. Os materiais de apoio são enviados de forma personalizada via WhatsApp — porque cada pessoa recebe ferramentas únicas pensadas especialmente para ela.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } },
};

export function BenefitsSection() {
    return (
        <section
            id="benefits"
            className="py-40 relative border-t border-white/[0.02] overflow-hidden"
        >
            {/* ── Image Background ── */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-background/80 md:bg-background/70 z-10" />
                <img
                    src="/images/benefits-bg.png"
                    alt="Transformação Holística"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "brightness(0.7) contrast(1.1)" }}
                />
            </div>

            {/* Animated subtle grid */}
            <motion.div
                className="absolute inset-0 opacity-[0.15] z-10 pointer-events-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAzdjFoMzlWM3ptMCAxMHYxaDM5di0xem0wIDEwdjFoMzl2LTF6bTAgMTB2MWgzOXYtMXptMy0zMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjwvZz48L3N2Zz4=\")",
                }}
                animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
                transition={{ duration: 10, repeat: 9999, ease: "linear" }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* ── Sticky left column ── */}
                    <div className="lg:w-1/3 lg:sticky lg:top-40">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Gold accent bar */}
                            <motion.div
                                className="w-12 h-[2px] bg-[#BF953F] mb-8 origin-left"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-white tracking-tight leading-tight">
                                O que acontece nos{" "}
                                <br />
                                <motion.span
                                    className="gold-gradient-text italic inline-block"
                                    whileHover={{ scale: 1.05, rotate: -2 }}
                                >
                                    bastidores?
                                </motion.span>
                            </h2>
                            <p className="text-white/50 font-light leading-relaxed text-lg">
                                Não é mágica, é física quântica e radiestesia operando em altíssima frequência para
                                destravar a sua realidade.
                            </p>
                        </motion.div>
                    </div>

                    {/* ── Cards ── */}
                    <motion.div
                        className="lg:w-2/3 space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
                    >
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, x: -10 }}
                                className="glass-panel-dark p-8 md:p-12 rounded-[2rem] group hover:bg-white/[0.06] hover:border-[#BF953F]/30 transition-all duration-500 relative overflow-hidden cursor-default"
                            >
                                {/* Hover glow */}
                                <div className="absolute right-0 top-0 w-64 h-64 bg-[#BF953F]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/2 -translate-y-1/2" />
                                {/* Border trace */}
                                <div className="absolute inset-0 border border-[#BF953F]/0 group-hover:border-[#BF953F]/20 rounded-[2rem] transition-colors duration-700" />

                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                    <motion.div
                                        className="w-16 h-16 shrink-0 rounded-full border border-[#BF953F]/30 bg-black/50 flex items-center justify-center text-[#BF953F] shadow-[0_0_15px_rgba(191,149,63,0.1)] group-hover:bg-[#BF953F] group-hover:text-background transition-all duration-500"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <benefit.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-display mb-4 text-white group-hover:text-[#FCF6BA] transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed font-light text-lg">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
