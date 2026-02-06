"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight, UserPlus, Calendar } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "About Dr. Vinita", href: "/about" },
  { label: "Patient Success Stories", href: "/stories" },
  { label: "Women's Health Blog", href: "/blog" },
  { label: "Contact Clinic", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const medicalServices = [
  { title: "Pregnancy Care", href: "/services/pregnancy-care" },
  { title: "Normal Delivery", href: "/services/normal-delivery" },
  { title: "High-Risk Pregnancy", href: "/services/high-risk-pregnancy" },
  { title: "Infertility Treatment", href: "/services/infertility-treatment" },
  { title: "Laparoscopic Surgery", href: "/services/laparoscopic-surgery" },
  { title: "PCOD/PCOS Management", href: "/services/pcod-management" },
  { title: "Hysterectomy", href: "/services/hysterectomy" },
];

export function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for callback request would go here
    alert("Callback request received for " + phoneNumber);
    setPhoneNumber("");
  };

  return (
    <footer className="bg-[#240817] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C21975] via-[#a43971] to-[#C21975]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C21975] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 mb-16">

          {/* Brand & Stats */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/logo-icon.png"
                    alt="Healing Touch Clinic Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-xl leading-tight text-white tracking-wide">Healing Touch Clinic</p>
                  <p className="text-xs font-medium text-[#C21975] uppercase tracking-wider">Dr. Vinita Khemani</p>
                </div>
              </div>
            </Link>
            <p className="text-pink-100/80 text-sm leading-relaxed max-w-xs">
              Compassionate, world-class gynecological care led by Dr. Vinita Khemani. Dedicated to empowering women&apos;s health for over two decades.
            </p>

            <div className="flex items-center gap-4 py-4 border-y border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">21+</p>
                <p className="text-xs text-pink-200/70 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">10k+</p>
                <p className="text-xs text-pink-200/70 uppercase tracking-wider">Happy Patients</p>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C21975] hover:border-[#C21975] transition-all group">
                  <Icon className="w-4 h-4 text-pink-100 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services (SEO Optimized) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C21975]" />
                Specialized Treatments
              </h3>
              <ul className="space-y-3">
                {medicalServices.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="text-pink-100/80 hover:text-[#C21975] text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#C21975] transition-colors" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C21975]" />
                Patients Corner
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-pink-100/80 hover:text-white text-sm transition-colors block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Lead Gen Box - Enhanced for Focus */}
              <div className="mt-8 p-6 rounded-2xl bg-[#730940] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C21975] rounded-full mix-blend-overlay filter blur-[50px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity" />

                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2 relative z-10">
                  <UserPlus className="w-4 h-4 text-[#C21975]" />
                  Request a Call Back
                </h4>
                <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#C21975] transition-colors"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <button type="submit" className="w-full bg-[#C21975] hover:bg-[#a43971] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-colors shadow-lg shadow-[#C21975]/20">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact & Map */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C21975]" />
              Visit Clinic
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#C21975]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C21975] transition-colors">
                  <MapPin className="w-4 h-4 text-[#C21975] group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm text-pink-100/80 group-hover:text-pink-50 transition-colors">
                  <strong className="text-white block mb-0.5">Healing Touch Clinic</strong>
                  59 Bangur Avenue, Block A,<br />Kolkata - 700055
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#C21975]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C21975] transition-colors">
                  <Phone className="w-4 h-4 text-[#C21975] group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+919903588155" className="text-sm text-pink-100/80 hover:text-white transition-colors">
                  +91 99035 88155
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#C21975]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C21975] transition-colors">
                  <Mail className="w-4 h-4 text-[#C21975] group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:drvinitakhemani@gmail.com" className="text-sm text-pink-100/80 hover:text-white transition-colors">
                  drvinitakhemani@gmail.com
                </a>
              </div>
            </div>

            <Link href="/book-appointment" className="w-full flex items-center justify-center gap-2 bg-white text-[#C21975] px-6 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl group">
              <Calendar className="w-4 h-4" />
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pink-200/60">
            © {new Date().getFullYear()} Healing Touch Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/doctors-login" className="text-xs text-pink-200/60 hover:text-[#C21975] transition-colors flex items-center gap-1">
              Doctor Login
            </Link>
            <span className="w-1 h-1 rounded-full bg-pink-200/40" />
            <p className="text-xs text-pink-200/60">
              Designed by <a href="#" className="hover:text-white transition-colors">Aquarious Technology</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
