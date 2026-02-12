"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UserPlus, X } from "lucide-react";

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for callback request would go here
        alert("Callback request received for " + phoneNumber);
        setPhoneNumber("");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-[#240817] text-white border-none p-0 overflow-hidden rounded-2xl">
                <div className="relative p-6">
                    {/* Close Button Override */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white z-50"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>

                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-xl font-display font-bold text-white flex items-center gap-2">
                            <UserPlus className="w-5 h-5 text-[#C21975]" />
                            Request a Call Back
                        </DialogTitle>
                        <p className="text-sm text-pink-100/70 mt-2">
                            Leave your number and we&apos;ll get back to you shortly.
                        </p>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div className="space-y-2">
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#C21975] focus:ring-1 focus:ring-[#C21975] transition-all"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#C21975] hover:bg-[#a43971] text-white text-sm font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg shadow-[#C21975]/20 hover:shadow-[#C21975]/40 active:scale-95"
                        >
                            Submit Request
                        </button>
                    </form>

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C21975] rounded-full mix-blend-overlay filter blur-[60px] opacity-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C21975] rounded-full mix-blend-overlay filter blur-[40px] opacity-10 pointer-events-none" />
                </div>
            </DialogContent>
        </Dialog>
    );
}
