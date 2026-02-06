"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, HeartPulse, Sparkles, Scan, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Pregnancy Care",
    desc: "Complete prenatal to postnatal care for a healthy pregnancy journey. Regular checkups, nutrition guidance, and delivery planning.",
    image: "/images/Pregnancy Care.png",
    color: "from-rose-500 to-pink-600",
    features: ["Prenatal Checkups", "High-Risk Care", "Delivery Planning"],
  },
  {
    icon: HeartPulse,
    title: "High-Risk Pregnancy",
    desc: "Expert management of complex pregnancies including diabetes, hypertension, multiple pregnancies, and previous complications.",
    image: "/images/High-Risk Pregnancy.webp",
    color: "from-violet-500 to-purple-600",
    features: ["Risk Assessment", "Specialized Monitoring", "Emergency Care"],
  },
  {
    icon: Sparkles,
    title: "Fertility Treatment",
    desc: "Comprehensive fertility solutions including ovulation induction, IUI counseling, and IVF coordination to help you conceive.",
    image: "/images/Fertility Treatment.webp",
    color: "from-amber-500 to-orange-600",
    features: ["Fertility Tests", "Ovulation Tracking", "Treatment Plans"],
  },
  {
    icon: Scan,
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive surgeries for fibroids, ovarian cysts, endometriosis, and hysterectomy with faster recovery.",
    image: "/images/Laparoscopic Surgery.jpg",
    color: "from-teal-500 to-cyan-600",
    features: ["Keyhole Surgery", "Quick Recovery", "Minimal Scarring"],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="container-fluid">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-gradient-rose">Women&apos;s Healthcare</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From routine check-ups to complex procedures, we offer complete care for every stage of your life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70`} />
                <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link href="/services" className="inline-flex items-center gap-2 text-rose-600 font-semibold group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
            <Stethoscope className="w-5 h-5" />
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
