import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    Send,
    CheckCircle,
    Building2
} from 'lucide-react';
import { useState } from 'react';

const clinicLocations = [
    {
        name: "Bhagirathi Neotia Hospital",
        address: "New Town, Kolkata",
        timing: "Mon, Wed: 11am-3pm | Tue, Fri: 11am-4pm | Thu: 12pm-3pm | Sat: 11am-5pm",
        phone: "+91-9903588155"
    },
    {
        name: "Healing Touch Clinic",
        address: "59, Bangur Avenue, Block A (Near Shyam Mandir), Kolkata - 700055",
        timing: "Mon, Tue: 11am-3pm | Tue, Fri: 11am-4pm | Thu: 12pm-3pm | Sat: 11am-5pm",
        phone: "+91-9903588155",
        isPrimary: true
    },
    {
        name: "Charnock Hospital",
        address: "Kolkata",
        timing: "Mon: 11am-3pm | Tue, Fri: 11am-4pm | Thu: 12pm-3pm | Sat: 11am-5pm",
        phone: "+91-9903588155"
    },
    {
        name: "Apollo Clinic",
        address: "Chinar Park, Kolkata",
        timing: "Mon, Wed: 11am-3pm | Tue, Fri: 11am-4pm | Thu: 12pm-3pm | Sat: 11am-5pm",
        phone: "+91-9903588155"
    },
    {
        name: "Spandan Hospital",
        address: "Kolkata",
        timing: "Mon, Wed: 11am-3pm | Tue, Fri: 11am-4pm | Thu: 12pm-3pm | Sat: 11am-5pm",
        phone: "+91-9903588155"
    },
    {
        name: "ILS Hospital",
        address: "Dum Dum, Kolkata",
        timing: "Mon, Wed: 11am-3pm | Tue, Fri: 11am-4pm | Thu: 12pm-3pm | Sat: 11am-5pm",
        phone: "+91-9903588155"
    }
];

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredClinic: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        setIsSubmitted(true);
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100 px-4 py-2 text-sm font-medium mb-6">
                            Contact Us
                        </Badge>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Get in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We're here to help. Schedule an appointment or reach out with any questions about your healthcare needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                                How Can We Help?
                            </h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:+919903588155" className="text-gray-600 hover:text-pink-500 transition-colors block">+91-9903588155</a>
                                        <a href="tel:+918820250803" className="text-gray-600 hover:text-pink-500 transition-colors block">+91-8820250803</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:dr.vinita.khemani@gmail.com" className="text-gray-600 hover:text-pink-500 transition-colors">
                                            dr.vinita.khemani@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Primary Clinic</h3>
                                        <p className="text-gray-600">Healing Touch Clinic</p>
                                        <p className="text-gray-500 text-sm">59, Bangur Avenue, Block A (Near Shyam Mandir)</p>
                                        <p className="text-gray-500 text-sm">Kolkata - 700055, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact Buttons */}
                            <div className="flex gap-4 mb-10">
                                <a
                                    href="tel:+919903588155"
                                    className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-[#2D9CDB] text-white rounded-xl hover:bg-[#1A7AB8] transition-colors shadow-lg shadow-blue-200"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="font-semibold">Call Now</span>
                                </a>
                                <a
                                    href="https://wa.me/919903588155"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="font-semibold">WhatsApp</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Appointment Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100"
                        >
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                                    <p className="text-gray-600 mb-6">Your appointment request has been submitted. We will contact you shortly to confirm.</p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        variant="outline"
                                        className="rounded-full"
                                    >
                                        Submit Another Request
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
                                    <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Clinic</label>
                                            <select
                                                value={formData.preferredClinic}
                                                onChange={(e) => setFormData({ ...formData, preferredClinic: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-white"
                                            >
                                                <option value="">Select a clinic</option>
                                                {clinicLocations.map((clinic) => (
                                                    <option key={clinic.name} value={clinic.name}>{clinic.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Message / Concern</label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                                                placeholder="Briefly describe your health concern or reason for visit..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl py-6 text-lg font-semibold hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 group"
                                        >
                                            Request Appointment
                                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clinic Locations */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-4 py-2 text-sm font-medium mb-6">
                            Clinic Locations
                        </Badge>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            My Clinic <span className="text-pink-500">Schedule</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Visit Dr. Khemani at any of these convenient locations across Kolkata.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clinicLocations.map((clinic, index) => (
                            <motion.div
                                key={clinic.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`bg-white rounded-2xl p-6 border ${clinic.isPrimary ? 'border-pink-300 ring-2 ring-pink-100' : 'border-gray-100'} hover:shadow-lg transition-all duration-300`}
                            >
                                {clinic.isPrimary && (
                                    <Badge className="bg-pink-100 text-pink-600 mb-4">Primary Clinic</Badge>
                                )}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-gray-900">{clinic.name}</h3>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600">{clinic.address}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-500 text-xs leading-relaxed">{clinic.timing}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        <a href={`tel:${clinic.phone}`} className="text-pink-500 hover:text-pink-600">{clinic.phone}</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-16 bg-gradient-to-r from-red-500 to-pink-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                            Have an Emergency?
                        </h2>
                        <p className="text-white/90 mb-6">
                            For urgent medical concerns, please call directly for immediate assistance.
                        </p>
                        <a href="tel:+919903588155">
                            <Button className="bg-white text-red-600 rounded-full px-10 py-6 text-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Call +91-9903588155
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
