"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ShieldCheck, Lock } from "lucide-react";

const features = [
    "Sessão 100% Única e Personalizada de Mesa Radiônica",
    "Cada Mesa é criada exclusivamente para você — sem fórmulas prontas",
    "Materiais de Apoio enviados via WhatsApp de forma personalizada",
    "Acompanhamento e Suporte Direto com Silvana",
];

const waUrl = "https://wa.me/5511964482515?text=Olá+Silvana,+quero+desbloquear+meus+caminhos+com+a+Mesa+Radiônica!";

/** Animated counter that counts up when in view */
function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let current = 0;
        const increment = value / (2000 / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setDisplay(value); clearInterval(timer); }
            else { setDisplay(Math.floor(current)); }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, value]);

    return <span ref={ref}>{display}</span>;
}

export function OfferSection() {
    return (
        <section
            id="offer"
            className="py-40 bg-[#0a0510] relative overflow-hidden border-t border-[#BF953F]/20"
        >
            {/* Dot-grid texture */}
            <div
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+PC9zdmc+\")" }}
            />
            {/* Central glow orb */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#BF953F]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 10, repeat: 9999, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* ── Header ── */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <motion.span
                            className="text-[#BF953F] font-medium tracking-[0.4em] uppercase text-[10px] mb-6 inline-block px-6 py-2 border border-[#BF953F]/40 rounded-full bg-[#BF953F]/10"
                            animate={{ boxShadow: ["0 0 20px rgba(191,149,63,0.2)", "0 0 40px rgba(191,149,63,0.4)", "0 0 20px rgba(191,149,63,0.2)"] }}
                            transition={{ duration: 3, repeat: 9999 }}
                        >
                            O Convite
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 tracking-tight text-white leading-tight">
                            Sua Nova Frequência{" "}
                            <br />
                            <motion.span
                                className="gold-gradient-text italic inline-block"
                                whileHover={{ scale: 1.02 }}
                            >
                                Tem um Preço.
                            </motion.span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                            E é infinitamente menor do que o custo de continuar vivendo uma vida travada e abaixo do seu potencial.
                        </p>
                    </motion.div>
                </div>

                {/* ── Pricing card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-6xl mx-auto relative"
                >
                    {/* Glowing animated border */}
                    <motion.div
                        className="absolute -inset-[2px] bg-gradient-to-b from-[#BF953F] via-purple-500/50 to-transparent rounded-[3rem] blur-[4px]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: 9999, ease: "easeInOut" }}
                    />

                    <div className="relative bg-[#0a0510]/90 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center overflow-hidden border border-white/20 shadow-2xl">

                        {/* Animated light ray */}
                        <motion.div
                            className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-[#BF953F]/10 to-transparent -skew-x-12"
                            animate={{ left: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: 9999, ease: "linear", repeatDelay: 5 }}
                        />

                        {/* LEFT: feature list */}
                        <div className="flex-1 space-y-10 relative z-10 w-full">
                            <h3 className="text-4xl md:text-5xl font-display text-white mb-10 tracking-tight">
                                O Pacote <span className="text-[#BF953F] italic">Absoluto</span>
                            </h3>

                            <ul className="space-y-8">
                                {features.map((f, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: 0.3 + i * 0.15, duration: 0.8, type: "spring" }}
                                        className="flex items-start gap-6 group"
                                    >
                                        <motion.div
                                            className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#BF953F]/20 to-transparent flex items-center justify-center shrink-0 border border-[#BF953F]/50 shadow-[0_0_15px_rgba(191,149,63,0.2)] group-hover:bg-[#BF953F] transition-colors duration-500"
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                        >
                                            <Check className="w-4 h-4 text-[#BF953F] group-hover:text-background transition-colors duration-500" strokeWidth={3} />
                                        </motion.div>
                                        <span className="text-white/80 font-light text-xl leading-relaxed group-hover:text-white transition-colors duration-300">
                                            {f}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: price ticket */}
                        <motion.div
                            className="w-full lg:w-[450px] shrink-0 relative z-10"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/30 to-purple-900/50 blur-3xl rounded-full opacity-80" />

                            <div className="glass-panel-dark p-12 rounded-[2.5rem] text-center border-[#BF953F]/50 relative overflow-hidden backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                {/* Inner shimmer on hover */}
                                <motion.div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                                <p className="text-xs uppercase tracking-[0.4em] font-bold text-[#BF953F] mb-8">
                                    Adquira sua Mesa
                                </p>

                                <div className="flex justify-center items-start mb-4">
                                    <span className="text-3xl mt-3 mr-3 font-light text-white/50">R$</span>
                                    <span className="text-8xl font-display font-bold text-white tracking-tighter drop-shadow-lg">
                                        <AnimatedNumber value={97} />
                                    </span>
                                </div>
                                <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-12 font-medium">
                                    atendimento exclusivo
                                </p>

                                {/* CTA with pulse ring */}
                                <div className="relative mb-10">
                                    <div
                                        className="absolute inset-0 rounded-full"
                                        style={{ background: "rgba(191,149,63,0.3)", animation: "pulse-ring 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite" }}
                                    />
                                    <motion.a
                                        href={waUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-shimmer relative block w-full py-6 rounded-full text-base font-bold tracking-[0.2em] uppercase text-background gold-gradient-bg shadow-[0_0_40px_rgba(191,149,63,0.4)] hover:shadow-[0_0_70px_rgba(252,246,186,0.7)] transition-all duration-500 overflow-hidden group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="absolute inset-0 bg-white/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
                                        <span className="relative z-10">Desbloquear Agora</span>
                                    </motion.a>
                                </div>

                                {/* Trust badges */}
                                <div className="space-y-3 flex flex-col items-center">
                                    {[
                                        { icon: ShieldCheck, text: "Garantia de 7 dias" },
                                        { icon: Lock, text: "Compra 100% Segura" },
                                    ].map(({ icon: Icon, text }) => (
                                        <motion.div
                                            key={text}
                                            className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs text-white/60 uppercase tracking-[0.1em] font-medium"
                                            whileHover={{ backgroundColor: "rgba(255,255,255,0.10)", borderColor: "rgba(191,149,63,0.5)" }}
                                        >
                                            <Icon className="w-4 h-4 text-[#BF953F]" />
                                            {text}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
