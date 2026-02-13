"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Calendar, ArrowRight, ChevronDown } from "lucide-react";

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const clinics = [
    "Healing Touch Clinic (Bangur)",
    "Bhagirathi Neotia (New Town)",
    "Charnock Hospital (VIP Road)",
    "Apollo Clinic (Chinar Park)",
    "Spandan Hospital (Teghoria)",
    "ILS Hospital (Dumdum)"
];

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        clinic: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for appointment request would go here
        alert("Appointment request submitted for " + formData.name);
        setFormData({
            name: "",
            phone: "",
            email: "",
            date: "",
            clinic: "",
            message: ""
        });
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] bg-[#540d2d] text-white border-none p-0 overflow-hidden rounded-[2rem]">
                <div className="relative p-8 md:p-10 overflow-y-auto max-h-[90vh] scrollbar-hide">
                    {/* Close Button Override */}
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 rounded-full w-8 h-8 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all z-50"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>

                    <DialogHeader className="mb-8 text-left">
                        <DialogTitle className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                            Book an Appointment with <br /> Dr. Khemani
                        </DialogTitle>
                        <p className="text-pink-100/80 mt-3 text-base">
                            Fill in your details and our team will call you within 30 minutes.
                        </p>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full bg-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C21975] transition-all"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C21975] transition-all"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Email Address *</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C21975] transition-all"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Preferred Date */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1">Preferred Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full bg-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#C21975] transition-all"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                                </div>
                            </div>
                            {/* Preferred Clinic */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1">Preferred Clinic *</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#C21975] transition-all"
                                        required
                                        value={formData.clinic}
                                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                                    >
                                        <option value="" disabled>Select Clinic</option>
                                        {clinics.map((clinic) => (
                                            <option key={clinic} value={clinic}>{clinic}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Message (Optional)</label>
                            <textarea
                                placeholder="Brief description of your concern..."
                                rows={3}
                                className="w-full bg-[#E8E8E8] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C21975] transition-all resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Note Box */}
                        <div className="p-4 rounded-xl bg-[#4D0C29] border border-white/5">
                            <p className="text-sm text-pink-100/90 leading-relaxed">
                                <span className="font-bold text-white">Note:</span> (Don&apos;t forget to mention the patient&apos;s age, sex, nature of problem, duration of problem, medical history, etc.)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#EBEBEB] hover:bg-white text-[#540d2d] text-lg font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl"
                        >
                            Request Appointment
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
