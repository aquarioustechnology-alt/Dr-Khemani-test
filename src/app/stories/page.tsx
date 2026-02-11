"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Star, ArrowUpRight, Calendar, Quote, Users, Baby, Heart
} from "lucide-react";

const patientStories = [
    {
        id: 1,
        name: "Sharmila Sinha",
        role: "Mother of a baby girl",
        location: "Kolkata",
        condition: "High-risk pregnancy",
        outcome: "Healthy baby girl – delivered on Mother's Day",
        rating: 5,
        text: "Dr. Vinita Khemani is an angel for us. For her we were blessed with our little princess on Mother's Day. I came to mam when my 3rd month was running with excessive vomiting. Her care and expertise made all the difference. She monitored every detail and made sure both me and my baby were safe throughout.",
        image: "/images/avatars/indian-woman-1.jpg",
        featured: true,
    },
    {
        id: 2,
        name: "Jayosree Saha",
        role: "Mother of a baby boy",
        location: "Kolkata",
        condition: "Normal delivery",
        outcome: "Healthy baby boy – born September 10",
        rating: 5,
        text: "I had a son on 10 September from Dr. Vinita Khemani Mam. Mam is very good doctor and very careful. I'm very satisfied. Her behavior is very good and she is very helpful. Thank you mam, thank you so much! She made sure I had a normal delivery and took extra care during the entire pregnancy.",
        image: "/images/avatars/indian-woman-2.jpg",
        featured: true,
    },
    {
        id: 3,
        name: "Shanta Ghatak",
        role: "Patient – Hysterectomy",
        location: "Kolkata",
        condition: "Hysterectomy",
        outcome: "Pain-free life after years of discomfort",
        rating: 5,
        text: "She is not just a gynaecologist but a manifestation of the Almighty. She performed my hysterectomy a few days ago and freed me from my years of pain and discomfort. I am highly satisfied. The laparoscopic procedure meant minimal pain and I was back to my daily routine within a week.",
        image: "/images/avatars/indian-woman-1.jpg",
        featured: false,
    },
    {
        id: 4,
        name: "Khushboo Khemka",
        role: "Mother",
        location: "Kolkata",
        condition: "Pregnancy care",
        outcome: "Healthy delivery with post-delivery support",
        rating: 5,
        text: "Amazing doctor, very patient and friendly. Always available to clear any minor doubts and she carries a very pleasant and positive feeling. Every time she came to meet me in the hospital post delivery, I felt reassured. Dr. Khemani goes above and beyond for her patients.",
        image: "/images/avatars/indian-woman-2.jpg",
        featured: true,
    },
    {
        id: 5,
        name: "Soma Saha",
        role: "Patient – Fertility Treatment",
        location: "Kolkata",
        condition: "Fertility treatment & period problems",
        outcome: "Successful pregnancy and delivery",
        rating: 5,
        text: "I started seeing Maam because of period problems and later on she also treated me for fertility. Just 2 weeks back I delivered. Before that, I changed two doctors but nobody gripped the issue like Dr. Khemani. She understood my situation and provided a comprehensive treatment plan.",
        image: "/images/avatars/indian-woman-1.jpg",
        featured: false,
    },
    {
        id: 6,
        name: "Priyanka Das",
        role: "Mother – High Risk Pregnancy",
        location: "Kolkata",
        condition: "Gestational diabetes + preeclampsia",
        outcome: "Healthy baby delivered safely",
        rating: 5,
        text: "I was diagnosed with gestational diabetes and preeclampsia during my pregnancy. Dr. Khemani managed my case with exceptional skill. She was available 24/7 for any emergency and monitored me closely throughout. Thanks to her expertise, both my baby and I are healthy today.",
        image: "/images/avatars/indian-woman-2.jpg",
        featured: false,
    },
    {
        id: 7,
        name: "Suchitra Mukherjee",
        role: "Patient – PCOS Treatment",
        location: "Salt Lake, Kolkata",
        condition: "PCOS / irregular periods",
        outcome: "Regular cycles restored within 4 months",
        rating: 5,
        text: "Dr. Khemani treated my PCOS with a very systematic approach. Instead of just prescribing medicines, she explained the lifestyle changes needed, gave me a proper diet plan, and followed up regularly. Within 4 months, my cycles became regular for the first time in years.",
        image: "/images/avatars/indian-woman-1.jpg",
        featured: false,
    },
    {
        id: 8,
        name: "Rina Chatterjee",
        role: "Patient – Laparoscopic Surgery",
        location: "Dumdum, Kolkata",
        condition: "Ovarian cyst removal",
        outcome: "Same-day discharge, minimal scarring",
        rating: 5,
        text: "I was terrified of surgery but Dr. Khemani explained the entire procedure so calmly. The laparoscopic surgery was done perfectly – only tiny marks, hardly any pain, and I went home the same day. She is truly skilled and compassionate. I recommend her to everyone.",
        image: "/images/avatars/indian-woman-2.jpg",
        featured: false,
    },
];

