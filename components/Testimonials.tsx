'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Reddy',
    role: 'Bride, Hyderabad',
    quote:
      'My bridal saree was beyond anything I could have imagined. The zari work was flawless, and every guest at the wedding asked me where it was from. Sri Maha Laxmi made my dream wedding happen.',
    rating: 5,
    initial: 'P',
  },
  {
    name: 'Anjali Sharma',
    role: 'Festive Collection Customer',
    quote:
      'I ordered a custom lehenga for Diwali and the team understood my vision perfectly. The embroidery detail was so intricate and the delivery was prompt. Will definitely order again!',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Meena Krishnaswamy',
    role: 'Regular Customer, Bangalore',
    quote:
      'Been coming here for 8 years for all my blouse work. The quality has never dipped, and the attention to detail is unmatched. This is the only place I trust for my silk sarees.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Sunita Patel',
    role: 'Trousseau Order',
    quote:
      'Ordered my entire trousseau from Sri Maha Laxmi. Every piece was perfect — the maggam work, the mirror work, the threadwork. My mother-in-law was deeply impressed!',
    rating: 5,
    initial: 'S',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
          <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L1.2 5.2l4-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-pad bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cormorant text-gold italic text-lg tracking-widest mb-3">
            — Client Stories —
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon mb-4">
            Words from Our Patrons
          </h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-cream-dark border border-gold/10 hover:border-gold/30 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 font-playfair text-7xl text-gold/10 leading-none select-none">
                "
              </div>

              <div className="flex items-center gap-4 mb-5">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center text-gold font-playfair text-xl font-bold flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-playfair font-semibold text-maroon">{t.name}</div>
                  <div className="font-inter text-maroon/50 text-xs tracking-wide">{t.role}</div>
                </div>
              </div>

              <StarRating count={t.rating} />

              <blockquote className="mt-4 font-cormorant text-maroon/70 text-lg italic leading-relaxed">
                "{t.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
