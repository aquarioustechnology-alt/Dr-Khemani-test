"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, Baby, HeartPulse, Sparkles, Scan, Flower2,
  ArrowRight 
} from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Stethoscope,
  Baby,
  HeartPulse,
  Sparkles,
  Scan,
  Flower2,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-medical-50/50 to-transparent" />
      
      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInWhenVisible>
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-4">
              Our Services
            </span>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Women&apos;s Healthcare
            </h2>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <p className="text-lg text-gray-600">
              Specialized treatments designed to support every stage of a woman&apos;s health journey
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Services Grid - Organic Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isLarge = index === 0 || index === 3;
            
            return (
              <FadeInWhenVisible key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "group relative bg-gradient-to-br from-white to-gray-50/50 rounded-[2rem] p-8 border border-gray-100 hover:border-medical-200 transition-all duration-500",
                    "hover:shadow-2xl hover:shadow-medical-900/5",
                    isLarge && "md:col-span-1"
                  )}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-medical-100 to-medical-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-8 h-8 text-medical-600" />}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3 group-hover:text-medical-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-medical-400 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-medical-600 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-medical-100/0 to-medical-50/0 group-hover:from-medical-100/20 group-hover:to-medical-50/20 transition-all duration-500 pointer-events-none" />
                </motion.div>
              </FadeInWhenVisible>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Not sure which service you need?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-medical-600 text-white rounded-full font-semibold hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
            >
              <Stethoscope className="w-5 h-5" />
              Get Free Consultation
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
