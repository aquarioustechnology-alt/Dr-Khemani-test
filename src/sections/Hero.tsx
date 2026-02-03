import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar, Users, Award, Stethoscope } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              Trusted Women's Health Specialist in Kolkata
            </Badge>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Dr. Vinita{' '}
              <span className="text-pink-500">Khemani</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
              16+ Years of Compassionate Care in Obstetrics, Gynecology &
              Laparoscopic Surgery
            </p>

            <p className="text-gray-500 mb-8 max-w-lg">
              Complete women's reproductive health treatments with personalized
              care and advanced medical expertise. Your trusted partner in every
              stage of womanhood.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-8 py-6 text-base font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </Button>
              <a href="tel:+919903588155">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold border-2 border-pink-500 text-pink-500 hover:bg-pink-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-gray-900">
                    5000+
                  </p>
                  <p className="text-sm text-gray-500">Happy Patients</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-gray-900">
                    16+
                  </p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-gray-900">
                    1000+
                  </p>
                  <p className="text-sm text-gray-500">Surgeries</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-[3rem] transform rotate-3 scale-95" />

              {/* Main Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-[80%] mx-auto">
                <img
                  src="/images/hero-doctor.jpg"
                  alt="Dr. Vinita Khemani - Best Gynecologist in Kolkata"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900">
                    Certified Expert
                  </p>
                  <p className="text-sm text-gray-500">Gynecologist</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                <p className="font-heading font-bold text-3xl text-pink-500">
                  16+
                </p>
                <p className="text-sm text-gray-500">Years of</p>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
