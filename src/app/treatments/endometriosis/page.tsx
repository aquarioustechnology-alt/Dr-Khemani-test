"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle, ArrowUpRight, Flame, ChevronDown, AlertOctagon } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const symptoms = [
    "Severe Menstrual Cramps (Dysmenorrhea)",
    "Deep Intercourse Pain (Dyspareunia)",
    "Chronic Pelvic & Lower Back Pain",
    "Heavy or Irregular Periods",
    "Infertility / Difficulty Conceiving",
    "Painful Bowel Movements or Urination"
];

const faqs = [
    { q: "What is Endometriosis?", a: "Endometriosis is a condition where tissue similar to the lining of the uterus grows outside it—on the ovaries, fallopian tubes, and pelvic lining. This tissue sheds during periods but has no way to exit, causing intense pain, inflammation, and scar tissue." },
    { q: "Can Endometriosis cause infertility?", a: "Yes, about 30-50% of women with endometriosis face fertility issues. The condition can block fallopian tubes, distort pelvic anatomy, or create an inflammatory environment that affects egg quality. However, with proper treatment (like laparoscopic excision or IVF), pregnancy is very much possible." },
    { q: "Is surgery the only option?", a: "Not always. For mild cases or those not planning immediate pregnancy, hormonal medications (pills, injections) are the first line of treatment to suppress pain. However, for deep infiltrating endometriosis or large cysts (Endometriomas), laparoscopic surgery is the gold standard." },
    { q: "Will Endometriosis come back after surgery?", a: "There is a chance of recurrence, but expert excision surgery significantly lowers this risk compared to simple ablation. Dr. Khemani focuses on removing the disease from the root to provide long-term relief." },
];

export default function EndometriosisPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[75vh] flex items-center bg-[#fff0f5]">
                        {/* Background Elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl opacity-60" />

                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Flame className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Endometriosis Care</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Relief from </span> <br />
                                        <span className="italic text-[#C21975]">Chronic Pain.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        Endometriosis is often dismissed as &quot;just a bad period,&quot; but we know it&apos;s a whole-body condition. Dr. Vinita Khemani offers expert diagnosis and advanced laparoscopic excision to restore your quality of life and fertility.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Book Consultation
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </button>
                                </motion.div>
                                <motion.div className="relative h-[450px] md:h-[550px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/2023-04-23.webp" alt="Endometriosis Treatment" fill className="object-cover" />
                                    </div>
                                    {/* Stats Card */}
                                    <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[260px] hidden md:block">
                                        <p className="text-sm font-bold text-gray-900 mb-1">Did you know?</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">1 in 10 women suffer from Endometriosis. It takes an average of 7 years to get diagnosed.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">The Condition</span>
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">What is <span className="text-[#C21975]">Endometriosis?</span></h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                It is a condition where tissue similar to the lining of the uterus grows outside it—on ovaries, fallopian tubes, and pelvic tissue. This tissue bleeds during each period but has nowhere to exit, causing inflammation, scar tissue (adhesions), and severe pain.
                            </p>
                            <h3 className="font-bold text-xl text-gray-900 mb-4 mt-8">Common Symptoms</h3>
                            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                                {symptoms.map((s, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#C21975] shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#fdf2f7] p-10 rounded-[2.5rem] relative overflow-hidden">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Treatment Approach</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Medical Management</h4>
                                        <p className="text-gray-600 border-l-2 border-[#C21975]/30 pl-4 py-1">Hormonal therapies (Progestins, OCPs) to suppress tissue growth and manage pain for mild cases.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#C21975] flex items-center justify-center text-white shadow-lg font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Laparoscopic Excision</h4>
                                        <p className="text-gray-600 border-l-2 border-[#C21975]/30 pl-4 py-1">The Gold Standard. Minimally invasive surgery to thoroughly remove endometrial lesions while preserving fertility.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Fertility Preservation</h4>
                                        <p className="text-gray-600 border-l-2 border-[#C21975]/30 pl-4 py-1">Specialized IVF protocols for women with low ovarian reserve due to endometriomas (chocolate cysts).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Myths vs Facts */}
            <section className="py-24 bg-gray-50">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <h2 className="font-display text-3xl font-bold text-center mb-12">Debunking Myths</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4 text-red-500 font-bold"><AlertOctagon className="w-5 h-5" /> MYTH: Pregnancy cures Endometriosis.</div>
                            <p className="text-gray-600">Pregnancy suppresses symptoms temporarily proper to hormonal changes, but the disease often returns after delivery.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4 text-red-500 font-bold"><AlertOctagon className="w-5 h-5" /> MYTH: Hysterectomy is the only cure.</div>
                            <p className="text-gray-600">Removing the uterus doesn&apos;t remove endometriosis deposits elsewhere in the pelvis. Excision surgery is more effective.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section with Updated Style */}
            <section className="py-24 bg-gradient-to-b from-white to-[#fff0f5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Common <br />
                                    <span className="text-[#C21975]">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Answers to help you understand your condition.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Still have questions? Contact us
                                    <ChevronDown className="w-5 h-5 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Accordion */}
                        <div className="lg:col-span-8 space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`group rounded-2xl border transition-all duration-300 ${openFaq === i
                                        ? "bg-white border-[#C21975]/30 shadow-lg shadow-pink-500/5 ring-1 ring-[#C21975]/20"
                                        : "bg-white/80 border-white/50 shadow-sm hover:border-pink-100 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`text-lg md:text-xl font-semibold transition-colors ${openFaq === i ? "text-[#C21975]" : "text-gray-900"}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${openFaq === i
                                            ? "bg-[#C21975] border-[#C21975] text-white rotate-180"
                                            : "bg-transparent border-gray-200 text-gray-400 group-hover:border-[#C21975] group-hover:text-[#C21975]"
                                            }`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0">
                                            <div className="w-full h-px bg-gray-100 mb-6" />
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SharedCTA title="Stop Living with Pain" subtitle="Get an expert evaluation for Endometriosis today." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
