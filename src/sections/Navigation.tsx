import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Doctor', href: '/about' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Patient Resources', href: '/resources' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Scroll direction logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down and past 100px, hide header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // If scrolling up or at top, show header
      else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : '-100%',
          backgroundColor: isScrolled || isOpen || location.pathname !== '/' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled || isOpen || location.pathname !== '/' ? 'blur(12px)' : 'none',
          boxShadow: (isScrolled && isVisible) ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 relative z-[60]">
              <img
                src="/images/logo.png"
                alt="Dr. Vinita Khemani Logo"
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span className="font-heading font-semibold text-lg text-gray-900 block leading-none">
                  Dr. Vinita Khemani
                </span>
                <p className="text-xs text-gray-500 mt-1">Gynecologist & Obstetrician</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href
                    ? 'text-[#E85A8E] font-semibold'
                    : 'text-gray-700 hover:text-[#E85A8E]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919903588155"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D9CDB] text-white hover:bg-[#1A7AB8] transition-colors"
                title="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919903588155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <Link to="/contact">
                <Button className="gradient-primary text-white rounded-full px-6 hover:opacity-90 transition-opacity">
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[60] p-2 text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-gray-800 block rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-gray-800 block rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-gray-800 block rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8"
          >
            <nav className="flex-1 flex flex-col gap-4 overflow-y-auto">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    to={link.href}
                    className={`block text-2xl font-heading font-semibold py-2 ${location.pathname === link.href
                      ? 'text-[#E85A8E]'
                      : 'text-gray-900'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Quick Connect</h4>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:+919903588155"
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-blue-50 text-[#2D9CDB]"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-medium text-sm">Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919903588155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 text-[#25D366]"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-medium text-sm">WhatsApp</span>
                  </a>
                </div>

                <Link to="/contact">
                  <Button className="w-full h-14 text-lg gradient-primary text-white rounded-full shadow-xl shadow-pink-200/50 mt-4">
                    Book Appointment
                  </Button>
                </Link>
              </motion.div>
            </nav>

            <motion.div variants={linkVariants} className="mt-auto pt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <img src="/images/logo.png" className="h-8 w-auto opacity-50" alt="Logo" />
              </div>
              <p className="text-sm text-gray-400">© 2026 Dr. Vinita Khemani</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
