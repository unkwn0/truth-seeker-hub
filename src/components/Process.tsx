import { useLang, t } from '@/lib/i18n';

const steps = [
  {
    num: '01',
    pl: { title: 'Przyjmuję twierdzenie', desc: 'Definiuję dokładnie, co jest weryfikowane. Ustalam zakres i kontekst.' },
    en: { title: 'Claim intake', desc: 'I define exactly what is being verified. Scope and context are established.' },
  },
  {
    num: '02',
    pl: { title: 'Docieram do źródeł', desc: 'Szukam źródła pierwotnego — bazy danych, dokumenty, oświadczenia, archiwa.' },
    en: { title: 'Source tracing', desc: 'I locate the primary source — databases, documents, statements, archives.' },
  },
  {
    num: '03',
    pl: { title: 'Weryfikacja krzyżowa', desc: 'Konfrontuję źródło pierwotne ze źródłami wtórnymi. Szukam sprzeczności.' },
    en: { title: 'Cross-verification', desc: 'I confront the primary source with secondary sources. Looking for contradictions.' },
  },
  {
    num: '04',
    pl: { title: 'Werdykt i raport', desc: 'Dostarczam werdykt (Prawda / Fałsz / Częściowo prawda / Nieweryfikowalne) z oceną pewności i pełną dokumentacją.' },
    en: { title: 'Verdict & report', desc: 'I deliver a verdict (True / False / Partially true / Unverifiable) with a confidence score and full documentation.' },
  },
];

export const Process = () => {
  const { lang } = useLang();

  return (
    <section id="process" className="border-b border-border">
      <div className="container py-24">
        <h2 className="text-2xl font-bold mb-16">{t(lang, 'Jak pracuję', 'How I work')}</h2>

        <div className="relative ml-4 sm:ml-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-10">
                {/* Number dot */}
                <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 border border-primary bg-background">
                  <span className="font-mono text-xs text-primary font-bold">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold">{t(lang, step.pl.title, step.en.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {t(lang, step.pl.desc, step.en.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
