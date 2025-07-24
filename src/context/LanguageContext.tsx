import React, { createContext, useContext, useState, useEffect } from 'react';
//import { translations, Language, TranslationKey, ProjectData } from '../utils/translations';
import { translations, type Language, type ProjectData, type TranslationKey } from "@utils/translations";


interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  getProjects: () => ProjectData[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      return savedLanguage;
    }
    
    // Default to browser language if Spanish, otherwise English
    const browserLanguage = navigator.language.toLowerCase();
    return browserLanguage.startsWith('es') ? 'es' : 'en';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function for strings
  const t = (key: TranslationKey): string => {
    const value = translations[language][key];
    if (typeof value === 'string') {
      return value;
    }
    // Fallback to English if not found
    const fallbackValue = translations.en[key];
    if (typeof fallbackValue === 'string') {
      return fallbackValue;
    }
    return key;
  };

  // Function to get projects array
  const getProjects = (): ProjectData[] => {
    return translations[language].projectsData || translations.en.projectsData;
  };

  const value = {
    language,
    setLanguage,
    t,
    getProjects
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}