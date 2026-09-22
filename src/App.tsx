import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Technology from './components/Technology';
import Stats from './components/Stats';
import SizeGuide from './components/SizeGuide';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1B102B] text-[#F8F7FA] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Technology />
        <Stats />
        <SizeGuide />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}