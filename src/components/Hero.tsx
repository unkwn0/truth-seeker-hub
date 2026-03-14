import { useLang, t } from '@/lib/i18n';

const metrics = [
  { pl: '85+ zweryfikowanych twierdzeń', en: '85+ claims verified' },
  { pl: '24h czas odpowiedzi', en: '24h response time' },
  { pl: '3 systemy operacyjne, 1 pipeline', en: '3 operating systems, 1 pipeline' },
];

export const Hero = () => {
  const { lang } = useLang();

  return (
    <section id="hero" className="min-h-screen flex items-center border-b border-border">
      <div className="container py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
          {t(lang,
            'Weryfikacja informacji dla mediów i firm',
            'Fact-checking for media & business'
          )}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {t(lang,
            'Niezależny fact-checking oparty na źródłach pierwotnych, białym wywiadzie i systematycznej metodologii.',
            'Independent verification built on primary sources, open-source intelligence and systematic methodology.'
          )}
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-10 bg-primary text-primary-foreground px-6 py-3 font-medium text-sm border border-primary hover:bg-primary/90 transition-colors duration-150"
        >
          {t(lang, 'Wyślij zapytanie', 'Send inquiry')}
        </button>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8">
          {metrics.map((m, i) => (
            <div key={i} className="font-mono text-sm text-muted-foreground">
              {t(lang, m.pl, m.en)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
