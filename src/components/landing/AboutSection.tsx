"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-40 bg-[#0a0510] relative overflow-hidden border-t border-white/[0.02]"
        >
            {/* Grid texture */}
            <div
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAzdjFoMzlWM3ptMCAxMHYxaDM5di0xem0wIDEwdjFoMzl2LTF6bTAgMTB2MWgzOXYtMXptMy0zMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXptMTAgMHYzOWgxdi0zOXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvZz48L3N2Zz4=\")",
                }}
            />
            {/* Gold ambient orb */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[60vh] bg-[#BF953F]/10 blur-[150px] rounded-full pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: 9999, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* ── Image with parallax ── */}
                    <div className="relative h-[600px] lg:h-[700px] w-full max-w-md mx-auto lg:mr-auto lg:ml-0">
                        <motion.div style={{ y: imageY }} className="absolute inset-0">
                            {/* Elegant border frame */}
                            <div className="absolute inset-0 border border-white/10 rounded-t-full rounded-b-[2rem] transform translate-x-6 translate-y-6 transition-transform duration-500 hover:translate-x-8 hover:translate-y-8" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#BF953F]/30 to-transparent rounded-t-full rounded-b-[2rem] blur-2xl opacity-60" />

                            <motion.div
                                className="relative h-full w-full rounded-t-full rounded-b-[2rem] overflow-hidden border border-[#BF953F]/30 p-2 glass-panel-dark group cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="w-full h-full rounded-t-[calc(9999px-8px)] rounded-b-[calc(2rem-8px)] overflow-hidden relative">
                                    <Image
                                        src="/silvana.png"
                                        alt="Silvana Persike"
                                        fill
                                        className="object-cover grayscale-[30%] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-105 transition-all duration-1000 ease-out"
                                        sizes="(max-width: 768px) 400px, 500px"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Floating "Agenda Aberta" badge */}
                            <motion.div
                                animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                                transition={{ duration: 6, repeat: 9999, ease: "easeInOut" }}
                                className="absolute top-1/4 -right-12 lg:-right-20 glass-panel-dark px-6 py-4 rounded-full border border-[#BF953F]/40 shadow-[0_0_40px_rgba(191,149,63,0.2)] flex items-center gap-3 backdrop-blur-2xl"
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#BF953F]" />
                                    <motion.div
                                        className="absolute w-6 h-6 rounded-full border border-[#BF953F]"
                                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                                        transition={{ duration: 2, repeat: 9999, ease: "easeOut" }}
                                    />
                                </div>
                                <span className="text-white text-xs uppercase tracking-[0.2em] font-medium">Agenda Aberta</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ── Text ── */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.p
                                className="text-[#BF953F] font-medium tracking-[0.3em] uppercase text-[10px] mb-6 inline-block relative"
                                whileHover={{ scale: 1.05 }}
                            >
                                A Mestre Por Trás do Método
                                <span className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-[#BF953F]" />
                            </motion.p>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-white tracking-tight">
                                Muito Prazer,{" "}
                                <br />
                                <motion.span
                                    className="italic text-white/50 inline-block"
                                    whileHover={{ color: "rgba(255,255,255,1)", textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Silvana Persike
                                </motion.span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="space-y-6 text-white/60 text-lg lg:text-xl font-light leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <p className="hover:text-white/90 transition-colors duration-300">
                                A grande virada na minha trajetória não veio dos livros, mas da vida real. Durante a
                                pandemia, a fé e as Mesas Radiônicas foram o pilar que sustentou e curou minha família
                                nos momentos mais obscuros.
                            </p>
                            <p className="hover:text-white/90 transition-colors duration-300">
                                Foram mais de{" "}
                                <strong className="text-white font-medium">40 anos dedicados à Assistência Social</strong>.
                                Toda essa vivência me trouxe uma bagagem profunda de escuta e sensibilidade humana, que hoje
                                é a base do meu amparo e direcionamento através das Mesas Radiônicas e terapias energéticas.
                            </p>
                            <p className="hover:text-white/90 transition-colors duration-300">
                                Essas 4 décadas acompanhando pessoas em situações delicadas me deram o dom de perceber
                                o que a sua alma não consegue dizer. Aqui, o seu atendimento é único, criado
                                especialmente para você — porque cada vida é singular.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.div
                            className="pt-8 border-t border-white/10 relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <motion.div
                                className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#BF953F] to-transparent -ml-[1px]"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                                style={{ originY: 0 }}
                            />
                            <p className="font-display text-2xl lg:text-3xl leading-relaxed italic text-white/90 pl-6">
                                &quot;Não é sobre adivinhar o futuro. É sobre alinhar sua frequência hoje para que o amanhã
                                seja{" "}
                                <span className="gold-gradient-text inline-block hover:scale-105 transition-transform duration-300">
                                    inevitavelmente próspero.
                                </span>
                                &quot;
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
