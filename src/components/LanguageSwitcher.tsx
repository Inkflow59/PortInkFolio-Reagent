import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-[#245EDC] text-white p-2 rounded-full hover:bg-[#3579F6] transition-colors z-50"
    >
      <Languages className="w-6 h-6" />
    </button>
  );
};

export default LanguageSwitcher;