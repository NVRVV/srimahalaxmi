'use client';

import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Dynamically import the 3D canvas to prevent SSR issues
const EmbroideryCanvas = dynamic(() => import('./EmbroideryCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="text-gold/60 font-cormorant italic text-lg">Loading 3D Experience...</div>
    </div>
  ),
});

export default function EmbroideryFrame3D() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-150px' });

  return (
    <section id="craft" className="relative section-pad bg-maroon overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mandala-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="20" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
              <circle cx="40" cy="40" r="30" stroke="#D4AF37" strokeWidth="0.3" fill="none"/>
              <line x1="10" y1="40" x2="70" y2="40" stroke="#D4AF37" strokeWidth="0.3"/>
              <line x1="40" y1="10" x2="40" y2="70" stroke="#D4AF37" strokeWidth="0.3"/>
              <line x1="18" y1="18" x2="62" y2="62" stroke="#D4AF37" strokeWidth="0.3"/>
              <line x1="62" y1="18" x2="18" y2="62" stroke="#D4AF37" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandala-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="font-cormorant text-gold italic text-lg tracking-widest mb-4">
              — The Art of Threading —
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cream mb-6 leading-tight">
              Where Every Stitch
              <br />
              <span className="gold-shimmer-text">Tells a Story</span>
            </h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Our artisans spend hundreds of hours perfecting each design, weaving cultural
              symbolism and personal meaning into every thread. The embroidery frame is where
              tradition meets imagination.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '25+', label: 'Years of Craft' },
                { value: '10K+', label: 'Pieces Made' },
                { value: '500+', label: 'Happy Brides' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-playfair text-3xl font-bold text-gold">{stat.value}</div>
                  <div className="font-inter text-cream/50 text-xs tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 w-full"
          >
            <Suspense fallback={null}>
              <EmbroideryCanvas />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
