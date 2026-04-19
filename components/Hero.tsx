'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1800&q=85"
          alt="Traditional Indian embroidery fabric background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/80 via-maroon/60 to-maroon-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/40 via-transparent to-maroon-dark/40" />
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-24 left-8 lg:top-32 lg:left-16 z-10 w-16 h-16 lg:w-24 lg:h-24 opacity-40">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 L50 10 L10 50 Z" stroke="#D4AF37" strokeWidth="1" fill="none"/>
          <path d="M10 10 L10 50" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
          <circle cx="10" cy="10" r="3" fill="#D4AF37"/>
          <path d="M30 10 Q50 30 30 50" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>
      <div className="absolute top-24 right-8 lg:top-32 lg:right-16 z-10 w-16 h-16 lg:w-24 lg:h-24 opacity-40 scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 L50 10 L10 50 Z" stroke="#D4AF37" strokeWidth="1" fill="none"/>
          <path d="M10 10 L10 50" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
          <circle cx="10" cy="10" r="3" fill="#D4AF37"/>
          <path d="M30 10 Q50 30 30 50" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      {/* Gold top border line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small label above */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <div className="h-px w-12 lg:w-20 bg-gold/60" />
          <span className="text-gold font-cormorant text-sm lg:text-base tracking-[0.4em] uppercase italic">
            Est. 1998 · Handcrafted Heritage
          </span>
          <div className="h-px w-12 lg:w-20 bg-gold/60" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight"
          >
            Sri Maha
            <br />
            <span className="gold-shimmer-text italic">Laxmi</span>
            <br />
            Embroidery
          </motion.h1>
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-3 my-6"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" fill="#D4AF37"/>
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-cormorant text-xl md:text-2xl lg:text-3xl text-cream/80 italic mb-10"
        >
          Crafting Elegance in Every Thread
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collection"
            className="group px-8 py-4 bg-gold text-maroon font-inter font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-300 gold-glow hover:scale-105 min-w-[200px] text-center"
          >
            Explore Collection
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-cream/60 text-cream font-inter text-sm tracking-widest uppercase rounded-full hover:border-gold hover:text-gold transition-all duration-300 min-w-[200px] text-center"
          >
            Custom Orders
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-xs tracking-widest uppercase font-inter">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gold" size={20} />
        </motion.div>
      </motion.div>

      {/* Bottom gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
