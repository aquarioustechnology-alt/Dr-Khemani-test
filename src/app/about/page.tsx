"use client";

import { AboutHeroV2 } from "@/app/sections/AboutHeroV2";
import { MissionV2 } from "@/app/sections/MissionV2";
import { AcademicJourney } from "@/app/sections/AcademicJourney";
import { Credentials } from "@/app/sections/Credentials";
import { WhyChooseUs } from "@/app/sections/WhyChooseUs";
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


            {/* FAQ Section with Schema */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                                Common Questions
                            </span>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Frequently</span>{" "}
                                <span className="text-[#C21975]">Asked</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {aboutFaqs.map((faq, i) => (
                                <div key={i} className="rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#C21975] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                                    </button>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#F5F5F5]">
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
