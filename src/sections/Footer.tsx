import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const serviceLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Doctor', href: '/about' },
  { name: 'Hospital Affiliations', href: '/contact' },
  { name: 'Clinic Schedule', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blogs', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const treatmentLinks = [
  { name: 'PCOS Treatment', href: '/treatments' },
  { name: 'Endometriosis', href: '/treatments' },
  { name: 'Laparoscopic Procedures', href: '/treatments' },
  { name: 'Hysterectomy', href: '/treatments' },
  { name: 'Hysteroscopy', href: '/treatments' },
  { name: 'Ovarian Cystectomy', href: '/treatments' },
  { name: 'Pregnancy Management', href: '/treatments' },
];

const supportLinks = [
  { name: 'Terms and Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
                <img
                  src="/images/logo.png"
                  alt="Dr. Vinita Khemani"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-semibold text-xl">
                  Dr. Vinita Khemani
                </span>
                <p className="text-sm text-gray-400">Gynecologist & Obstetrician</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              A leading obstetrician-gynecologist and laparoscopic surgeon in
              Kolkata with decades of experience. Committed to patients'
              well-being with personalized, care-driven treatments.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-5">
              Treatments
            </h4>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+919903588155"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    +91-9903588155
                  </a>
                  <a
                    href="tel:+918820250803"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    +91-8820250803
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:dr.vinita.khemani@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  dr.vinita.khemani@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Healing Touch Clinic<br />
                  59, Bangur Avenue, Block A<br />
                  (Near Shyam Mandir)<br />
                  Kolkata - 700055
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2026 Dr. Vinita Khemani. All Rights Reserved. | Designed by{' '}
            <a
              href="https://theaquarious.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              Aquarious Technology
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm">
            {supportLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-500 hover:text-pink-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
