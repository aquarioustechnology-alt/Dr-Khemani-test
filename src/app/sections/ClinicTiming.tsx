"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const clinics = [
  {
    id: "healing-touch",
    name: "Healing Touch",
    address: "59, Bangur Avenue, Block A, (Near Shyam Mandir) Kolkata - 700055",
    phone: "+91 99035 88155",
    image: "/images/WhatsApp Image 2026-01-14 at 12.55.29 PM (1).jpeg",
    timings: [
      { day: "Mon & Thu", time: "3:00 PM – 5:00 PM" },
      { day: "Tue, Wed, Fri, Sat", time: "12:00 PM – 2:00 PM" },
    ]
  },
  {
    id: "bhagirathi",
    name: "Bhagirathi Neotia",
    address: "Women & Child Care Centre, New Town Action Area 1D, Kolkata",
    phone: "033-332350000 / 6292149133",
    image: "/images/High-Risk Pregnancy.webp",
    timings: [
      { day: "Wed & Fri", time: "4:00 PM" },
    ]
  },
  {
    id: "charnock",
    name: "Charnock",
    address: "VIP Road (Opp. Haldiram), Kolkata",
    phone: "033-40500500 / 9831639000",
    image: "/images/Laparoscopic Surgery.jpg",
    timings: [
      { day: "Thursday", time: "11:00 AM" },
    ]
  },
  {
    id: "apollo",
    name: "Apollo Clinic",
    address: "Signature Building Nawapara, Chinar Park, Kolkata",
    phone: "033-66263456 / 033-66263402",
    image: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg",
    timings: [
      { day: "Monday, Wed", time: "11:00 AM" },
    ]
  },
  {
    id: "spandan",
    name: "Spandan",
    address: "Teghoria, VIP Road (Near Disha Eye Hospital), Kolkata",
    phone: "033-40045511 / 8918314710",
    image: "/images/Pregnancy Care.png",
    timings: [
      { day: "Wed & Sat", time: "5:00 PM" },
    ]
  },
  {
    id: "ils",
    name: "ILS Dumdum",
    address: "1, Mall Road, near Nager Bazar Flyover, Kolkata",
    phone: "6292260651",
    image: "/images/High-Risk Pregnancy.webp",
    timings: [
      { day: "Thursday", time: "1:00 PM" },
    ]
  }
];

export function ClinicTiming() {
  const [activeTab, setActiveTab] = useState(clinics[0].id);
  const activeClinic = clinics.find(c => c.id === activeTab) || clinics[0];

  return (
    <section className="py-24 bg-white">
      <div className="container-fluid mx-auto max-w-[1400px] px-6">

        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#a43971] bg-[#f5e6ef]/50">
            Visit Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Clinic</span> <span className="text-[#a43971] whitespace-nowrap">Locations</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {clinics.map((clinic) => (
            <button
              key={clinic.id}
              onClick={() => setActiveTab(clinic.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === clinic.id
                ? "bg-[#a43971] text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-[#f5e6ef] hover:text-[#a43971]"
                }`}
            >
              {clinic.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div id="contact" className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start scroll-mt-32">

          {/* Left: Enquiry Form (Sticky) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#730940] p-8 rounded-[2.5rem] border border-[#730940] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C21975] rounded-full mix-blend-overlay filter blur-[60px] opacity-20 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Book an Appointment</h3>
                <p className="text-pink-100 mb-8">Fill in your details and we will callback.</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Full Name *</label>
                      <input type="text" className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400" placeholder="Jane Doe" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Phone Number *</label>
                      <input type="tel" className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400" placeholder="+91 00000 00000" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Email Address *</label>
                    <input type="email" className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400" placeholder="your@email.com" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Preferred Date</label>
                      <input type="date" className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 icon-white" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Preferred Clinic *</label>
                      <div className="relative">
                        <select className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none text-gray-900" required>
                          <option value="">Select Clinic</option>
                          {clinics.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Message (Optional)</label>
                    <textarea rows={3} className="w-full px-5 py-3 rounded-xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 resize-none text-gray-900 placeholder-gray-400" placeholder="Brief description of your concern..." />
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <p className="text-xs text-pink-100 leading-relaxed">
                      <span className="font-bold text-white">Note:</span> (Don&apos;t forget to mention the patient&apos;s age, sex, nature of problem, duration of problem, medical history, etc.)
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

          {/* Right: Clinic Details (Animated) */}
          <div className="lg:col-span-7 order-1 lg:order-2 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClinic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <div className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-8">
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

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Contact Info */}
                  <div className="p-6 rounded-3xl bg-[#eaecf0] border border-gray-300 shadow-lg hover:translate-y-[-2px] transition-transform">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 border border-gray-200 shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-900 text-lg">Contact</span>
                    </div>
                    {/* Phone number removed from here */}

                    <a href={`tel:${activeClinic.phone.split('/')[0].trim()}`} className="inline-flex items-center gap-2 text-gray-600 text-sm font-bold uppercase tracking-wide hover:text-gray-900 transition-colors mb-6">
                      Call Now <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Quick Booking */}
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Immediate response</p>
                      <p className="text-2xl font-bold text-gray-900">+91 99035 88155</p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="p-6 rounded-3xl bg-[#fff5f5] border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#fde8ef] flex items-center justify-center text-[#a43971]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-800">Timings</span>
                    </div>

                    <ul className="space-y-4">
                      {activeClinic.timings.map((time, i) => (
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
  );
}
