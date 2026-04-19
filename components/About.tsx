'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-pad bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
                alt="Artisan working on traditional embroidery"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 -right-4 lg:-right-8 bg-gold text-maroon px-6 py-4 rounded-2xl shadow-2xl"
            >
              <div className="font-playfair text-3xl font-bold">25+</div>
              <div className="font-inter text-xs tracking-wider uppercase font-semibold mt-0.5">
                Years of Excellence
              </div>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold rounded-tl-3xl" />
            <div className="absolute -bottom-3 -right-3 lg:-right-11 w-24 h-24 border-b-2 border-r-2 border-gold rounded-br-3xl" />
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="font-cormorant text-gold italic text-lg tracking-widest mb-4">
              — Our Heritage —
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon mb-6 leading-tight">
              Rooted in Tradition,
              <br />
              Woven with Love
            </h2>

            <div className="h-px bg-gradient-to-r from-gold/60 to-transparent mb-8 max-w-xs mx-auto lg:mx-0" />

            <p className="font-cormorant text-maroon/70 text-xl italic leading-relaxed mb-6">
              "Every saree we embroider carries the prayers of our hands and the legacy
              of our ancestors."
            </p>

            <p className="font-inter text-maroon/60 leading-relaxed text-sm mb-8">
              Founded over two decades ago in the heart of Hyderabad, Sri Maha Laxmi Embroidery
              has been the trusted name for brides, families, and fashion lovers who seek
              authentic Indian craftsmanship. Our artisans — many trained across generations —
              bring unmatched precision and passion to every thread.
            </p>

            {/* Craft pillars */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🪡', label: 'Hand-Stitched', sub: 'Every thread by hand' },
                { icon: '✨', label: 'Pure Zari', sub: 'Real gold & silver threads' },
                { icon: '👰', label: 'Bridal Experts', sub: '500+ bridal trousseau' },
                { icon: '🎨', label: 'Custom Design', sub: 'Your vision, our craft' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-cream-dark/60 border border-gold/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-playfair font-semibold text-maroon text-sm">
                      {item.label}
                    </div>
                    <div className="font-inter text-maroon/50 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
