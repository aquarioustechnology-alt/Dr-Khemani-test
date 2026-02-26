"use client";

import { useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

export function BlogCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="mt-20 bg-gradient-to-br from-[#fdf8fa] to-[#fff0f5] rounded-[2.5rem] p-10 md:p-14 border border-[#C21975]/10 flex flex-col md:flex-row items-center gap-10 md:justify-between text-center md:text-left shadow-lg">
                <div className="max-w-xl">
                    <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">Have questions about this topic?</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Book a consultation with Dr. Vinita Khemani to address your specific concerns and get a personalized care plan.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-10 py-4 rounded-full bg-[#C21975] text-white font-bold text-lg hover:bg-[#8a2f5e] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all shrink-0"
                >
                    Book Appointment
                </button>
            </div>
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
