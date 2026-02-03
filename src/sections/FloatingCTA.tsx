import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    >
      <div className="flex">
        <a
          href="tel:+919903588155"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-4 font-medium hover:bg-blue-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector('#contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 font-medium hover:opacity-90 transition-opacity"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Appointment</span>
        </a>
      </div>
    </motion.div>
  );
}
