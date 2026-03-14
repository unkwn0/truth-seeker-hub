import { LangProvider } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LangProvider>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
};

export default Index;
