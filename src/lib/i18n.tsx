import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'pl' | 'en';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'pl',
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('pl');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const t = (lang: Lang, pl: string, en: string) => (lang === 'pl' ? pl : en);
