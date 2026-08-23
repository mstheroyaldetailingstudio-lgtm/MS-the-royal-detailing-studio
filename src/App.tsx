import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Showcase />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
