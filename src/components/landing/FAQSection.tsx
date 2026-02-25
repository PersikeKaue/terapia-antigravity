"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Isso é um curso ou um atendimento real?",
        answer: "É um atendimento terapêutico real e individual. Diferente de cursos online, eu atuo ativamente na sua energia e te entrego áudios explicativos detalhados, foto da sua mesa e todos os materiais didáticos diretamente no WhatsApp."
    },
    {
        question: "Eu preciso estar online na hora do atendimento?",
        answer: "Não. A frequência da Mesa não exige que você esteja online na hora da operação. Farei o atendimento no meu espaço protegido e te envio o relatório completo em áudio no seu WhatsApp para você ouvir quando estiver em paz."
    },
    {
        question: "Qualquer pessoa pode passar pela Mesa Radiônica?",
        answer: "Sim. A Mesa Radiônica atua no campo vibracional e pode beneficiar qualquer pessoa de qualquer idade. Ela ajuda na liberação de bloqueios financeiros, traumas afetivos, cordões energéticos nocivos e reequilíbrio geral."
    },
    {
        question: "Como saberei que a minha Mesa foi feita?",
        answer: "Assim que a compra for aprovada, enviarei uma mensagem no seu WhatsApp para alinhar o seu pedido. Quando eu finalizar o seu atendimento (no prazo estipulado), enviarei a foto da mesa, os áudios e todos os seus PDFs diretamente por lá."
    },
    {
        question: "A Mesa substitui tratamentos médicos tradicionais?",
        answer: "Não. A Mesa Radiônica e as terapias energéticas são integrativas, ou seja, elas atuam no campo espiritual, mental e energético. Elas não substituem tratamentos alopáticos, psicológicos ou psiquiátricos, mas são excelentes aliadas na sua jornada de cura."
    }
];

export function FAQSection() {
    return (
        <section id="faq" className="py-24 bg-[#0a0510] relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark border border-[#BF953F]/30 text-[#BF953F] mb-6 md:mb-8 md:px-5 md:py-3"
                        >
                            <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">Tira Dúvidas</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-display text-white">
                            Perguntas <span className="gold-gradient-text">Frequentes</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 md:p-12 rounded-3xl border border-white/5"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-white/10 px-2 md:px-4">
                                    <AccordionTrigger className="text-left text-white/90 hover:text-white hover:no-underline font-medium text-base md:text-lg py-6 data-[state=open]:text-[#BF953F]">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white/60 leading-relaxed text-base md:text-lg pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
