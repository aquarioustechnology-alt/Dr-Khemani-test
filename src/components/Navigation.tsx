"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Services" },
  { href: "/stories", label: "Patient Stories" },
  { href: "/clinic-schedule", label: "Clinic Schedule" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}>
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Extracted Logo Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center">
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
                <Link key={link.href} href={link.label === "Contact" ? "#contact" : link.href}
                  className={`text-sm font-medium transition-colors relative group ${isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-700 hover:text-primary"
                    }`}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" style={{ background: '#C21975' }} />
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919903588155"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-primary" : "text-gray-700 hover:text-primary"
                  }`}>
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

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-700">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl p-6 pt-20">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.label === "Contact" ? "#contact" : link.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <a href="tel:+919903588155" className="flex items-center gap-2 font-medium" style={{ color: '#C21975' }}>
                <Phone className="w-5 h-5" />
                +91 99035 88155
              </a>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-white px-5 py-3 rounded-full font-medium"
                style={{ background: 'linear-gradient(135deg, #C21975, #8a2f5e)' }}>
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
