import { useState, FormEvent } from 'react';
import { useLang, t } from '@/lib/i18n';

const subjectOptions = {
  pl: ['Weryfikacja twierdzenia', 'Analiza źródeł', 'Monitoring mediów', 'Raport weryfikacyjny', 'Inne'],
  en: ['Claim verification', 'Source analysis', 'Media monitoring', 'Verification report', 'Other'],
};

export const Contact = () => {
  const { lang } = useLang();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="border-b border-border">
        <div className="container py-24">
          <p className="font-mono text-sm text-primary">
            {t(lang,
              'Wiadomość wysłana. Odpowiem w ciągu 24h.',
              "Message sent. I'll respond within 24 hours."
            )}
          </p>
        </div>
      </section>
    );
  }

  const inputClass = 'w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-150';

  return (
    <section id="contact" className="border-b border-border">
      <div className="container py-24 max-w-xl">
        <h2 className="text-2xl font-bold">{t(lang, 'Zapytanie', 'Inquiry')}</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {t(lang,
            'Opisz twierdzenie lub temat do weryfikacji. Odpowiadam w ciągu 24 godzin.',
            'Describe the claim or topic for verification. I respond within 24 hours.'
          )}
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder={t(lang, 'Imię', 'Name')}
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className={inputClass}
          />
          <select name="subject" className={`${inputClass} appearance-none`}>
            {subjectOptions[lang].map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <textarea
            name="message"
            required
            placeholder={t(lang, 'Wiadomość', 'Message')}
            className={`${inputClass} font-mono min-h-[120px] resize-y`}
          />

          {status === 'error' && (
            <p className="text-sm text-destructive font-mono">
              {t(lang,
                'Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na PLACEHOLDER@EMAIL.COM',
                'Failed to send. Try again or email PLACEHOLDER@EMAIL.COM'
              )}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-primary text-primary-foreground px-6 py-3 font-medium text-sm border border-primary hover:bg-primary/90 transition-colors duration-150 disabled:opacity-50"
          >
            {status === 'sending'
              ? '...'
              : t(lang, 'Wyślij zapytanie', 'Send inquiry')
            }
          </button>
        </form>
      </div>
    </section>
  );
};
