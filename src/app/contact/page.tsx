"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Phone, Mail, MapPin, Clock, ArrowRight,
    Calendar, MessageCircle, ChevronDown
} from "lucide-react";

const clinicLocations = [
    {
        id: "healing-touch",
        name: "Healing Touch Clinic",
        address: "59, Bangur Avenue, Block A, (Near Shyam Mandir) Kolkata - 700055",
        phone: "+91 99035 88155",
        image: "/images/WhatsApp Image 2026-01-14 at 12.55.29 PM (1).jpeg",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1!2d88.4!3d22.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangur+Avenue+Block+A+Kolkata!5e0!3m2!1sen!2sin!4v1700000000000",
        timings: [
            { day: "Mon & Thu", time: "3:00 PM – 5:00 PM" },
            { day: "Tue, Wed, Fri, Sat", time: "12:00 PM – 2:00 PM" },
        ],
        primary: true,
    },
    {
        id: "bhagirathi",
        name: "Bhagirathi Neotia Hospital",
        address: "Women & Child Care Centre, New Town Action Area 1D, Kolkata",
        phone: "033-332350000 / 6292149133",
        image: "/images/High-Risk Pregnancy.webp",
        mapUrl: "",
        timings: [{ day: "Wed & Fri", time: "4:00 PM" }],
        primary: false,
    },
    {
        id: "charnock",
        name: "Charnock Hospital",
        address: "VIP Road (Opp. Haldiram), Kolkata",
        phone: "033-40500500 / 9831639000",
        image: "/images/Laparoscopic Surgery.jpg",
        mapUrl: "",
        timings: [{ day: "Thursday", time: "11:00 AM" }],
        primary: false,
    },
    {
        id: "apollo",
        name: "Apollo Clinic",
        address: "Signature Building Nawapara, Chinar Park, Kolkata",
        phone: "033-66263456 / 033-66263402",
        image: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg",
        mapUrl: "",
        timings: [{ day: "Monday, Wed", time: "11:00 AM" }],
        primary: false,
    },
    {
        id: "spandan",
        name: "Spandan Hospital",
        address: "Teghoria, VIP Road (Near Disha Eye Hospital), Kolkata",
        phone: "033-40045511 / 8918314710",
        image: "/images/Pregnancy Care.png",
        mapUrl: "",
        timings: [{ day: "Wed & Sat", time: "5:00 PM" }],
        primary: false,
    },
    {
        id: "ils",
        name: "ILS Dumdum",
        address: "1, Mall Road, near Nager Bazar Flyover, Kolkata",
        phone: "6292260651",
        image: "/images/High-Risk Pregnancy.webp",
        mapUrl: "",
        timings: [{ day: "Thursday", time: "1:00 PM" }],
        primary: false,
    },
];

const contactFaqs = [
    {
        q: "How do I book an appointment with Dr. Vinita Khemani?",
        a: "You can book an appointment by filling the booking form on this page, calling +91-9903588155, or WhatsApp messaging. We confirm all appointments within 2 hours."
    },
    {
        q: "What are the consultation charges?",
        a: "Consultation fees are ₹700 at Healing Touch Clinic and Apollo Clinic. Fees at other hospitals may vary. Please contact us for specific pricing."
    },
    {
        q: "What should I bring for my first visit?",
        a: "Please bring any previous medical reports, prescription lists, current medications, a valid ID proof, and your insurance card if applicable."
    },
    {
        q: "Is Dr. Khemani available for emergency consultations?",
        a: "For emergencies, please visit the nearest hospital ER. For urgent non-emergency concerns, call +91-9903588155 or WhatsApp for quick assistance."
    },
];

