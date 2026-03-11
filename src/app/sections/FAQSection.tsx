"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "When and where can I visit you?",
        answer: "Dr. Vinita Khemani is available throughout the week (except on Sunday evening) at different clinics and hospitals. Please check her <a href='/clinic-schedule' class='text-[#a43971] hover:underline font-semibold'>clinic schedule here</a> and book your appointment."
    },
    {
        question: "How do I book an appointment to consult you?",
        answer: "Simply call +91-9903588155 during working hours (11 am to 8 pm) for an appointment in Bangur Avenue Clinic. Visit the <a href='/clinic-schedule' class='text-[#a43971] hover:underline font-semibold'>Clinic Schedule</a> page for more information on the contact number of the respective clinics."
    },
    {
        question: "What should I bring with me when I come for an appointment?",
        answer: "You should bring all your medical records, investigation reports, USG previous prescriptions, etc. During the appointment, you need to also provide details of previous operations and allergies, if any."
    },
    {
        question: "Do I need a referral to make an appointment?",
        answer: "Bringing a referral letter is not mandatory. If a physician has referred you to Dr. Vinita, please do bring their prescription/referral letter."
    },
    {
        question: "Do I have to pay now?",
        answer: "No. You need to pay the fees at the time of the visit at the clinic."
    },
    {
        question: "What are your consultation fees?",
        answer: "The consultation fee of Dr. Vinita is INR 700 now. This amount will get revised to Rs. 800 from 1st January 2023. Note that several hospitals/clinics may charge an additional registration fee that's beyond Dr. Vinita's consultation charges. There's no registration charge at her personal clinic, Healing Touch Clinic."
    },
    {
        question: "What types of surgery do you perform?",
        answer: "Dr. Vinita does all types of Gynecological and Obstetric operations. She is specially trained in Infertility treatment, Cesarean, Hysterectomy, Laparoscopy and Ovarian Cystectomy."
    },
    {
        question: "How can I contact you?",
        answer: "You can contact Dr. Vinita using this <a href='/contact' class='text-[#a43971] hover:underline font-semibold'>contact form</a>."
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
                                                    <div
                                                        className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6"
                                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                                    />
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
