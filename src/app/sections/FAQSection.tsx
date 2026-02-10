"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How often should I visit a gynecologist?",
        answer: "Visit a gynecologist once a year for a routine check-up. Schedule an immediate appointment if you experience irregular periods, pelvic pain, unusual discharge, or any sudden symptoms. Women above 40 should also include annual breast and cervical screening."
    },
    {
        question: "What happens during the first prenatal visit?",
        answer: "The first prenatal visit includes a complete medical history review, blood tests (CBC, blood group, thyroid, sugar), urine analysis, blood pressure check, and an ultrasound to confirm the pregnancy and estimated due date. Dr. Khemani also provides a personalized nutrition and supplement plan."
    },
    {
        question: "Does Dr. Vinita Khemani perform laparoscopic surgery?",
        answer: "Yes. Dr. Khemani has performed 583+ laparoscopic (keyhole) surgeries for fibroids, ovarian cysts, endometriosis, ectopic pregnancy, and hysterectomy. Benefits include smaller incisions (5–10 mm), less post-operative pain, and discharge typically within 24–48 hours."
    },
    {
        question: "What is a high-risk pregnancy and how is it managed?",
        answer: "A high-risk pregnancy involves conditions like gestational diabetes, preeclampsia, placenta previa, or a history of preterm birth. Dr. Khemani manages these with frequent ultrasound monitoring, specialized medication, coordinated NICU backup, and a customized delivery plan."
    },
    {
        question: "What fertility treatments does Dr. Khemani offer?",
        answer: "Treatments include ovulation induction, IUI (Intrauterine Insemination), IVF coordination, hormonal therapy for PCOS, hysteroscopy for uterine abnormalities, and laparoscopic treatment for endometriosis and tubal blockage. Each plan is tailored after a complete fertility evaluation."
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
                            Find answers to the most frequently asked questions about Dr. Vinita Khemani&apos;s care and women&apos;s health.
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
