"use client";

import { motion } from "framer-motion";
import { Sparkles, CalendarHeart, Video, FileText } from "lucide-react";

export function WhatIsThisSection() {
    return (
        <section id="what-is-this" className="py-24 bg-[#0a0510] relative border-t border-white/[0.02]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark border border-[#BF953F]/30 text-[#BF953F] mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-widest uppercase">Como Funciona o Serviço</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                        O que exatamente você está <span className="gold-gradient-text">agendando?</span>
                    </h2>

                    <p className="text-white/60 text-lg leading-relaxed">
                        Esqueça apostilas ou cursos gravados onde você é apenas mais um no sistema. O meu trabalho consiste em uma
                        <strong className="text-white font-medium"> consulta terapêutica ativa, individual e 100% gravada pra você.</strong>
                        A Mesa Radiônica é uma ferramenta de alteração de campos eletromagnéticos que aplicarei *para a sua dor*.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-[#BF953F]/30 transition-colors"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#BF953F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <CalendarHeart className="w-6 h-6 text-[#BF953F]" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">1. Agendamento</h3>
                        <p className="text-white/50 leading-relaxed text-sm">
                            Após a confirmação da compra, você entra oficialmente para a minha lista de atendimento.
                            Eu e minha equipe prepararemos o ritual da mesa específico pro seu nome completo e data de nascimento.
                        </p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-[#BF953F]/30 transition-colors"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#BF953F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Video className="w-6 h-6 text-[#BF953F]" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">2. O Atendimento em Si</h3>
                        <p className="text-white/50 leading-relaxed text-sm">
                            Durante meu momento protegido, eu farei a cirurgia energética na Mesa Radiônica para as suas pendências
                            (Financeiras, Amorosas). <strong>Eu gravarei tudo isso num vídeo único </strong> e exclusivo.
                        </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-[#BF953F]/30 transition-colors"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#BF953F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6 text-[#BF953F]" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">3. Relatório e Acesso</h3>
                        <p className="text-white/50 leading-relaxed text-sm">
                            Com a mesa fechada, você ganhará acesso ao seu Painel Pessoal no site,
                            onde poderá dar play e ouvir a minha voz explicando seu caso, assistindo o processo,
                            e lendo os seus PDFs terapêuticos.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
