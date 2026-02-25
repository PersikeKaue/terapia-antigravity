"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Headphones } from "lucide-react";

export function WhatIsThisSection() {
    return (
        <section id="what-is-this" className="py-24 bg-[#0a0510] relative border-t border-white/[0.02]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark border border-[#BF953F]/30 text-[#BF953F] mb-6 md:mb-8 md:px-5 md:py-3"
                    >
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">Como Funciona o Serviço</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6 md:mb-8">
                        O que exatamente você está <span className="gold-gradient-text">agendando?</span>
                    </h2>

                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        Esqueça apostilas ou cursos gravados onde você é apenas mais um no sistema. O meu trabalho consiste em uma
                        <strong className="text-white font-medium"> consulta terapêutica ativa, individual e conduzida de forma exclusiva para você. </strong>
                        A Mesa Radiônica é uma ferramenta de alteração de campos eletromagnéticos que aplicarei para tratar a sua dor, com contato direto comigo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative group hover:border-[#BF953F]/30 transition-colors"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#BF953F]/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-[#BF953F]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display text-white mb-3 md:mb-4">1. Alinhamento no WhatsApp</h3>
                        <p className="text-white/50 leading-relaxed text-sm md:text-base">
                            Assim que a compra for aprovada, enviarei uma mensagem diretamente para o seu WhatsApp.
                            Farei algumas perguntas pontuais para entender o seu momento e você escolherá qual Mesa Radiônica deseja realizar.
                        </p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative group hover:border-[#BF953F]/30 transition-colors"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#BF953F]/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#BF953F]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display text-white mb-3 md:mb-4">2. A Cirurgia Energética</h3>
                        <p className="text-white/50 leading-relaxed text-sm md:text-base">
                            Com as suas respostas em mãos, entrarei em meu momento protegido. Realizarei o atendimento na Mesa Radiônica
                            escolhida, atuando de forma profunda nas suas pendências e trabalhando o seu campo vibracional.
                        </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative group hover:border-[#BF953F]/30 transition-colors"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#BF953F]/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                            <Headphones className="w-6 h-6 md:w-8 md:h-8 text-[#BF953F]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display text-white mb-3 md:mb-4">3. Áudios e Resultados</h3>
                        <p className="text-white/50 leading-relaxed text-sm md:text-base">
                            Ao finalizar, gravarei áudios detalhados te explicando e mostrando o que saiu na mesa. Além disso,
                            te enviarei os PDFs e materiais didáticos terapêuticos específicos que a mesa indicou para o seu caso.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
