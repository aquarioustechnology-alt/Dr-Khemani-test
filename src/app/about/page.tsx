"use client";

import { AboutHeroV2 } from "@/app/sections/AboutHeroV2";
import { MissionV2 } from "@/app/sections/MissionV2";
import { AcademicJourney } from "@/app/sections/AcademicJourney";
import { Credentials } from "@/app/sections/Credentials";
import { WhyChooseUs } from "@/app/sections/WhyChooseUs";
import { HospitalAffiliations } from "@/app/sections/HospitalAffiliations";
import { Footer } from "@/app/sections/Footer";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
    ChevronDown, Calendar
} from "lucide-react";



const aboutFaqs = [
    {
        q: "Who is the best gynecologist in Kolkata?",
        a: "Dr. Vinita Khemani is widely regarded as one of the best gynecologists in Kolkata with 21+ years of experience, 10,000+ patients treated, and a 4.9★ patient satisfaction rating. She holds a DGO in Obstetrics & Gynaecology and life memberships in FOGSI and BOGS."
    },
    {
        q: "What are Dr. Vinita Khemani's qualifications?",
        a: "Dr. Vinita Khemani holds MBBS (Honors) from B.S. Medical College Bankura, DGO (Diploma in Obs & Gynae) from NRS Medical College Kolkata, and FOGSI certification in Infertility. She is also certified in advanced laparoscopic surgery."
    },
    {
        q: "Which hospitals is Dr. Vinita Khemani associated with?",
        a: "Dr. Vinita Khemani practices at 6 locations across Kolkata: Healing Touch Clinic (Bangur Avenue), Bhagirathi Neotia Hospital (New Town), Charnock Hospital (VIP Road), Apollo Clinic (Chinar Park), Spandan Hospital (Teghoria), and ILS Hospital (Dumdum)."
    },
    {
        q: "How many years of experience does Dr. Vinita Khemani have?",
        a: "Dr. Vinita Khemani has over 21 years of clinical experience in Obstetrics and Gynecology, during which she has treated over 10,000 patients, performed 2,348+ successful deliveries, and completed 583+ laparoscopic surgeries."
    },
    {
        q: "What does Dr. Vinita Khemani specialize in?",
        a: "Dr. Vinita Khemani specializes in pregnancy care (including high-risk pregnancies), painless delivery, laparoscopic surgery, fertility treatment (IUI/IVF coordination), PCOS/PCOD management, and menopause care."
    },
];

export default function AboutPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="relative">
            <Navigation />

            <AboutHeroV2 />

            <div className="mt-12 lg:mt-0">
                <MissionV2 />
            </div>

            <AcademicJourney />

            {/* Credentials Section */}
            <Credentials />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Hospital Affiliations */}
            <HospitalAffiliations />


            {/* FAQ Section with Schema */}
            <section className="py-24 bg-gradient-to-b from-white to-[#fff0f5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32 text-left">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                    Common Questions
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6 pb-1">
                                    Frequently <br />
                                    <span className="text-[#C21975]">Asked</span> Questions
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Find answers to the most common questions about our services, treatments, and clinic policies.
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Still have questions? Contact us
                                    <ChevronDown className="w-5 h-5 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: Accordion */}
                        <div className="lg:col-span-8 space-y-4">
                            {aboutFaqs.map((faq, i) => (
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

            {/* CTA Section */}
            <section className="py-20 bg-[#fffbfd]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Experience <br className="hidden md:block" />Compassionate Care?
                        </h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                            Book a consultation with Dr. Vinita Khemani today and take the first step towards better health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                Book Appointment
                                <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <Calendar className="w-6 h-6" />
                                </span>
                            </Link>
                            <a
                                href="tel:+919903588155"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                            >
                                Call: +91 99035 88155
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": aboutFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />

            <Footer />
        </main>
    );
}
