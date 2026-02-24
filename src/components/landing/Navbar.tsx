"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
    { id: "benefits", label: "A Transformação" },
    { id: "about", label: "A Mentora" },
    { id: "services", label: "O Método" },
];

function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
}

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    useMotionValueEvent(scrollY, "change", (v) => {
        if (mounted) setScrolled(v > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.05] py-4 shadow-2xl"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex flex-col cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ scale: 1.02 }}
                >
                    <span className="font-display text-2xl tracking-wider text-white group-hover:text-[#FCF6BA] transition-colors duration-500">
                        PERSIKE
                    </span>
                    <span className="text-[9px] tracking-[0.4em] text-[#BF953F] uppercase mt-0.5 font-medium">
                        Terapias Holísticas
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium text-white/70">
                    {navItems.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="hover:text-white transition-colors relative group overflow-hidden py-2"
                        >
                            {label}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#BF953F] transition-all duration-500 group-hover:w-full" />
                        </button>
                    ))}
                </nav>

                {/* CTA */}
                <motion.button
                    onClick={() => scrollTo("offer")}
                    className="hidden md:flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-white text-background hover:bg-[#FCF6BA] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(252,246,186,0.3)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Agendar Sessão
                </motion.button>

                {/* Mobile */}
                <motion.button
                    onClick={() => scrollTo("offer")}
                    className="md:hidden text-[#BF953F] border border-[#BF953F]/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
                    whileTap={{ scale: 0.95 }}
                >
                    Agendar
                </motion.button>
            </div>
        </motion.header>
    );
}
