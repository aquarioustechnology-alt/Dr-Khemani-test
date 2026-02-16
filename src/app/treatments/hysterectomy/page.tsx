"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Scissors, Shield, ChevronDown, UserCheck } from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const methods = [
    {
        title: "Total Laparoscopic Hysterectomy (TLH)",
        desc: "The entire uterus is removed using keyhole incisions. This is the preferred method for most patients due to faster recovery (2 days) and minimal pain.",
        icon: Scissors
    },
    {
        title: "Abdominal Hysterectomy",
        desc: "Traditional open surgery through an abdominal incision. Reserved for very large fibroids (like 20+ weeks size) or ovarian cancer where laparoscopy isn't safe.",
        icon: Shield
    },
    {
        title: "Vaginal Hysterectomy (NDVH)",
        desc: "Removal of the uterus through the vagina with no external scars. Often used for uterine prolapse cases (uterus dropping down).",
        icon: UserCheck
    }
];

const faqs = [
    { q: "Will I go into menopause after a hysterectomy?", a: "Not necessarily. If your ovaries are preserved during the surgery, you will not enter menopause immediately. If ovaries are removed (oophorectomy), surgical menopause will begin. Dr. Khemani discusses this detailedly before surgery." },
    { q: "How long is the recovery time?", a: "For laparoscopic hysterectomy (TLH), recovery is quick. Patients are discharged in 1-2 days and return to light activities in a week. Full recovery takes 2-3 weeks. Abdominal hysterectomy takes 4-6 weeks." },
    { q: "Is it a major surgery?", a: "Yes, it is a major procedure, but with modern laparoscopic techniques, the impact on the body is minimized. It is excessively safe when performed by experienced hands." },
    { q: "Will it affect my sex life?", a: "For most women, sex life improves after recovery because they are free from pain and bleeding. We recommend waiting 6-8 weeks after surgery to resume intercourse." },
];

