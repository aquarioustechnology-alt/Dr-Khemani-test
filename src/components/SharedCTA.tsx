"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { EnquiryModal } from "./EnquiryModal";
import { EnquirySection } from "./EnquirySection";

interface SharedCTAProps {
    title?: string;
    subtitle?: string;
    bgVariant?: "pink" | "white";
    showForm?: boolean;
}

export function SharedCTA({
    title = "Ready to Experience Compassionate Care?",
    subtitle = "Book a consultation with Dr. Vinita Khemani today and take the first step towards better health.",
    bgVariant = "white",
    showForm = false
}: SharedCTAProps) {
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <section className={`py-20 ${bgVariant === "pink" ? "bg-[#fffbfd]" : "bg-white"}`}>
            <div className="container-fluid mx-auto max-w-[1400px] px-6">
                {showForm ? (
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#fdf2f7] rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                        {/* Decorative Background Elements for Form Version */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C21975] rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {title.split('<br />').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < title.split('<br />').length - 1 && <br className="hidden md:block" />}
                                    </span>
                                ))}
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
                                {subtitle}
                            </p>
                            <div className="flex items-center gap-4 text-[#C21975] font-bold text-xl">
                                <div className="w-12 h-12 rounded-full border-2 border-[#C21975] flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Quick Contact</p>
                                    <a href="tel:+919903588155" className="hover:underline">+91 99035 88155</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <EnquirySection />
                        </div>
                    </div>
                ) : (
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>

                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-[60px] opacity-5 pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {title.split('<br />').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < title.split('<br />').length - 1 && <br className="hidden md:block" />}
                                    </span>
                                ))}
                            </h2>
                            <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                >
                                    Book Appointment
                                    <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                        <Calendar className="w-6 h-6" />
                                    </span>
                                </button>
                                <a
                                    href="tel:+919903588155"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all group"
                                >
                                    <Phone className="w-5 h-5 group-hover:animate-bounce" />
                                    +91 99035 88155
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
            {!showForm && <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />}
        </section>
    );
}
