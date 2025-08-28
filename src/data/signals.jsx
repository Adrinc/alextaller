// src/data/signals.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";
import { translationsIndex } from "./translationsIndex";
import { isEnglish } from "./variables";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const browserLang = typeof window !== "undefined"
    ? (localStorage.getItem("lang") || navigator.language.slice(0, 2))
    : "es";

  const [lang, setLang] = useState(browserLang);

  const t = translations[lang] || translations.es;
  const tIndex = translationsIndex[lang] || translationsIndex.es;

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    isEnglish.set(newLang === "en");
  };

  useEffect(() => {
    isEnglish.set(lang === "en");
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t, tIndex, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
