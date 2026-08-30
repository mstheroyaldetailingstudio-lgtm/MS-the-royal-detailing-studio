import OfferBanner from '@/components/OfferBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Offer from '@/components/Offer';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <OfferBanner />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Offer />
        <Services />
        <Showcase />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
