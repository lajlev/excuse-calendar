import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../utils/translations';

// Create context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }) => {
  // Get language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });
  
  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // Get translations for the current language
  const t = translations[language] || translations.en;
  
  // Function to change language
  const changeLanguage = (newLanguage) => {
    if (['en', 'da', 'no'].includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };
  
  // Context value
  const value = {
    language,
    changeLanguage,
    t
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;