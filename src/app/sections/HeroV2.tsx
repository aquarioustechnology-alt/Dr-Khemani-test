"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, Users, Play, ArrowUpRight } from "lucide-react";


const heroImages = [
  "/images/Laparoscopic Surgery.jpg",
  "/images/High-Risk Pregnancy.webp",
  "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg",
];

export function HeroV2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
      <div className="mx-auto w-[95%] md:w-[95%] px-4 md:px-0">
        {/* Main Rounded Container */}
        <div
          className="relative rounded-[3rem] overflow-hidden min-h-[85vh] flex items-center"
          style={{ background: 'linear-gradient(135deg, #fadce9 0%, #fff 100%)' }}
        >


          <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-[#d4a5c4]"
                  style={{ background: 'rgba(255,255,255,0.6)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#C21975] animate-pulse" />
                  <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">I am Dr. Vinita Khemani</span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-[68px] leading-[1.1] font-medium animate-text-gradient mb-8 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Your Health,</span> <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                    Our Priority.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                  Experience world-class gynecological care with a personal touch. Over 21 years of dedicated service to women&apos;s wellness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-14">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}
                  >
                    Book Consultation
                    <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="w-6 h-6" />
                    </span>
                  </Link>

                  <button className="inline-flex items-center gap-3 pl-2 pr-8 py-1 rounded-full bg-white text-gray-700 font-semibold text-lg border border-gray-200 hover:border-[#C21975] hover:text-[#C21975] transition-all group">
                    <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#C21975] group-hover:border-[#C21975] group-hover:text-white transition-colors">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </span>
                    Watch Video
                  </button>
                </div>

                {/* Trusted By Section - Reference Style */}
                <div className="flex items-center gap-6 pt-8 border-t border-[#d4a5c4]/30">
                  <div className="flex -space-x-4">
                    {[
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/68.jpg",
                      "https://randomuser.me/api/portraits/men/22.jpg"
                    ].map((src, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                        <Image src={src} alt="Patient" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-[#C21975] text-white flex items-center justify-center font-bold text-sm">
                      2k+
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Trusted by <span className="text-[#C21975] font-bold">10,000+</span> Patients
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Slider */}
              <div className="relative h-[600px] hidden lg:block">
                {/* Slider Container */}
                <div className="absolute top-0 right-0 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={heroImages[currentImageIndex]}
                        alt="Hero Image"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Slider Controls */}
                  <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${currentImageIndex === i ? 'bg-[#C21975] scale-125' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Top Left Solid Card - "Patient Focused" */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute top-8 -left-12 p-5 rounded-3xl bg-[#730940] shadow-[0_15px_40px_rgba(115,9,64,0.4)] max-w-[260px] z-30 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-bl-[3rem]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-display font-medium text-white leading-tight">
                        Patient Focused
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-light pl-1">
                      Compassionate care tailored to your unique health journey.
                    </p>
                  </div>
                </motion.div>

                {/* Bottom Right Glass Card - "Advanced Care" */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute bottom-8 -right-12 p-5 rounded-3xl backdrop-blur-md bg-[#1a103c]/20 border border-white/20 shadow-xl max-w-[260px] z-30 hidden xl:block"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center shrink-0 text-white">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white leading-tight drop-shadow-md">
                      Advanced Care
                    </h3>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-light drop-shadow-md pl-1">
                    State-of-the-art technology for precise diagnosis & treatment.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
