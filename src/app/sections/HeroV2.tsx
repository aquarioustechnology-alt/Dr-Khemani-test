"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Award, Users, Play, ArrowUpRight } from "lucide-react";
import { calculateExperience, calculateSurgeries } from "@/lib/utils";
import { EnquiryModal } from "@/components/EnquiryModal";
import { VideoModal } from "@/components/VideoModal";


const heroImages = [
  "/images/WhatsApp_Image_2025-12-22_at_12.22.00_PM.jpeg",
  "/images/2023-02-08.jpg",
  "/images/2023-04-06.webp",
];

export function HeroV2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
                  <span className="text-sm font-semibold tracking-wide text-[#C21975] uppercase">Dr. Vinita Khemani</span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-[68px] leading-[1.1] font-medium animate-text-gradient mb-8 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Best Gynecologist</span> <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">
                    in Kolkata.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                  Dr. Vinita Khemani is a senior Obstetrician-Gynecologist in Kolkata with <span className="font-bold text-gray-900">{calculateExperience()}+ years</span> of experience in high-risk pregnancy, laparoscopic surgery, and fertility treatment. Trusted by 10,000+ patients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-14">
                  <button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #C21975 0%, #8a2f5e 100%)' }}
                  >
                    Book Consultation
                    <span className="w-12 h-12 rounded-full bg-white text-[#C21975] flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="w-6 h-6" />
                    </span>
                  </button>

                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-3 pl-2 pr-8 py-1 rounded-full bg-white text-gray-700 font-semibold text-lg border border-gray-200 hover:border-[#C21975] hover:text-[#C21975] transition-all group">
                    <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#C21975] group-hover:border-[#C21975] group-hover:text-white transition-colors">
                      <Play className="w-5 h-5 -ml-1 fill-current" />
                    </span>
                    Watch Video
                  </button>
                </div>

                {/* Trusted By Section - Reference Style */}
                <div className="flex items-center gap-6 pt-8 border-t border-[#d4a5c4]/30">
                  <div className="flex -space-x-4">
                    {[
                      "/images/avatars/indian-woman-1.jpg",
                      "/images/avatars/indian-man-1.jpg",
                      "/images/avatars/indian-woman-2.jpg",
                      "/images/avatars/indian-man-2.jpg"
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
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full mb-8 lg:mb-0 order-first lg:order-none">
                {/* Slider Container */}
                <div className="absolute top-0 right-0 w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl">
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
                        alt="Dr. Vinita Khemani consulting patients at Healing Touch Clinic Kolkata"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Slider Controls */}
                  <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex gap-2 z-20">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all ${currentImageIndex === i ? 'bg-[#C21975] scale-125' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Top Left Solid Card - "Patient Focused" */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute top-4 left-4 lg:top-8 lg:-left-12 p-4 lg:p-5 rounded-2xl lg:rounded-3xl bg-[#730940] shadow-[0_15px_40px_rgba(115,9,64,0.4)] max-w-[200px] lg:max-w-[260px] z-30 relative overflow-hidden group hidden md:block"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-bl-[3rem]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <h3 className="text-sm lg:text-lg font-medium text-white leading-tight">
                        10,000+ Patients
                      </h3>
                    </div>
                    <p className="text-[10px] lg:text-xs text-white/80 leading-relaxed font-light pl-1">
                      Personalized gynecological care with 4.9★ patient satisfaction rating.
                    </p>
                  </div>
                </motion.div>

                {/* Bottom Right Glass Card - "Advanced Care" */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute bottom-4 right-4 lg:bottom-8 lg:-right-12 p-4 lg:p-5 rounded-2xl lg:rounded-3xl backdrop-blur-md bg-[#1a103c]/20 border border-white/20 shadow-xl max-w-[200px] lg:max-w-[260px] z-30 hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center shrink-0 text-white">
                      <Award className="w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <h3 className="text-sm lg:text-lg font-medium text-white leading-tight drop-shadow-md">
                      {calculateSurgeries()}+ Surgeries
                    </h3>
                  </div>
                  <p className="text-[10px] lg:text-xs text-white/90 leading-relaxed font-light drop-shadow-md pl-1">
                    Advanced laparoscopic & minimally invasive procedures.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
}
