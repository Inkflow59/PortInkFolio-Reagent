import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { Monitor, Cpu, HardDrive } from 'lucide-react';

const TechWatch = () => {
  const { t } = useTranslation();

  return (
    <WindowsWindow title={t('techWatch.title')}>
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#245EDC] mb-2">
            {t('techWatch.subtitle')}
          </h1>
          <p className="text-gray-600">{t('techWatch.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Monitor className="w-12 h-12 text-[#245EDC] mb-4" />
            <h3 className="text-xl font-bold mb-2">Windows</h3>
            <p className="text-gray-600">Evolution des interfaces utilisateur et expérience Windows</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Cpu className="w-12 h-12 text-[#245EDC] mb-4" />
            <h3 className="text-xl font-bold mb-2">Linux</h3>
            <p className="text-gray-600">Innovations dans les distributions Linux et systèmes embarqués</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <HardDrive className="w-12 h-12 text-[#245EDC] mb-4" />
            <h3 className="text-xl font-bold mb-2">MacOS</h3>
            <p className="text-gray-600">Avancées dans l'écosystème Apple et intégration hardware/software</p>
          </div>
        </div>
      </div>
    </WindowsWindow>
  );
};

export default TechWatch;