import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const defaultLanguage = typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en";
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "vi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
