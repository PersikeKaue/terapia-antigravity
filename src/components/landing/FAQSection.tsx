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
        answer: "É um atendimento terapêutico real e individual. Diferente de cursos online onde você recebe apenas aulas gravadas, ao agendar sua Mesa, eu trabalho ativamente a sua energia no meu espaço e te entrego a gravação exclusiva desse seu momento."
    },
    {
        question: "Eu preciso estar online na hora do atendimento?",
        answer: "Não. A radiação e a frequência da Mesa não exigem que você esteja conectada(o) na hora em que eu estou operando. Farei o atendimento no dia agendado, gravarei tudo, e disponibilizarei na sua Área de Membros para você assistir quando estiver em um momento tranquilo."
    },
    {
        question: "Qualquer pessoa pode passar pela Mesa Radiônica?",
        answer: "Sim. A Mesa Radiônica atua no campo vibracional e pode beneficiar qualquer pessoa de qualquer idade. Ela ajuda na liberação de bloqueios financeiros, traumas afetivos, cordões energéticos nocivos e reequilíbrio geral."
    },
    {
        question: "Como saberei que a minha Mesa foi feita?",
        answer: "Assim que a compra for aprovada, você receberá acesso imediato à Área de Pacientes. Seu status ficará como 'Em Preparação'. Quando eu finalizar o seu atendimento (no prazo estipulado), a gravação em vídeo e os materiais estarão liberados no seu painel."
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
                <div className="max-w-3xl mx-auto">

                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark border border-[#BF953F]/30 text-[#BF953F] mb-6"
                        >
                            <HelpCircle className="w-4 h-4" />
                            <span className="text-xs font-semibold tracking-widest uppercase">Tira Dúvidas</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-display text-white">
                            Perguntas <span className="gold-gradient-text">Frequentes</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 md:p-10 rounded-3xl border border-white/5"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-white/10 px-2">
                                    <AccordionTrigger className="text-left text-white/90 hover:text-white hover:no-underline font-medium py-6 data-[state=open]:text-[#BF953F]">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white/60 leading-relaxed pb-6">
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
