import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maroon-dark border-t border-gold/10">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-bold text-cream mb-1">
              Sri Maha Laxmi
            </div>
            <div className="font-cormorant text-gold italic text-sm tracking-widest mb-4">
              Embroidery
            </div>
            <p className="font-inter text-cream/40 text-xs leading-relaxed">
              Crafting elegance in every thread since 1998. Your vision, our craft —
              made with love in Hyderabad.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
                { icon: <Facebook size={18} />, label: 'Facebook', href: '#' },
                { icon: <Youtube size={18} />, label: 'YouTube', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-playfair text-cream font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2.5">
              {[
                { label: 'Explore Collection', href: '#collection' },
                { label: 'Our Craft (3D)', href: '#craft' },
                { label: 'About Us', href: '#about' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Custom Orders', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-cream/40 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold/30 group-hover:w-6 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-playfair text-cream font-semibold mb-4">Our Services</div>
            <ul className="space-y-2.5">
              {[
                'Bridal Embroidery',
                'Lehenga Work',
                'Saree Embroidery',
                'Blouse Design',
                'Dupatta Embroidery',
                'Maggam Work',
                'Zardosi Work',
                'Custom Trousseau',
              ].map((s) => (
                <li key={s} className="font-inter text-cream/40 text-sm flex items-center gap-2">
                  <span className="text-gold/40 text-xs">✦</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-cream/30 text-xs text-center">
            © {new Date().getFullYear()} Sri Maha Laxmi Embroidery. All rights reserved.
          </p>
          <p className="font-cormorant text-gold/40 italic text-sm text-center">
            Crafting Elegance in Every Thread
          </p>
        </div>
      </div>
    </footer>
  );
}
