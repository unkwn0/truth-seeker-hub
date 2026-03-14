import { useLang, t } from '@/lib/i18n';

const services = [
  {
    label: '[01] CLAIM_VERIFICATION',
    pl: { title: 'Weryfikacja twierdzeń', desc: 'Sprawdzam konkretne twierdzenie — docieram do źródła pierwotnego, oceniam metodologię i dostarczam werdykt z poziomem pewności.' },
    en: { title: 'Claim verification', desc: 'I trace a specific claim to its primary source, assess the methodology and deliver a verdict with a confidence level.' },
  },
  {
    label: '[02] SOURCE_ANALYSIS',
    pl: { title: 'Analiza źródeł', desc: 'Oceniam wiarygodność i motywacje źródła informacji — od komunikatów prasowych po publikacje naukowe.' },
    en: { title: 'Source analysis', desc: 'I evaluate the credibility and motivations behind an information source — from press releases to academic publications.' },
  },
  {
    label: '[03] MEDIA_MONITORING',
    pl: { title: 'Monitoring mediów', desc: 'Systematyczne śledzenie narracji medialnych wokół wybranego tematu z raportowaniem odchyleń od faktów.' },
    en: { title: 'Media monitoring', desc: 'Systematic tracking of media narratives around a chosen topic, with deviation-from-fact reporting.' },
  },
  {
    label: '[04] VERIFICATION_REPORT',
    pl: { title: 'Raport weryfikacyjny', desc: 'Pełna dokumentacja procesu weryfikacji — od hipotezy przez źródła po werdykt. Format PDF lub Markdown.' },
    en: { title: 'Verification report', desc: 'Full documentation of the verification process — from hypothesis through sources to verdict. PDF or Markdown format.' },
  },
];

const sectionTitle = {
  pl: 'Czym się zajmuję',
  en: 'What I do',
};

export const Services = () => {
  const { lang } = useLang();

  return (
    <section id="services" className="border-b border-border">
      <div className="container py-24">
        <h2 className="text-2xl font-bold mb-8">{t(lang, sectionTitle.pl, sectionTitle.en)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <div key={i} className="bg-card p-8">
              <span className="font-mono text-xs text-muted-foreground tracking-wider">{s.label}</span>
              <h3 className="mt-4 text-xl font-semibold">{t(lang, s.pl.title, s.en.title)}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {t(lang, s.pl.desc, s.en.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
