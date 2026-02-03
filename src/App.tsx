import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from '@/sections/Navigation';
import { Footer } from '@/sections/Footer';
import { FloatingCTA } from '@/sections/FloatingCTA';

// Pages
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { TreatmentsPage } from '@/pages/TreatmentsPage';
import { TreatmentDetailPage } from '@/pages/TreatmentDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { FAQPage } from '@/pages/FAQPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:treatmentSlug" element={<TreatmentDetailPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:postSlug" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;

