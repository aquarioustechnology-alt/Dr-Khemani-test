"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useState, useEffect } from "react";
import {
    MapPin, Phone, Clock, ArrowRight, Navigation2
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
        logo: "/images/neotia-logo.svg",
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
        logo: "/images/charnock-hospital-logo.webp",
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
        logo: "/images/apollo-clinic-logo.webp",
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
        logo: "/images/spandan-hospital-logo.jpg",
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
        logo: "/images/images.png",
    },
];

export default function ClinicSchedulePage() {
    const [activeTab, setActiveTab] = useState(clinics[0].id);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
    const [currentTimingIndex, setCurrentTimingIndex] = useState(0);

    const activeClinic = clinics.find(c => c.id === activeTab) || clinics[0];

    useEffect(() => {
        setCurrentTimingIndex(0);
    }, [activeTab]);

    useEffect(() => {
        if (activeClinic.id === 'healing-touch' && activeClinic.timings.length > 1) {
            const timer = setInterval(() => {
                setCurrentTimingIndex((prev) => (prev + 1) % activeClinic.timings.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [activeClinic]);

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
                            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                {/* Image */}
                                <div className="lg:col-span-7 xl:col-span-8 relative h-[350px] md:h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl">
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
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                            {activeClinic.logo && (
                                                <div className="bg-white/95 p-2 rounded-xl shadow-md backdrop-blur-sm shrink-0 self-start sm:self-center">
                                                    <div className="relative h-10 w-28">
                                                        <Image src={activeClinic.logo!} alt={`${activeClinic.name} Logo`} fill className="object-contain object-left mix-blend-multiply" />
                                                    </div>
                                                </div>
                                            )}
                                            <h3 className="text-white text-3xl font-bold">{activeClinic.name}</h3>
                                        </div>
                                        <div className="flex items-start gap-2 text-white/90 max-w-md">
                                            <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                                            <p className="text-lg leading-relaxed">{activeClinic.address}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 w-full">
                                    {/* Timings */}
                                    <div className="p-6 md:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#f5e6ef] flex items-center justify-center">
                                                <Clock className="w-6 h-6 text-[#C21975]" />
                                            </div>
                                            <div>
                                                <h3 className="text-[1.15rem] font-bold text-gray-900 leading-tight">Consultation Timings</h3>
                                                <p className="text-sm text-gray-500">{activeClinic.specialNote}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            {activeClinic.id === 'healing-touch' ? (
                                                <div className="flex flex-col h-full rounded-xl">
                                                    <div className="min-h-[85px] sm:min-h-[75px]">
                                                        <AnimatePresence mode="wait">
                                                            <motion.div
                                                                key={currentTimingIndex}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl bg-[#f5e6ef]/30 border border-[#d4a5c4]/20 gap-3"
                                                            >
                                                                <span className="text-gray-700 font-semibold text-sm">{activeClinic.timings[currentTimingIndex].day}</span>
                                                                <span className="font-bold text-gray-900 text-[15px] bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-center sm:text-right w-fit sm:w-auto">
                                                                    {activeClinic.timings[currentTimingIndex].time}
                                                                </span>
                                                            </motion.div>
                                                        </AnimatePresence>
                                                    </div>
                                                    <div className="flex justify-center gap-2 mt-4 pb-2">
                                                        {activeClinic.timings.map((_, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => setCurrentTimingIndex(i)}
                                                                className={`h-2 rounded-full transition-all duration-300 ${i === currentTimingIndex ? 'bg-[#C21975] w-6' : 'bg-[#d4a5c4]/40 w-2 hover:bg-[#d4a5c4]'}`}
                                                                aria-label={`Go to slide ${i + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                activeClinic.timings.map((time, i) => (
                                                    <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl bg-[#f5e6ef]/30 border border-[#d4a5c4]/20 gap-2">
                                                        <span className="text-gray-700 font-semibold text-sm">{time.day}</span>
                                                        <span className="font-bold text-gray-900 text-[15px] bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-center sm:text-right w-fit sm:w-auto">{time.time}</span>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="p-6 md:p-8 rounded-[2rem] bg-[#eaecf0] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-white/60 border border-gray-200 flex items-center justify-center text-gray-900 shadow-sm">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-gray-900 text-xl">Contact</span>
                                        </div>

                                        <div className="flex flex-col gap-4 mb-6">
                                            <a href={`tel:${activeClinic.phone.split('/')[0].trim()}`} className="inline-flex items-center gap-2 text-gray-600 text-sm font-bold uppercase tracking-wider hover:text-gray-900 transition-colors w-fit">
                                                Call Now <ArrowRight className="w-4 h-4" />
                                            </a>
                                            <a href={activeClinic.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C21975] text-sm font-bold uppercase tracking-wider hover:text-[#8a2f5e] transition-colors w-fit">
                                                Get Directions <Navigation2 className="w-4 h-4" />
                                            </a>
                                        </div>

                                        {/* Quick Booking */}
                                        <div className="bg-[#eaecf0]/60 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm">
                                            <p className="text-[11px] md:text-[12px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">Immediate response</p>
                                            <p className="text-2xl md:text-[28px] font-bold text-gray-900 leading-none">+91 99035 88155</p>
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
