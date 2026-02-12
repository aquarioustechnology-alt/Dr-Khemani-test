"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export function WhyChooseUs() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#fdfbfd] to-[#fff0f5]">
            <div className="w-[95%] mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-sm overflow-hidden">
                <div className="container-fluid mx-auto">

                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
                        <div className="max-w-3xl">
                            <span className="inline-block px-4 py-2 rounded-full bg-[#f5e6ef]/50 text-[#C21975] text-sm font-semibold mb-6 border border-[#d4a5c4]">
                                Why Choose Us
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] pb-1">
                                Your trusted partner in <br />
                                <span className="text-[#C21975]">compassionate care</span>
                            </h2>
                        </div>
                        <div className="max-w-xl pb-2">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We prioritize dignity, comfort, and personalized attention, ensuring every woman feels valued and supported in a warm, welcoming environment.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#fff5f5] rounded-[2rem] p-10 flex flex-col justify-between h-full min-h-[450px]"
                        >
                            <h3 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 leading-tight mb-8">
                                Personalized care plans tailored to meet the unique preferences and needs of every patient
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                We provide tailored care that respects individual preferences, fostering comfort, independence, and peace of mind for both patients and their families.
                            </p>
                        </motion.div>

                        {/* Card 2: Center Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative rounded-[2rem] overflow-hidden min-h-[450px]"
                        >
                            <Image
                                src="/images/2023-04-06.webp"
                                alt="Compassionate care interaction"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#F8F5F7] rounded-[2rem] p-10 flex flex-col justify-between h-full min-h-[450px]"
                        >
                            <h3 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 leading-tight mb-8">
                                A vibrant and supportive community offering modern amenities and enriching daily activities
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Our vibrant environment ensures patients feel connected and fulfilled, offering enriching programs and comfortable spaces to call home.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