export default function HysterectomyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[70vh] flex items-center bg-[#fdf2f7]">
                        <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4] bg-white/60 backdrop-blur-sm">
                                        <Scissors className="w-4 h-4 text-[#C21975]" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Surgical Solutions</span>
                                    </div>
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-gray-900">Advanced </span> <br />
                                        <span className="italic text-[#C21975]">Hysterectomy.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                        When medication isn&apos;t enough, hysterectomy (uterus removal) can offer permanent relief from fibroids, heavy bleeding, or cancer risk. Dr. Vinita Khemani specializes in minimally invasive removal for faster recovery.
                                    </p>
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(true)}
                                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                                    >
                                        Plan Your Surgery
                                        <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[400px] md:h-[500px]">
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <Image src="/images/Laparoscopic Surgery.jpg" alt="Laparoscopic Hysterectomy" fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methods Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Techniques</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Surgical <span className="text-[#C21975]">Methods</span></h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">We prioritize the least invasive method suitable for your condition.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {methods.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C21975] shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    <m.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{m.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recovery Roadmap Section */}
            <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
                <div className="container-fluid mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Post-Op Care</span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                Path to <span className="text-[#C21975]">Fast Recovery</span>
                            </h2>
                            <div className="relative border-l-2 border-[#C21975]/20 pl-8 ml-4 space-y-12">
                                <div className="relative">
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#C21975] border-4 border-[#F5F5F5]" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1-2: Hospital Stay</h3>
                                    <p className="text-gray-600">Most laparoscopic patients are walking within hours and discharged in 24-48 hours. Pain is managed effectively.</p>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#C21975] border-4 border-[#F5F5F5]" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Week 1: Rest & Light Activity</h3>
                                    <p className="text-gray-600">Rest at home, but short walks are encouraged to aid healing. No heavy lifting.</p>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#C21975] border-4 border-[#F5F5F5]" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Week 2-3: Returning to Routine</h3>
                                    <p className="text-gray-600">Many return to desk jobs. Energy levels improve significantly.</p>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#C21975] border-4 border-[#F5F5F5]" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Week 4-6: Full Recovery</h3>
                                    <p className="text-gray-600">Clearance for exercise and normal activities. Feel the freedom from pain and bleeding!</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="/images/2023-04-23.webp" alt="Patient recovering happily" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-lg font-medium leading-relaxed">&quot;The fear of surgery vanished when I realized how quickly I could get back to my life—pain-free.&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life After Hysterectomy */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center">
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                        Life <span className="text-[#C21975]">After Surgery</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[2rem] bg-pink-50 border border-pink-100">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[#C21975] shadow-sm mb-6">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">No More Bleeding</h3>
                            <p className="text-gray-600">Say goodbye to heavy periods, anemia, and fatigue. Regain your vitality.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-pink-50 border border-pink-100">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[#C21975] shadow-sm mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cancer Prevention</h3>
                            <p className="text-gray-600">Eliminates the risk of uterine, cervical, and (if removed) ovarian cancers.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-pink-50 border border-pink-100">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[#C21975] shadow-sm mb-6">
                                <Scissors className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Pain Relief</h3>
                            <p className="text-gray-600">Permanent relief from fibroids, endometriosis pain, and pelvic pressure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hysterectomy in India - Long-form Content */}
            <section className="py-24 bg-[#fdf8fa]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">Indian Context</span>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Hysterectomy in India: <br /><span className="text-[#C21975]">Separating Facts from Fear</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Hysterectomy remains one of the most commonly performed gynecological surgeries in India, yet it is surrounded by fear and misinformation. Many women delay necessary surgery due to myths about losing femininity, premature aging, or drastic lifestyle changes — none of which are true when the surgery is performed by experienced hands with proper ovarian preservation.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Studies published in the Indian Journal of Medical Research show that approximately 6-8% of Indian women undergo hysterectomy, with fibroids and abnormal uterine bleeding being the most common indications. Tragically, many women in India suffer for years with debilitating symptoms before seeking surgical intervention, often because they were never properly counseled about minimally invasive options.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Dr. Vinita Khemani believes in exhausting all conservative treatments first. Hysterectomy is recommended only when medications, hormonal therapy, and other less invasive procedures have failed — or when there is a clear medical necessity such as malignancy risk. When surgery is indicated, her expertise in Total Laparoscopic Hysterectomy (TLH) ensures patients return to normal life within days, not weeks.
                            </p>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Get a Second Opinion
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image src="/images/hysterectomy-awareness.jpg" alt="Hysterectomy awareness and patient education" fill className="object-cover" />
                            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-xl border border-pink-100 max-w-[280px] hidden md:block">
                                <p className="text-sm font-bold text-gray-900 mb-1">Key Fact</p>
                                <p className="text-xs text-gray-600">Over 90% of hysterectomies can now be performed laparoscopically with discharge in 24-48 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Page CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-[#C21975] to-[#8a2f5e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                <div className="container-fluid mx-auto max-w-[1200px] px-6 text-center relative z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Considering Hysterectomy?</h3>
                    <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">Get an honest assessment from Dr. Khemani. Not every condition requires surgery — and when it does, minimally invasive is the way forward.</p>
                    <button
                        onClick={() => setIsEnquiryModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
                    >
                        Book a Surgical Consultation
                        <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </button>
                </div>
            </section>

            {/* Dr. Khemani's Approach */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#fff0f5] rounded-[2.5rem] p-8 md:p-12">
                        <div className="relative h-[350px] rounded-[2rem] overflow-hidden shadow-xl">
                            <Image src="/images/dr-vinita-about-hero.webp" alt="Dr. Vinita Khemani - Hysterectomy Specialist Kolkata" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-white">Trusted Expertise</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Khemani for Hysterectomy?</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dr. Vinita Khemani has performed hundreds of successful hysterectomies using advanced laparoscopic techniques. Her philosophy is simple: surgery should be the last resort, not the first suggestion. When surgery is needed, her patients benefit from:
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "23+ years of surgical experience",
                                    "Expertise in Total Laparoscopic Hysterectomy (TLH)",
                                    "Ovarian preservation whenever safely possible",
                                    "Hospital affiliations with NICU and ICU backup",
                                    "Comprehensive pre-operative counseling and post-operative care"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] shrink-0" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsEnquiryModalOpen(true)}
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-base transition-all hover:scale-105 shadow-xl bg-gradient-to-r from-[#C21975] to-[#8a2f5e]"
                            >
                                Consult Dr. Khemani
                                <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
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
                                    We answer your worries about surgery.
                                </p>
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Need a Second Opinion?
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

            <SharedCTA title="Is Surgery Right for You?" subtitle="Get a detailed assessment with Dr. Vinita Khemani before deciding." />
            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
            <Footer />
        </main>
    );
}
