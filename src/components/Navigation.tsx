"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, ChevronDown, Baby, HeartPulse, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/treatments", label: "Treatments", isDropdown: true },
  { href: "/stories", label: "Patient Stories" },
  { href: "/clinic-schedule", label: "Clinic Schedule" },
  { href: "/contact", label: "Contact" },
];

const FertilityIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className || "w-5 h-5"}`}>
    <Image
      src="/images/fertility-treatment-ico.svg"
      alt="Fertility Treatment"
      fill
      className="object-contain"
    />
  </div>
);

const LaparoscopyIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className || "w-5 h-5"}`}>
    <Image
      src="/images/laparoscopy-surgery-ico.svg"
      alt="Laparoscopic Surgery"
      fill
      className="object-contain"
    />
  </div>
);

const PcosIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className || "w-5 h-5"}`}>
    <Image
      src="/images/pcos-treatment-ico.svg"
      alt="PCOS Treatment"
      fill
      className="object-contain"
    />
  </div>
);

const treatments = [
  { href: "/treatments/pregnancy-care", label: "Pregnancy Care", icon: Baby, desc: "Complete prenatal to postnatal care" },
  { href: "/treatments/high-risk-pregnancy", label: "High-Risk Pregnancy", icon: HeartPulse, desc: "Specialized care for complex pregnancies" },
  { href: "/treatments/fertility", label: "Fertility Treatment", icon: FertilityIcon, desc: "Evidence-based fertility solutions" },
  { href: "/treatments/laparoscopic-surgery", label: "Laparoscopic Surgery", icon: LaparoscopyIcon, desc: "Minimally invasive surgical care" },
  { href: "/treatments/pcos-treatment", label: "PCOS Treatment", icon: PcosIcon, desc: "Hormonal balance and wellness" },
  { href: "/treatments/menopause", label: "Menopause Care", icon: Heart, desc: "Comprehensive menopause management" },
];

export function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsHovered, setIsTreatmentsHovered] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/90 backdrop-blur-sm shadow-sm py-4 lg:bg-transparent lg:shadow-none lg:py-5"
        }`}>
        <div className="container-fluid px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50 relative">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  src="/images/logo-icon.png"
                  alt="Dr. Vinita Khemani Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-lg leading-tight text-gray-800">Healing Touch Clinic</p>
                <p className="text-xs font-medium" style={{ color: '#a43971' }}>Dr. Vinita Khemani</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.isDropdown ? (
                    <div
                      onMouseEnter={() => setIsTreatmentsHovered(true)}
                      onMouseLeave={() => setIsTreatmentsHovered(false)}
                      className="relative py-4"
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 text-sm font-medium transition-colors relative group text-gray-700 hover:text-[#C21975]"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTreatmentsHovered ? "rotate-180" : ""}`} />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-[#C21975]" />
                      </Link>

                      <AnimatePresence>
                        {isTreatmentsHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4"
                          >
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-2">
                              <div className="grid grid-cols-2 gap-2">
                                {treatments.map((treatment) => (
                                  <Link
                                    key={treatment.href}
                                    href={treatment.href}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#f5e6ef]/50 transition-colors group/item"
                                  >
                                    <div className="w-10 h-10 rounded-full bg-[#f5e6ef] flex items-center justify-center text-[#C21975] group-hover/item:scale-110 transition-transform shrink-0">
                                      <treatment.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-gray-900 group-hover/item:text-[#C21975] transition-colors">{treatment.label}</h4>
                                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{treatment.desc}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-2 p-3 bg-gray-50 rounded-2xl text-center">
                                <Link href="/treatments" className="text-xs font-bold text-[#C21975] hover:underline flex items-center justify-center gap-1">
                                  View all treatments <ChevronDown className="w-3 h-3 -rotate-90" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.label === "Contact" ? "#contact" : link.href}
                      className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-primary py-4 block">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-[#C21975]" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <a href="tel:+919903588155"
                  className="flex items-center gap-2 text-sm font-medium transition-colors text-gray-700 hover:text-primary">
                  <Phone className="w-4 h-4" />
                  +91 99035 88155
                </a>
                <Link href="#contact"
                  className="flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  style={{ background: 'linear-gradient(135deg, #C21975, #8a2f5e)' }}>
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center focus:outline-none"
              >
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out rounded-full ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`} />
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out rounded-full my-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out rounded-full ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col px-8 pt-24 pb-10 overflow-y-auto"
          >
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[40%] rounded-full bg-[#fae8f2] blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full bg-[#fae8f2] blur-3xl opacity-60 pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                        className="flex items-center justify-between w-full text-3xl font-display font-medium text-gray-800 hover:text-[#C21975] transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={`w-6 h-6 transition-transform ${isMobileTreatmentsOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isMobileTreatmentsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pl-4 pt-4 border-l-2 border-[#f5e6ef] mt-2 ml-2">
                              {treatments.map((treatment) => (
                                <Link
                                  key={treatment.href}
                                  href={treatment.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 text-lg font-medium text-gray-600 hover:text-[#C21975]"
                                >
                                  <div className="w-8 h-8 rounded-full bg-[#f5e6ef] flex items-center justify-center text-[#C21975] shrink-0">
                                    <treatment.icon className="w-4 h-4" />
                                  </div>
                                  {treatment.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.label === "Contact" ? "#contact" : link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-display font-medium text-gray-800 hover:text-[#C21975] transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-12 flex flex-col gap-5 relative z-10"
            >
              <div className="h-px w-24 bg-gray-200" />

              <a href="tel:+919903588155" className="flex items-center gap-3 text-xl font-medium text-gray-600">
                <div className="w-10 h-10 rounded-full bg-[#ffeef6] flex items-center justify-center text-[#C21975]">
                  <Phone className="w-5 h-5" />
                </div>
                +91 99035 88155
              </a>

              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl"
                style={{ background: 'linear-gradient(135deg, #C21975, #8a2f5e)' }}
              >
                <Calendar className="w-6 h-6" />
                Book Your Visit
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
