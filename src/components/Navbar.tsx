import { useEffect, useState } from 'react';
import { useLang, t } from '@/lib/i18n';

const sections = ['hero', 'services', 'process', 'contact'] as const;

const navLabels: Record<string, { pl: string; en: string }> = {
  services: { pl: 'Usługa', en: 'Service' },
  process: { pl: 'Proces', en: 'Process' },
  contact: { pl: 'Kontakt', en: 'Contact' },
};

export const Navbar = () => {
  const { lang, setLang } = useLang();
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="font-mono text-lg font-bold text-foreground tracking-tight">
          Piotr.
        </button>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-5">
            {(['services', 'process', 'contact'] as const).map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors duration-150 ${
                  active === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(lang, navLabels[id].pl, navLabels[id].en)}
              </button>
            ))}
          </div>

          <div className="flex border border-border">
            <button
              onClick={() => setLang('pl')}
              className={`px-2.5 py-1 font-mono text-xs font-medium transition-colors duration-150 ${
                lang === 'pl' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PL
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 font-mono text-xs font-medium border-l border-border transition-colors duration-150 ${
                lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
