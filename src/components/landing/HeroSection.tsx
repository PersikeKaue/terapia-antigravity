"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";

function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
}

function getDynamicGreeting() {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return "Bom dia";
    if (h >= 12 && h < 18) return "Boa tarde";
    return "Boa noite";
}

// Stable particles — generated once outside the component
const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${((i * 37 + 13) % 100)}%`,
    left: `${((i * 53 + 7) % 100)}%`,
    duration: 6 + (i % 5),
    delay: (i % 6) * 0.9,
    scale: 1 + (i % 3) * 0.6,
}));

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [greeting, setGreeting] = useState("");

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    useEffect(() => { setGreeting(getDynamicGreeting()); }, []);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            {/* ── Video Background ── */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-background/60 md:bg-background/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    style={{ filter: "brightness(0.6) contrast(1.1)" }}
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* ── Content ── */}
            <div className="container px-4 md:px-6 relative z-10 mx-auto text-center mt-20">
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    className="max-w-5xl mx-auto flex flex-col items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    {/* Greeting */}
                    {greeting && (
                        <motion.p
                            variants={textVariants}
                            className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                        >
                            {greeting} — o universo te esperava aqui
                        </motion.p>
                    )}

                    {/* Badge */}
                    <motion.div
                        variants={textVariants}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#BF953F]/30 bg-black/40 backdrop-blur-md mb-8 relative overflow-hidden group cursor-default"
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: 9999, ease: "linear" }}>
                            <Star className="w-3 h-3 text-[#BF953F] fill-[#BF953F]" />
                        </motion.div>
                        <span className="text-[#FCF6BA] font-medium tracking-[0.2em] uppercase text-[10px] relative z-10">
                            O Padrão Ouro em Terapias Holísticas
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-[7rem] font-display mb-6 leading-[1.05] text-white tracking-tight"
                        variants={textVariants}
                    >
                        A Chave Para Uma{" "}
                        <br className="hidden md:block" />
                        <span className="gold-gradient-text italic pr-4 inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                            Vida Magnética.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-2xl text-white/60 mb-14 font-light max-w-3xl mx-auto leading-relaxed"
                        variants={textVariants}
                    >
                        Desbloqueie sua energia estagnada e alinhe-se com a frequência da prosperidade absoluta
                        através da verdadeira Mesa Radiônica.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto"
                        variants={textVariants}
                    >
                        {/* Primary — gold, with shimmer + pulse */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{ background: "rgba(191,149,63,0.35)", animation: "pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite" }}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollTo("offer")}
                                className="btn-shimmer relative w-full sm:w-auto px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase text-background gold-gradient-bg shadow-[0_0_40px_rgba(191,149,63,0.4)] hover:shadow-[0_0_60px_rgba(252,246,186,0.6)] transition-all duration-500 overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
                                <span className="relative z-10">Iniciar Minha Transformação</span>
                            </motion.button>
                        </div>

                        {/* Secondary — luxury outline */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo("services")}
                            className="btn-luxury w-full sm:w-auto px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase"
                        >
                            Conhecer o Método
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, type: "spring" }}
                onClick={() => scrollTo("benefits")}
            >
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-medium group-hover:text-[#BF953F] transition-colors duration-300">
                    Descobrir
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: 9999, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-[#BF953F]/60 group-hover:text-[#BF953F] transition-colors duration-300" />
                </motion.div>
            </motion.div>
        </section>
    );
}
