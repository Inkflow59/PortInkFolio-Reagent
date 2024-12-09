import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { Terminal } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <WindowsWindow title="Desktop">
      <div className="flex flex-col items-center justify-center space-y-6 p-8">
        <Terminal className="w-16 h-16 text-[#245EDC]" />
        <h1 className="text-4xl font-bold text-[#245EDC]">{t('home.welcome')}</h1>
        <p className="text-xl text-center">{t('home.intro')}</p>
      </div>
    </WindowsWindow>
  );
};

export default Home;