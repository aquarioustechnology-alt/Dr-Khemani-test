"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useState } from "react";
import {
    MapPin, Phone, Clock, ArrowUpRight, Navigation2
} from "lucide-react";
import { SharedCTA } from "@/components/SharedCTA";
import { EnquiryModal } from "@/components/EnquiryModal";

const clinics = [
    {
        id: "healing-touch",
        name: "Healing Touch Clinic",
        type: "Primary Clinic",
        address: "59, Bangur Avenue, Block A, (Near Shyam Mandir) Kolkata - 700055",
        phone: "+91 99035 88155",
        image: "/images/WhatsApp Image 2026-01-14 at 12.55.29 PM (1).jpeg",
        mapUrl: "https://maps.google.com/?q=Healing+Touch+Bangur+Avenue+Kolkata",
        timings: [
            { day: "Monday & Thursday", time: "3:00 PM – 5:00 PM" },
            { day: "Tuesday, Wednesday, Friday, Saturday", time: "12:00 PM – 2:00 PM" },
            { day: "Sunday", time: "Closed" },
        ],
        specialNote: "Walk-in consultations accepted",
        color: "#C21975",
    },
    {
        id: "bhagirathi",
        name: "Bhagirathi Neotia Hospital",
        type: "Consultant",
        address: "Women & Child Care Centre, New Town Action Area 1D, Kolkata",
        phone: "033-332350000 / 6292149133",
        image: "/images/High-Risk Pregnancy.webp",
        mapUrl: "https://maps.google.com/?q=Bhagirathi+Neotia+New+Town+Kolkata",
        timings: [
            { day: "Wednesday & Friday", time: "4:00 PM" },
        ],
        specialNote: "Appointment required",
        color: "#a43971",
    },
    {
        id: "charnock",
        name: "Charnock Hospital",
        type: "Consultant",
        address: "VIP Road (Opp. Haldiram), Kolkata",
        phone: "033-40500500 / 9831639000",
        image: "/images/Laparoscopic Surgery.jpg",
        mapUrl: "https://maps.google.com/?q=Charnock+Hospital+VIP+Road+Kolkata",
        timings: [
            { day: "Thursday", time: "11:00 AM" },
        ],
        specialNote: "Appointment required",
        color: "#8a2f5e",
    },
    {
        id: "apollo",
        name: "Apollo Clinic",
        type: "Consultant",
        address: "Signature Building Nawapara, Chinar Park, Kolkata",
        phone: "033-66263456 / 033-66263402",
        image: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg",
        mapUrl: "https://maps.google.com/?q=Apollo+Clinic+Chinar+Park+Kolkata",
        timings: [
            { day: "Monday & Wednesday", time: "11:00 AM" },
        ],
        specialNote: "Appointment required",
        color: "#b85a8a",
    },
    {
        id: "spandan",
        name: "Spandan Hospital",
        type: "Consultant",
        address: "Teghoria, VIP Road (Near Disha Eye Hospital), Kolkata",
        phone: "033-40045511 / 8918314710",
        image: "/images/Pregnancy Care.png",
        mapUrl: "https://maps.google.com/?q=Spandan+Hospital+Teghoria+Kolkata",
        timings: [
            { day: "Wednesday & Saturday", time: "5:00 PM" },
        ],
        specialNote: "Appointment required",
        color: "#c97ba3",
    },
    {
        id: "ils",
        name: "ILS Dumdum",
        type: "Consultant",
        address: "1, Mall Road, near Nager Bazar Flyover, Kolkata",
        phone: "6292260651",
        image: "/images/High-Risk Pregnancy.webp",
        mapUrl: "https://maps.google.com/?q=ILS+Hospital+Dumdum+Kolkata",
        timings: [
            { day: "Thursday", time: "1:00 PM" },
        ],
        specialNote: "Appointment required",
        color: "#d4a5c4",
    },
];

export default function ClinicSchedulePage() {
    const [activeTab, setActiveTab] = useState(clinics[0].id);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
    const activeClinic = clinics.find(c => c.id === activeTab) || clinics[0];

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
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4]" style={{ background: 'rgba(255,255,255,0.6)' }}>
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Visit Us</span>
                                    </div>

                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">6 Clinic Locations</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                                            Across Kolkata.
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                        Find Dr. Vinita Khemani at the most convenient location near you.
                                        Check clinic timings and book your appointment today.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Clinics Overview Cards */}
            <section className="py-20 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Quick</span>{" "}
                            <span className="text-[#C21975]">Schedule Overview</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clinics.map((clinic, i) => (
                            <motion.div
                                key={clinic.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => {
                                    setActiveTab(clinic.id);
                                    document.getElementById("clinic-detail")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`p-6 rounded-[1.5rem] border cursor-pointer hover:-translate-y-2 transition-all duration-500 ${activeTab === clinic.id
                                    ? "bg-[#fff5f5] border-[#C21975]/30 shadow-lg"
                                    : "bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ background: clinic.color }}>
                                        {clinic.type}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{clinic.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{clinic.address}</p>
                                <div className="space-y-2">
                                    {clinic.timings.map((t, j) => (
                                        <div key={j} className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">{t.day}</span>
                                            <span className="font-bold text-gray-900 bg-[#f5e6ef]/50 px-3 py-1 rounded-md">{t.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Clinic View */}
            <section id="clinic-detail" className="py-24 bg-[#F5F5F5] scroll-mt-24">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Clinic Details
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Select a</span>{" "}
                            <span className="text-[#C21975]">Location</span>
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {clinics.map((clinic) => (
                            <button
                                key={clinic.id}
                                onClick={() => setActiveTab(clinic.id)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === clinic.id
                                    ? "bg-[#C21975] text-white shadow-lg scale-105"
                                    : "bg-white text-gray-600 hover:bg-[#f5e6ef] hover:text-[#C21975] border border-gray-200"
                                    }`}
                            >
                                {clinic.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Clinic Detail */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeClinic.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Image */}
                                <div className="relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={activeClinic.image}
                                        alt={activeClinic.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-8">
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#C21975] mb-3">
                                            {activeClinic.type}
                                        </span>
                                        <h3 className="text-white text-3xl font-bold mb-2">{activeClinic.name}</h3>
                                        <div className="flex items-start gap-2 text-white/90 max-w-md">
                                            <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                                            <p className="text-lg leading-relaxed">{activeClinic.address}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-6">
                                    {/* Timings */}
                                    <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-[#f5e6ef] flex items-center justify-center">
                                                <Clock className="w-6 h-6 text-[#C21975]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">Consultation Timings</h3>
                                                <p className="text-sm text-gray-500">{activeClinic.specialNote}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            {activeClinic.timings.map((time, i) => (
                                                <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-[#f5e6ef]/30 border border-[#d4a5c4]/20">
                                                    <span className="text-gray-700 font-semibold">{time.day}</span>
                                                    <span className="font-bold text-gray-900 text-lg bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">{time.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-[#f5e6ef] flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-[#C21975]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Contact</h3>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900 mb-4">{activeClinic.phone}</p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href={`tel:${activeClinic.phone.split('/')[0].trim()}`}
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C21975] text-white font-semibold hover:bg-[#8a2f5e] transition-colors"
                                            >
                                                <Phone className="w-4 h-4" /> Call Now
                                            </a>
                                            <a
                                                href={activeClinic.mapUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                                            >
                                                <Navigation2 className="w-4 h-4" /> Get Directions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Shared CTA Section */}
            <SharedCTA title="Visit Us Today" subtitle="Choose the nearest clinic and book your appointment with Dr. Vinita Khemani." />

            <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />

            <Footer />
        </main>
    );
}
