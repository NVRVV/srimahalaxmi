'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const collection = [
  {
    id: 1,
    name: 'Royal Bridal Saree',
    tag: 'Bridal',
    tagColor: 'bg-maroon text-gold',
    src: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
    alt: 'Royal bridal saree with heavy embroidery',
  },
  {
    id: 2,
    name: 'Festive Lehenga Work',
    tag: 'Premium',
    tagColor: 'bg-gold text-maroon',
    src: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80',
    alt: 'Festive lehenga with gold embroidery',
  },
  {
    id: 3,
    name: 'Designer Blouse',
    tag: 'Handmade',
    tagColor: 'bg-maroon-light text-cream',
    src: 'https://images.unsplash.com/photo-1600456899121-68eda5baee60?w=600&q=80',
    alt: 'Designer blouse with intricate thread work',
  },
  {
    id: 4,
    name: 'Heritage Dupatta',
    tag: 'Heritage',
    tagColor: 'bg-gold-dark text-cream',
    src: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=600&q=80',
    alt: 'Heritage dupatta with traditional embroidery',
  },
  {
    id: 5,
    name: 'Custom Anarkali',
    tag: 'Custom Work',
    tagColor: 'bg-maroon text-gold',
    src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
    alt: 'Custom anarkali with floral embroidery',
  },
  {
    id: 6,
    name: 'Silk Saree Border',
    tag: 'Premium',
    tagColor: 'bg-gold text-maroon',
    src: 'https://images.unsplash.com/photo-1585073793584-5e0e7a53ae97?w=600&q=80',
    alt: 'Silk saree with gold zari border',
  },
];

export default function FeaturedCollection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="collection" className="section-pad bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-6"
        >
          <div>
            <p className="font-cormorant text-gold italic text-lg tracking-widest mb-2">
              — Curated Pieces —
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon">
              Featured Collection
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon hover:border-gold transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon hover:border-gold transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x pb-4"
        >
          {collection.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="snap-start flex-none w-72 lg:w-80 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] gold-glow-hover">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="320px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`${item.tagColor} font-inter text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full`}
                  >
                    {item.tag}
                  </span>
                </div>
                {/* Name at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair text-cream text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <a
                  href="#contact"
                  className="inline-block text-gold font-inter text-xs tracking-widest uppercase border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-200"
                >
                  Enquire Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
