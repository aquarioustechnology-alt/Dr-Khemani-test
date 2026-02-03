import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-pink-500 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Have a Question?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-lg">
              Don't hesitate in reaching out to us. Whether you're looking to
              book your appointment or have some queries that need answers, get
              in touch with Dr. Vinita. We are always happy to help our
              patients.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Phone</p>
                  <a
                    href="tel:+919903588155"
                    className="text-lg font-medium hover:text-white/90 transition-colors"
                  >
                    +91-9903588155
                  </a>
                  <br />
                  <a
                    href="tel:+918820250803"
                    className="text-lg font-medium hover:text-white/90 transition-colors"
                  >
                    +91-8820250803
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Email</p>
                  <a
                    href="mailto:dr.vinita.khemani@gmail.com"
                    className="text-lg font-medium hover:text-white/90 transition-colors"
                  >
                    dr.vinita.khemani@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Personal Clinic</p>
                  <p className="text-lg font-medium">
                    Healing Touch Clinic<br />
                    59, Bangur Avenue, Block A<br />
                    (Near Shyam Mandir)<br />
                    Kolkata - 700055, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-500">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
                    Send us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12 rounded-xl border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                          className="h-12 rounded-xl border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="h-12 rounded-xl border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        required
                        className="rounded-xl border-gray-200 focus:border-pink-500 focus:ring-pink-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl h-12 text-base font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
