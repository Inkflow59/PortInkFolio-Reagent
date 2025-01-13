import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { Code2, Gamepad, Terminal } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <WindowsWindow title={t('about.title')}>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#245EDC] mb-4">{t('about.intro')}</h1>
          <p className="text-gray-600">{t('about.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Terminal className="w-12 h-12 text-[#245EDC] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p className="text-gray-600">Architecture et développement de systèmes robustes</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Gamepad className="w-12 h-12 text-[#245EDC] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Game Dev</h3>
            <p className="text-gray-600">Création d'expériences vidéoludiques immersives</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Code2 className="w-12 h-12 text-[#245EDC] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">Veille technologique et apprentissage continu</p>
          </div>
        </div>
      </div>
    </WindowsWindow>
  );
};

export default About;