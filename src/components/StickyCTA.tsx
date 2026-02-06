"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { getWhatsAppLink, getCallLink } from "@/lib/utils";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      
      // Show after scrolling past hero
      if (currentScrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Sticky Header */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 hidden md:block"
          >
            <div className="glass border-b border-white/20">
              <div className="container-fluid py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-lg font-semibold text-medical-800">
                      Dr. Vinita Khemani
                    </span>
                    <span className="text-sm text-gray-600 hidden lg:block">
                      Gynecologist & Obstetrician
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={getCallLink()}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-medical-50 text-medical-700 hover:bg-medical-100 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">Call Now</span>
                    </a>
                    <a
                      href={getWhatsAppLink()}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center gap-2 px-5 py-2 rounded-full bg-medical-600 text-white hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">Book Appointment</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Bottom Bar */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          >
            <div className="glass border-t border-white/20 px-4 py-3 pb-safe">
              <div className="flex items-center justify-between gap-2">
                <a
                  href={getCallLink()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-medical-50 text-medical-700 active:bg-medical-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-semibold">Call</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white active:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  className="flex-[1.5] flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-medical-600 text-white active:bg-medical-700 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-semibold">Book Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
