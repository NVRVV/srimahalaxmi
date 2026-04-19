'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80',
    alt: 'Bridal embroidery on red silk saree',
    category: 'Bridal',
    aspect: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
    alt: 'Gold zari embroidery work on lehenga',
    category: 'Festive',
    aspect: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1600456899121-68eda5baee60?w=800&q=80',
    alt: 'Intricate thread work on blouse',
    category: 'Custom Work',
    aspect: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
    alt: 'Traditional embroidery pattern closeup',
    category: 'Heritage',
    aspect: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1585073793584-5e0e7a53ae97?w=800&q=80',
    alt: 'Elegant saree with gold border',
    category: 'Bridal',
    aspect: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=800&q=80',
    alt: 'Handcrafted embroidery detailing',
    category: 'Premium',
    aspect: 'tall',
  },
];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="masonry-item group relative overflow-hidden rounded-2xl gold-glow-hover cursor-pointer"
    >
      <div
        className={`relative w-full overflow-hidden ${
          item.aspect === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Gold shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Category badge */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-block px-4 py-1.5 bg-gold text-maroon font-inter font-semibold text-xs tracking-widest uppercase rounded-full">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function GalleryGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-pad bg-cream-dark noise-overlay">
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
            — Our Work —
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon mb-4">
            A Canvas of Craftsmanship
          </h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="font-inter text-maroon/60 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            Each piece is a testament to generations of skill — where needle meets thread in
            perfect harmony.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
