"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How often should I visit a gynecologist?",
        answer: "It is recommended to visit a gynecologist annually for a routine check-up. However, if you experience any unusual symptoms or have specific concerns, you should schedule an appointment immediately."
    },
    {
        question: "What should I expect during my first Prenatal visit?",
        answer: "Your first prenatal visit will involve a review of your medical history, a physical exam, and lab tests. We will also discuss your due date, nutrition, and any questions you may have about your pregnancy journey."
    },
    {
        question: "Do you offer minimally invasive surgery options?",
        answer: "Yes, Dr. Vinita Khemani specializes in advanced laparoscopic surgeries which are minimally invasive, resulting in smaller incisions, less pain, and faster recovery times."
    },
    {
        question: "How can I manage high-risk pregnancy?",
        answer: "Managing a high-risk pregnancy involves frequent monitoring, specialized care plans, and close coordination with our medical team. We provide comprehensive support to ensure the safety of both mother and baby."
    },
    {
        question: "What fertility treatments are available?",
        answer: "We offer a range of fertility treatments including ovulation induction, IUI (Intrauterine Insemination), and coordination for IVF procedures, tailored to your specific needs."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#fdfbfa]">
            <div className="container-fluid mx-auto max-w-[1400px] px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left: Sticky Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#a43971] bg-[#f5e6ef]/50">
                            FAQ&apos;s
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold animate-text-gradient leading-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Common</span> <br /><span className="text-[#a43971]">Questions</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Find answers to the most frequently asked questions about Dr. Vinita Khemani's care and women's health.
                        </p>
                        <div className="hidden lg:block w-20 h-1 bg-[#a43971] rounded-full opacity-20" />
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-[2rem] border border-transparent hover:border-[#f5e6ef] shadow-sm hover:shadow-md transition-all overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-8 text-left"
                                        >
                                            <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-[#a43971]' : 'text-gray-900'}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#a43971] text-white' : 'bg-[#f5e6ef] text-[#a43971]'}`}>
                                                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
