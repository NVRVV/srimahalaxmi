'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', phone: '', requirement: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `Hello Sri Maha Laxmi Embroidery! 🙏\n\nName: ${form.name}\nPhone: ${form.phone}\nRequirement: ${form.requirement}`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hello! I am interested in your embroidery services. 🙏'
  )}`;

  return (
    <section id="contact" className="section-pad bg-maroon relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diamond" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="20" y="0" width="20" height="20" transform="rotate(45 20 20)" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cormorant text-gold italic text-lg tracking-widest mb-3">
            — Begin Your Journey —
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cream mb-4">
            Design Your Custom
            <br />
            <span className="gold-shimmer-text">Embroidery</span>
          </h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-inter text-cream/60 leading-relaxed">
              Ready to bring your dream outfit to life? Reach out to us for bridal trousseau,
              festive collections, or fully custom embroidery work. We'd love to hear your vision.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-white" size={28} />
              </div>
              <div>
                <div className="font-playfair text-cream font-semibold text-lg">
                  Chat on WhatsApp
                </div>
                <div className="font-inter text-cream/50 text-sm mt-0.5">
                  Instant response · +91 98765 43210
                </div>
              </div>
            </a>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: <Phone size={18} />,
                  label: 'Call Us',
                  value: '+91 98765 43210',
                  href: 'tel:+919876543210',
                },
                {
                  icon: <Mail size={18} />,
                  label: 'Email',
                  value: 'info@srimahalaxmi.com',
                  href: 'mailto:info@srimahalaxmi.com',
                },
                {
                  icon: <MapPin size={18} />,
                  label: 'Visit Us',
                  value: 'Begum Bazar, Hyderabad, Telangana 500012',
                  href: '#',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-maroon transition-all duration-300 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-inter text-cream/40 text-xs tracking-wider uppercase">
                      {item.label}
                    </div>
                    <div className="font-inter text-cream text-sm mt-1 group-hover:text-gold transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="border-t border-gold/20 pt-6">
              <p className="font-cormorant text-gold text-sm tracking-wider italic mb-2">
                Working Hours
              </p>
              <p className="font-inter text-cream/50 text-sm">
                Mon – Sat: 10:00 AM – 7:30 PM
                <br />
                Sunday: By Appointment Only
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-inter text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Your Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="E.g. Priya Reddy"
                  className="w-full px-5 py-4 bg-cream/5 border border-gold/20 rounded-xl text-cream placeholder-cream/30 font-inter text-sm focus:outline-none focus:border-gold/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block font-inter text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-4 bg-cream/5 border border-gold/20 rounded-xl text-cream placeholder-cream/30 font-inter text-sm focus:outline-none focus:border-gold/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block font-inter text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Your Requirement *
                </label>
                <textarea
                  name="requirement"
                  required
                  value={form.requirement}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe what you're looking for — bridal saree, blouse work, custom lehenga..."
                  className="w-full px-5 py-4 bg-cream/5 border border-gold/20 rounded-xl text-cream placeholder-cream/30 font-inter text-sm focus:outline-none focus:border-gold/60 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-gold text-maroon font-inter font-bold text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-300 gold-glow hover:scale-[1.02]"
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} />
                    Send via WhatsApp
                  </>
                )}
              </button>

              <p className="text-center font-inter text-cream/30 text-xs">
                Your enquiry will be sent directly to our WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
