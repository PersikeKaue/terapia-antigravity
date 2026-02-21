"use client";

function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
}

export function Footer() {
    return (
        <footer className="bg-background text-white py-24 border-t border-white/[0.05] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="grid md:grid-cols-12 gap-16 mb-20">

                    {/* Brand */}
                    <div className="md:col-span-5">
                        <h3 className="font-display text-4xl mb-6 italic text-white">
                            Persike
                            <span className="text-[10px] font-sans not-italic text-[#BF953F] uppercase tracking-[0.4em] font-medium block mt-2">
                                Terapias Holísticas
                            </span>
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-8 font-light max-w-sm">
                            Elevando o padrão do cuidado energético, emocional e espiritual. Mais de 20 anos
                            construindo bases sólidas para vidas prósperas.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 lg:col-start-7">
                        <h4 className="font-medium mb-8 uppercase tracking-[0.2em] text-[10px] text-white/30">
                            Navegação
                        </h4>
                        <ul className="space-y-4 text-sm text-white/70 font-light">
                            {[
                                { id: "benefits", label: "A Transformação" },
                                { id: "about", label: "A Mentora" },
                                { id: "services", label: "O Método" },
                                { id: "offer", label: "Adquirir Mesa" },
                            ].map(({ id, label }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        className="hover:text-[#BF953F] transition-colors"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="font-medium mb-8 uppercase tracking-[0.2em] text-[10px] text-white/30">
                            Exclusividade
                        </h4>
                        <ul className="space-y-4 text-sm text-white/70 font-light mb-10">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#BF953F]" />
                                WhatsApp: (11) 96448-2515
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                Atendimento Global Online
                            </li>
                        </ul>

                        <a
                            href="/login"
                            className="block w-full py-4 border border-white/10 text-white/70 text-xs uppercase tracking-widest font-medium hover:bg-white/5 transition-colors rounded-full text-center"
                        >
                            Portal do Paciente →
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/[0.05] pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-white/30 font-medium">
                    <p>© 2026 PERSIKE — TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-[#BF953F] transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-[#BF953F] transition-colors">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
