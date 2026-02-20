"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Phone, MapPin, Clock,
    MessageCircle, Send
} from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "", phone: "", email: "", clinic: "Healing Touch Clinic", message: "", date: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert("Appointment request submitted successfully! Our team will contact you shortly.");
            setIsSubmitting(false);
            setFormState({ name: "", phone: "", email: "", clinic: "Healing Touch Clinic", message: "", date: "" });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <main className="relative bg-[#fdfafb] min-h-screen selection:bg-[#C21975] selection:text-white pb-0">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#fce7f3] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#f5e6ef] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C21975]/20 bg-white/50 backdrop-blur-md mb-8 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">We&apos;re Here For You</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-bold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
                            Let&apos;s start a <br className="hidden md:block" />
                            <span className="italic font-light text-[#C21975]">Conversation.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed font-light">
                            Whether you need to book an appointment, ask a question, or seek urgent care, our dedicated team is just a message or phone call away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+919903588155"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-[#C21975]/30 group"
                                style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}
                            >
                                <Phone className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                                +91 99035 88155
                            </a>
                            <a
                                href="https://wa.me/919903588155"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#C21975]/20 text-[#C21975] bg-[#f5e6ef]/50 hover:bg-[#f5e6ef] hover:border-[#C21975]/30 font-semibold text-lg transition-all group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[4/3] max-h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/doctor_portrait_scrubs_1771254318496.png"
                                alt="Dr. Vinita Khemani Team"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                        {/* Floating Response Card */}
                        <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-xl border border-pink-100 max-w-[240px] animate-float">
                            <div className="flex gap-4 items-center mb-3">
                                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-[#C21975]" />
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-900">Fast Reply</p>
                                    <p className="text-sm text-neutral-500">Within 2 hours</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Interactive Contact Section */}
            <section className="py-24 bg-white border-y border-neutral-100 relative">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Left: Contact Form */}
                        <div>
                            <div className="mb-10">
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Book Your Visit</h2>
                                <p className="text-neutral-600 text-lg">Leave your details and we&apos;ll get back to you to confirm your appointment slot.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="bg-[#fff0f5] p-8 md:p-10 rounded-[32px] border border-pink-100 shadow-sm space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-neutral-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C21975]/20 focus:border-[#C21975] transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-neutral-700 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C21975]/20 focus:border-[#C21975] transition-all"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-neutral-700 ml-1">Email <span className="font-normal text-neutral-400">(Optional)</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-2xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C21975]/20 focus:border-[#C21975] transition-all"
                                            placeholder="jane@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-neutral-700 ml-1">Preferred Clinic</label>
                                        <div className="relative">
                                            <select
                                                name="clinic"
                                                value={formState.clinic}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-2xl bg-white border border-neutral-200 text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#C21975]/20 focus:border-[#C21975] transition-all"
                                            >
                                                <option value="Healing Touch Clinic">Healing Touch Clinic</option>
                                                <option value="Bhagirathi Neotia Hospital">Bhagirathi Neotia Hospital</option>
                                                <option value="Charnock Hospital">Charnock Hospital</option>
                                                <option value="Apollo Clinic">Apollo Clinic</option>
                                                <option value="Spandan Hospital">Spandan Hospital</option>
                                                <option value="ILS Dumdum">ILS Dumdum</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-neutral-700 ml-1">Message / Reason for Visit</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-5 py-4 rounded-2xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C21975]/20 focus:border-[#C21975] transition-all resize-none"
                                        placeholder="Briefly describe your health concern..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-neutral-900 text-white font-semibold py-4 rounded-2xl hover:bg-[#C21975] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending Request..." : "Request Appointment"}
                                    {!isSubmitting && <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                                </button>
                                <p className="text-xs text-center text-neutral-500">Your information is kept strictly confidential.</p>
                            </form>
                        </div>

                        {/* Right: Primary Clinic Info */}
                        <div className="flex flex-col h-full">
                            <div className="mb-10">
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Primary Clinic</h2>
                                <p className="text-neutral-600 text-lg">Dr. Khemani&apos;s primary consultation chamber.</p>
                            </div>

                            <div className="flex-grow bg-white rounded-[32px] border border-neutral-100 shadow-xl shadow-neutral-200/50 overflow-hidden flex flex-col">
                                {/* Map */}
                                <div className="h-64 w-full bg-neutral-100 relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.852431713589!2d88.4026369!3d22.6186831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02798e1fae2be5%3A0xe131fc80c619b0ce!2sBangur%20Avenue%20Block%20A%2C%20Block%20A%2C%20Bangur%20Avenue%2C%20Kolkata%2C%20West%20Bengal%20700055!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 grayscale contrast-125 opacity-80"
                                    ></iframe>
                                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-neutral-900/10" />
                                </div>

                                <div className="p-8 md:p-10 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-neutral-900">Healing Touch Clinic</h3>
                                            <p className="text-neutral-500 mt-1">Bangur Avenue, Block A</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-[#C21975]" />
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-grow">
                                        <div className="flex gap-4">
                                            <div className="w-5 h-5 shrink-0 mt-1">
                                                <MapPin className="w-full h-full text-neutral-400" />
                                            </div>
                                            <p className="text-neutral-700 leading-relaxed">
                                                59, Bangur Avenue, Block A<br />
                                                (Near Shyam Mandir)<br />
                                                Kolkata - 700055
                                            </p>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-5 h-5 shrink-0 mt-1">
                                                <Clock className="w-full h-full text-neutral-400" />
                                            </div>
                                            <div className="text-neutral-700 w-full space-y-2">
                                                <div className="flex justify-between border-b border-neutral-100 pb-2">
                                                    <span className="font-medium shrink-0">Mon & Thu:</span>
                                                    <span>3:00 PM – 5:00 PM</span>
                                                </div>
                                                <div className="flex justify-between pb-2">
                                                    <span className="font-medium shrink-0">Tue, Wed, Fri, Sat:</span>
                                                    <span>12:00 PM – 2:00 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 mt-4 border-t border-neutral-100 flex gap-4">
                                        <a href="tel:033257444" className="flex-1 text-center bg-neutral-100 font-semibold text-neutral-700 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                                            033-257444
                                        </a>
                                        <a href="tel:+919903588155" className="flex-1 text-center bg-[#C21975] font-semibold text-white py-3 rounded-xl hover:bg-[#9c145e] transition-colors">
                                            +91 99035 88155
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Hospital Attachments / Secondary Clinics */}
            <section className="py-24 bg-[#fdfafb] border-b border-neutral-100">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-semibold text-neutral-600 mb-6">
                            Other Locations
                        </span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
                            Hospital Attachments
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Dr. Khemani is also available for consultations and surgeries at these leading hospitals in Kolkata.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Bhagirathi Neotia Hospital",
                                desc: "Women & Child Care Centre",
                                area: "New Town",
                                timings: "Wed & Fri: 4:00 PM",
                                phone: "033-332350000"
                            },
                            {
                                name: "Charnock Hospital",
                                desc: "Renowned Multi-Speciality",
                                area: "VIP Road",
                                timings: "Thursday: 11:00 AM",
                                phone: "033-40500500"
                            },
                            {
                                name: "Apollo Clinic",
                                desc: "Premium Medical Care",
                                area: "Chinar Park",
                                timings: "Mon, Wed: 11:00 AM",
                                phone: "033-66263456"
                            },
                            {
                                name: "Spandan Hospital",
                                desc: "Advanced Healthcare",
                                area: "Teghoria, VIP Road",
                                timings: "Wed & Sat: 5:00 PM",
                                phone: "033-40045511"
                            },
                            {
                                name: "ILS Dumdum",
                                desc: "Multi-Speciality Centre",
                                area: "Dumdum",
                                timings: "Thursday: 1:00 PM",
                                phone: "6292260651"
                            }
                        ].map((hospital, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-neutral-900 mb-1">{hospital.name}</h3>
                                <p className="text-sm font-medium text-[#C21975] mb-5">{hospital.desc}</p>

                                <div className="space-y-3 mt-auto">
                                    <div className="flex gap-3 text-neutral-600">
                                        <MapPin className="w-5 h-5 shrink-0 text-neutral-400" />
                                        <span className="text-sm">{hospital.area}</span>
                                    </div>
                                    <div className="flex gap-3 text-neutral-600">
                                        <Clock className="w-5 h-5 shrink-0 text-neutral-400" />
                                        <span className="text-sm font-medium bg-neutral-50 px-2 py-1 rounded-md">{hospital.timings}</span>
                                    </div>
                                    <div className="flex gap-3 mt-4 pt-4 border-t border-neutral-100">
                                        <a href={`tel:${hospital.phone.split(' ')[0]}`} className="text-sm font-bold text-neutral-800 hover:text-[#C21975] flex items-center gap-2 transition-colors">
                                            <Phone className="w-4 h-4" /> Call to Book
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
