import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { Download, BookOpen, Trophy, Briefcase } from 'lucide-react';

const Resume = () => {
  const { t } = useTranslation();

  return (
    <WindowsWindow title={t('resume.title')}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#245EDC]">{t('resume.title')}</h1>
          <button className="bg-[#245EDC] text-white px-4 py-2 rounded-lg hover:bg-[#3579F6] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            {t('resume.download')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#245EDC]" />
              <h2 className="text-xl font-bold">Formation</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold">Master en Développement</h3>
              <p className="text-gray-600">2020 - 2022</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-[#245EDC]" />
              <h2 className="text-xl font-bold">Expérience</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold">Développeur Backend Senior</h3>
              <p className="text-gray-600">2022 - Présent</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-xl font-bold">Certifications</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="space-y-2">
              <li>Unity Certified Developer</li>
              <li>AWS Certified Developer</li>
              <li>Microsoft Certified: Azure Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </WindowsWindow>
  );
};

export default Resume;