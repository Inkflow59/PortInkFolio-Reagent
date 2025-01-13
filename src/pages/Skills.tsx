import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { GraduationCap, FileDown, Table } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const { t } = useTranslation();
  const [openCompetence, setOpenCompetence] = useState<string | null>(null);

  const competences = [
    {
      id: 'comp-1',
      title: t('skills.synthesis.competences.1.1.title'),
      description: t('skills.synthesis.competences.1.1.description')
    },
    {
      id: 'comp-2',
      title: t('skills.synthesis.competences.1.2.title'),
      description: t('skills.synthesis.competences.1.2.description')
    },
    {
      id: 'comp-3',
      title: t('skills.synthesis.competences.1.3.title'),
      description: t('skills.synthesis.competences.1.3.description')
    },
    {
      id: 'comp-4',
      title: t('skills.synthesis.competences.1.4.title'),
      description: t('skills.synthesis.competences.1.4.description')
    },
    {
      id: 'comp-5',
      title: t('skills.synthesis.competences.1.5.title'),
      description: t('skills.synthesis.competences.1.5.description')
    },
    {
      id: 'comp-6',
      title: t('skills.synthesis.competences.1.6.title'),
      description: t('skills.synthesis.competences.1.6.description')
    }
  ];

  const ExamCard = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const CompetenceCard = ({ id, title, description }: { id: string; title: string; description: string }) => (
    <div className="relative">
      <button
        onClick={() => setOpenCompetence(openCompetence === id ? null : id)}
        className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </button>
      <AnimatePresence>
        {openCompetence === id && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl p-4"
          >
            <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-100 rounded transition-colors">
              <FileDown className="w-5 h-5 text-[#245EDC]" />
              <span>{t('skills.synthesis.download')}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <WindowsWindow title={t('skills.title')}>
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('skills.bts.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExamCard
              title={t('skills.bts.e4.title')}
              description={t('skills.bts.e4.description')}
            />
            <ExamCard
              title={t('skills.bts.e5.title')}
              description={t('skills.bts.e5.description')}
            />
            <ExamCard
              title={t('skills.bts.certification.title')}
              description={t('skills.bts.certification.description')}
            />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Table className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('skills.synthesis.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((comp) => (
              <CompetenceCard
                key={comp.id}
                id={comp.id}
                title={comp.title}
                description={comp.description}
              />
            ))}
          </div>
        </section>
      </div>
    </WindowsWindow>
  );
};

export default Skills;