export default function ContactPage() {
    const [activeClinic, setActiveClinic] = useState(clinicLocations[0]);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formState, setFormState] = useState({
        name: "", phone: "", email: "", clinic: "", message: "", date: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Appointment request submitted! We'll contact you within 2 hours.");
        setFormState({ name: "", phone: "", email: "", clinic: "", message: "", date: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

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
                                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                    <div
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#d4a5c4]"
                                        style={{ background: 'rgba(255,255,255,0.6)' }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                                        <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Get In Touch</span>
                                    </div>

                                    <h1 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-bold tracking-tight mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Contact &</span> <br />
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                                            Book Appointment.
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                        Reach out to Dr. Vinita Khemani at any of the 6 clinic locations across Kolkata.
                                        We respond to all inquiries within 2 hours.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a
                                            href="tel:+919903588155"
                                            className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                            style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}
                                        >
                                            Call Now
                                            <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                                                <Phone className="w-6 h-6" />
                                            </span>
                                        </a>
                                        <a
                                            href="https://wa.me/919903588155?text=Hello%20Dr.%20Vinita%20Khemani%2C%20I%20would%20like%20to%20book%20an%20appointment."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#C21975]/30 text-[#C21975] bg-white font-semibold text-lg hover:bg-[#f5e6ef] transition-all"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            WhatsApp
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-16 bg-gradient-to-b from-white to-[#fffafc]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.a
                            href="tel:+919903588155"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-[#d4a5c4] transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#f5e6ef] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Phone className="w-7 h-7 text-[#C21975]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                            <p className="text-[#C21975] font-semibold text-lg mb-1">+91 99035 88155</p>
                            <p className="text-sm text-gray-500">Available Mon-Sat, 10am - 8pm</p>
                        </motion.a>

                        <motion.a
                            href="https://wa.me/919903588155"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-green-200 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                            <p className="text-green-600 font-semibold text-lg mb-1">Chat Now</p>
                            <p className="text-sm text-gray-500">Quick response guaranteed</p>
                        </motion.a>

                        <motion.a
                            href="mailto:drvinitakhemani@gmail.com"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-blue-200 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                            <p className="text-blue-600 font-semibold text-lg mb-1">Write to Us</p>
                            <p className="text-sm text-gray-500">drvinitakhemani@gmail.com</p>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Appointment Form + Clinic Locations */}
            <section className="py-24 bg-gradient-to-b from-[#fffafc] to-[#f5f5f5]" id="appointment">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                            Book Appointment
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Schedule Your</span>{" "}
                            <span className="text-[#C21975]">Consultation</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        {/* Booking Form */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="bg-[#730940] p-8 rounded-[2.5rem] border border-[#730940] shadow-2xl relative overflow-hidden sticky top-32">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C21975] rounded-full mix-blend-overlay filter blur-[60px] opacity-20 pointer-events-none" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Book an Appointment</h3>
                                    <p className="text-pink-100 mb-8">Fill in your details and our team will call you within 30 minutes.</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white">Full Name *</label>
                                                <input type="text" name="name" value={formState.name} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400" placeholder="Your Name" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white">Phone Number *</label>
                                                <input type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400" placeholder="+91 00000 00000" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Email Address *</label>
                                            <input type="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400" placeholder="your@email.com" required />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white">Preferred Date</label>
                                                <input type="date" name="date" value={formState.date} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-white">Preferred Clinic *</label>
                                                <div className="relative">
                                                    <select name="clinic" value={formState.clinic} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none text-gray-900" required>
                                                        <option value="">Select Clinic</option>
                                                        {clinicLocations.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Message (Optional)</label>
                                            <textarea rows={3} name="message" value={formState.message} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 resize-none text-gray-900 placeholder-gray-400" placeholder="Describe your concern briefly..." />
                                        </div>

                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                            <p className="text-xs text-pink-100 leading-relaxed">
                                                <span className="font-bold text-white">Note:</span> Don&apos;t forget to mention patient&apos;s age, sex, problem duration, and medical history.
                                            </p>
                                        </div>

                                        <button type="submit" className="w-full bg-white text-[#730940] font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mt-4">
                                            Request Appointment
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Clinic Locations */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            {/* Clinic Tabs */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {clinicLocations.map((clinic) => (
                                    <button
                                        key={clinic.id}
                                        onClick={() => setActiveClinic(clinic)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeClinic.id === clinic.id
                                            ? "bg-[#C21975] text-white shadow-lg scale-105"
                                            : "bg-white text-gray-600 hover:bg-[#f5e6ef] hover:text-[#C21975] border border-gray-200"
                                            }`}
                                    >
                                        {clinic.name}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeClinic.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Clinic Image */}
                                    <div className="relative h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                                        <Image
                                            src={activeClinic.image}
                                            alt={activeClinic.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-8 left-8">
                                            <h3 className="text-white text-3xl font-bold mb-2">{activeClinic.name}</h3>
                                            <div className="flex items-start gap-2 text-white/90 max-w-md">
                                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                                                <p className="text-lg leading-relaxed">{activeClinic.address}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clinic Details Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-[#f5e6ef] flex items-center justify-center">
                                                    <Phone className="w-5 h-5 text-[#C21975]" />
                                                </div>
                                                <span className="font-bold text-gray-900 text-lg">Contact</span>
                                            </div>
                                            <a href={`tel:${activeClinic.phone.split('/')[0].trim()}`} className="inline-flex items-center gap-2 text-gray-600 text-sm font-bold uppercase tracking-wide hover:text-gray-900 transition-colors mb-4">
                                                Call Now <ArrowRight className="w-4 h-4" />
                                            </a>
                                            <div className="bg-[#f5e6ef]/50 rounded-xl p-4 border border-[#d4a5c4]/20">
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Immediate response</p>
                                                <p className="text-xl font-bold text-gray-900">+91 99035 88155</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-3xl bg-[#fff5f5] border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-full bg-[#fde8ef] flex items-center justify-center text-[#C21975]">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <span className="font-bold text-gray-800">Timings</span>
                                            </div>
                                            <ul className="space-y-4">
                                                {activeClinic.timings.map((time, i: number) => (
                                                    <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-pink-100 last:border-0 last:pb-0 gap-2">
                                                        <span className="text-gray-600 font-semibold">{time.day}</span>
                                                        <span className="font-bold text-gray-900 text-lg bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100">{time.time}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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
                                    Contact <br />
                                    <span className="text-[#C21975]">FAQ</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Find answers to the most common questions about booking appointments, clinic timing, and consultation fees.
                                </p>
                                <Link
                                    href="#appointment"
                                    className="inline-flex items-center text-[#C21975] font-semibold hover:text-[#a01560] transition-colors group"
                                >
                                    Still have questions? Contact us
                                    <ChevronDown className="w-5 h-5 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: Accordion */}
                        <div className="lg:col-span-8 space-y-4">
                            {contactFaqs.map((faq, i) => (
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

            {/* CTA */}
            <section className="py-20 bg-[#fffbfd]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Need Immediate Help?
                        </h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                            Our team is available to assist you with booking appointments and answering queries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#appointment"
                                className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                Book Now
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

            {/* Local Business Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Healing Touch Clinic - Dr. Vinita Khemani",
                        "description": "Senior Gynecologist & Obstetrician in Kolkata with 21+ years experience",
                        "telephone": "+91-9903588155",
                        "email": "drvinitakhemani@gmail.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "59, Bangur Avenue, Block A",
                            "addressLocality": "Kolkata",
                            "addressRegion": "West Bengal",
                            "postalCode": "700055",
                            "addressCountry": "IN"
                        },
                        "openingHoursSpecification": [
                            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Thursday"], "opens": "15:00", "closes": "17:00" },
                            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Friday", "Saturday"], "opens": "12:00", "closes": "14:00" }
                        ],
                        "medicalSpecialty": "Obstetrics and Gynecology"
                    })
                }}
            />

            <Footer />
        </main>
    );
}
