"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hospitals = [
    { name: "Spandan Hospital", logo: "/images/spandan-hospital-logo.jpg" },
    { name: "Charnock Hospital", logo: "/images/charnock-hospital-logo.webp" },
    { name: "Apollo Clinic", logo: "/images/apollo-clinic-logo.webp" },
    { name: "ILS Hospital", logo: "/images/images.png" },
    { name: "Bhagirathi Neotia Hospital", logo: "/images/neotia-logo.svg" },
];

// Duplicate array multiple times to ensure seamless loop
const duplicatedHospitals = [...hospitals, ...hospitals, ...hospitals, ...hospitals];

export function HospitalAffiliations() {
    return (
        <section className="py-20 bg-white overflow-hidden border-t border-gray-50">
            <div className="container-fluid mx-auto px-6 mb-12 text-center">
                <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-4 border border-[#d4a5c4] text-[#C21975] bg-[#f5e6ef]/50">
                    Trusted Partners
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
                    Hospital <span className="text-[#C21975]">Affiliations</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                    Proudly associated with leading healthcare institutions to ensure the best facilities for your care.
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-gradient">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-16 sm:gap-24 px-4 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    style={{ width: "max-content" }}
                >
                    {duplicatedHospitals.map((hospital, index) => (
                        <div
                            key={index}
                            className="relative w-40 h-20 sm:w-48 sm:h-28 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110 transform cursor-pointer flex-shrink-0"
                        >
                            <Image
                                src={hospital.logo}
                                alt={hospital.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
