import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GalleryGrid from '@/components/GalleryGrid';
import EmbroideryFrame3D from '@/components/EmbroideryFrame3D';
import About from '@/components/About';
import FeaturedCollection from '@/components/FeaturedCollection';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <GalleryGrid />
      <EmbroideryFrame3D />
      <About />
      <FeaturedCollection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
