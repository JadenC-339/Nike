import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SubscribeModal from './components/SubscribeModal';
import ScrollToTop from './components/ScrollToTop';
import Notification from './components/Notification';

export default function App() {
  /* ── Theme state (with localStorage persistence) ── */
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  /* ── Active section (scroll-based nav highlight) ── */
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);

      // Sticky header
      const header = document.querySelector('.header');
      if (header) {
        if (window.pageYOffset > 100) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  /* ── Subscribe modal ── */
  const [modalOpen, setModalOpen] = useState(false);

  /* ── Notification ── */
  const [notification, setNotification] = useState({ message: '', type: 'success', visible: false });

  const showNotification = useCallback((message, type = 'success') => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  return (
    <>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      <Hero onSubscribeClick={() => setModalOpen(true)} />

      <ProductGrid />

      <FAQ />

      <ContactForm showNotification={showNotification} />

      <Footer onSubscribeClick={() => setModalOpen(true)} />

      <SubscribeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        showNotification={showNotification}
      />

      <ScrollToTop />

      <Notification
        message={notification.message}
        type={notification.type}
        visible={notification.visible}
      />
    </>
  );
}