const statsData = [
    { icon: Users, value: "10,000+", label: "Patients Treated" },
    { icon: Star, value: "4.9★", label: "Google Rating" },
    { icon: Baby, value: "2,348+", label: "Successful Deliveries" },
    { icon: Heart, value: "99%", label: "Patient Satisfaction" },
];

export default function StoriesPage() {
    const featuredStories = patientStories.filter(s => s.featured);
    const moreStories = patientStories.filter(s => !s.featured);

    return (
        <main className="relative">
            <Navigation />

            {/* Hero */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div
                        className="relative rounded-[3rem] overflow-hidden py-16 md:py-24 flex items-center"
                        style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}
                    >
                        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
                            <div className="max-w-4xl mx-auto text-center">
                                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                                    <div
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4]"
                                        style={{ background: 'rgba(255,255,255,0.6)' }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Patient Stories</span>
                                    </div>

                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Real Stories of</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                                            Hope & Healing.
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                        Hear from patients who have trusted Dr. Vinita Khemani for their most important health decisions.
                                        10,000+ women have found confidence, care, and compassion at Healing Touch Clinic.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {statsData.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center group hover:-translate-y-2 transition-transform duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-7 h-7 text-[#C21975]" />
                                </div>
                                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Stories */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Featured Testimonials
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">What Patients</span>{" "}
                            <span className="text-[#C21975]">Say</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {featuredStories.map((story, i) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 flex flex-col"
                            >
                                {/* Quote Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-6">
                                    <Quote className="w-6 h-6 text-[#C21975]" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: story.rating }).map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">&ldquo;{story.text}&rdquo;</p>

                                {/* Condition & Outcome */}
                                <div className="mb-6 p-4 rounded-xl bg-[#f5e6ef]/30 border border-[#d4a5c4]/20">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Condition</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Outcome</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm font-semibold text-gray-800">{story.condition}</span>
                                        <span className="text-sm font-semibold text-[#22C55E]">{story.outcome.split('–')[0].trim()}</span>
                                    </div>
                                </div>

                                {/* Patient Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                                        <Image src={story.image} alt={story.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{story.name}</p>
                                        <p className="text-sm text-gray-500">{story.role} • {story.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Stories */}
            <section className="py-24 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            More Reviews
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Trusted by</span>{" "}
                            <span className="text-[#C21975]">Thousands</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {moreStories.map((story, i) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-500"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-200 shrink-0">
                                        <Image src={story.image} alt={story.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{story.name}</p>
                                        <p className="text-sm text-gray-500">{story.role}</p>
                                        <div className="flex gap-0.5 mt-1">
                                            {Array.from({ length: story.rating }).map((_, j) => (
                                                <Star key={j} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed italic mb-4">&ldquo;{story.text}&rdquo;</p>
                                <div className="flex gap-3">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#f5e6ef] text-[#C21975]">{story.condition}</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">{story.outcome.split('–')[0].trim()}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Google Reviews CTA */}
            <section className="py-16 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-[#FFB800] text-[#FFB800]" />
                                ))}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">4.9 out of 5 on Google</h3>
                            <p className="text-gray-600">Based on 300+ verified patient reviews</p>
                        </div>
                        <a
                            href="https://www.google.com/search?q=Dr.+Vinita+Khemani+Kolkata+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 text-lg font-semibold hover:bg-[#C21975] hover:text-white hover:border-[#C21975] transition-all shadow-lg"
                        >
                            See All Google Reviews
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Your Story Starts Here
                        </h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                            Join 10,000+ women who have trusted Dr. Vinita Khemani with their health.
                            Book your consultation today.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            Book Appointment
                            <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                                <Calendar className="w-6 h-6" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Review Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Physician",
                        "name": "Dr. Vinita Khemani",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "300",
                            "bestRating": "5"
                        },
                        "review": patientStories.slice(0, 3).map(story => ({
                            "@type": "Review",
                            "author": { "@type": "Person", "name": story.name },
                            "reviewRating": { "@type": "Rating", "ratingValue": story.rating },
                            "reviewBody": story.text
                        }))
                    })
                }}
            />

            <Footer />
        </main>
    );
}
