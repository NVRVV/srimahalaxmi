'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Craft', href: '#craft' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-md shadow-gold/10 border-b border-gold/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className={`font-playfair font-bold text-lg lg:text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-maroon' : 'text-cream'
              }`}
            >
              Sri Maha Laxmi
            </span>
            <span
              className={`font-cormorant text-xs lg:text-sm tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              Embroidery
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-inter text-sm tracking-wider uppercase transition-all duration-300 hover:text-gold relative group ${
                    scrolled ? 'text-maroon/70' : 'text-cream/80'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold text-gold font-inter text-sm tracking-wider uppercase hover:bg-gold hover:text-maroon transition-all duration-300"
          >
            Custom Order
          </a>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-maroon' : 'text-cream'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-maroon flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-cream"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            {/* Gold ornament */}
            <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-playfair text-3xl text-cream hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="absolute bottom-12 text-gold/60 font-cormorant text-sm tracking-widest italic">
              Crafting Elegance in Every Thread
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
