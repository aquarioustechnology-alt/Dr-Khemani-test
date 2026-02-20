"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import { Star, MessageCircleHeart, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { EnquiryModal } from "@/components/EnquiryModal";

import { realStories } from "@/data/stories";

export default function StoriesPage() {
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative bg-neutral-50 min-h-screen selection:bg-[#C21975] selection:text-white overflow-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#fce7f3] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#f3e8ff] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto text-center relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C21975]/20 bg-white/50 backdrop-blur-md mb-8 shadow-sm">
                        <MessageCircleHeart className="w-5 h-5 text-[#C21975]" />
                        <span className="text-sm font-semibold tracking-wider text-[#C21975] uppercase">Real Patient Experiences</span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-[64px] xl:text-[72px] font-bold tracking-tight text-neutral-900 leading-[1.2] mb-8">
                        Every Story is a <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#730940]">
                            New Beginning.
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
                        We don&apos;t just treat conditions; we nurture journeys. Discover the heartfelt stories and experiences shared by our resilient patients.
                    </p>
                </motion.div>
            </section>

            {/* Stories Grid */}
            <section className="px-4 md:px-8 pb-32 max-w-[1400px] mx-auto relative z-20">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {realStories.map((story, i) => {
                        const isPink = story.theme === 'pink';
                        const isDark = story.theme === 'dark';
                        const isLight = story.theme === 'light';

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`
                                    break-inside-avoid rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2
                                    ${isPink ? 'bg-gradient-to-br from-[#C21975] to-[#9c145e] text-white shadow-xl shadow-[#C21975]/20' :
                                        isDark ? 'bg-neutral-900 text-white shadow-xl shadow-black/10' :
                                            isLight ? 'bg-pink-50/50 border border-pink-100 text-neutral-900' :
                                                'bg-white border border-neutral-100 text-neutral-900 shadow-lg shadow-neutral-200/50'}
                                `}
                            >
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: story.rating }).map((_, j) => (
                                        <Star key={j} className={`w-5 h-5 fill-current ${isPink || isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                                    ))}
                                </div>
                                <h3 className={`text-2xl font-display font-medium mb-6 leading-snug ${isPink || isDark ? 'text-white' : 'text-neutral-900'}`}>
                                    &ldquo;{story.highlight}&rdquo;
                                </h3>
                                <p className={`text-base leading-relaxed mb-8 ${isPink || isDark ? 'text-white/80' : 'text-neutral-600'}`}>
                                    {story.text}
                                </p>
                                <div className="flex items-center gap-4 pt-6 border-t border-current/10">
                                    {story.image ? (
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
                                            <Image src={story.image} alt={story.name} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0
                                            ${isPink ? 'bg-white/20 text-white' :
                                                isDark ? 'bg-white/10 text-white' :
                                                    'bg-pink-100 text-[#C21975]'}
                                        `}>
                                            {story.name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-bold">{story.name}</p>
                                        <p className={`text-sm ${isPink || isDark ? 'text-white/60' : 'text-neutral-500'}`}>Via {story.source}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Google Review Showcase Section */}
            <section className="py-24 bg-white border-y border-neutral-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C21975_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 mb-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="w-8 h-8 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                            Loved by Patients,<br /> Trusted by Families.
                        </h2>
                        <p className="text-xl text-neutral-600 mb-8">
                            Dr. Vinita Khemani is top-rated for her impeccable care, maintaining a stellar 4.5/5 rating from hundreds of reviews on Google.
                        </p>
                        <a
                            href="https://www.google.com/search?q=Dr.+Vinita+Khemani+Kolkata+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#C21975] transition-colors group"
                        >
                            Read All Google Reviews
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-1/2 aspect-square max-w-md mx-auto md:mx-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 to-white rounded-full blur-3xl" />
                        <div className="absolute inset-4 rounded-[40px] bg-white border border-neutral-100 shadow-2xl p-8 flex flex-col items-center justify-center text-center">
                            <Image src="/images/google-icon.svg" alt="Google" width={64} height={64} className="mb-6 w-16 h-16" />
                            <span className="text-8xl font-display font-bold text-[#C21975] mb-4 tracking-tighter">4.5</span>
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={`w-6 h-6 ${i === 4 ? 'fill-yellow-500/50 text-yellow-500/50' : 'fill-yellow-500 text-yellow-500'}`} />
                                ))}
                            </div>
                            <span className="text-lg text-neutral-500 font-medium">Based on 414 Google Reviews</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Unique Custom CTA */}
            <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#fce7f3] rounded-full blur-3xl opacity-30 -z-10" />
                <div className="max-w-4xl mx-auto py-12">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                        Experience the Care That<br className="hidden md:block" /> Everyone is Talking About.
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
                        Schedule a consultation to discuss your health gracefully and confidently with an expert who genuinely listens.
                    </p>
                    <button onClick={() => setIsEnquiryModalOpen(true)} className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-[#C21975] to-[#730940] hover:scale-105 transition-transform group">
                        <span className="bg-transparent text-white font-medium px-8 py-4 rounded-full flex items-center gap-3">
                            Book an Appointment
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </section>

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <Footer />
        </main>
    );
}
