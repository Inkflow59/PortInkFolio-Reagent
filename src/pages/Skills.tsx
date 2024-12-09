import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { Server, Gamepad2, Globe } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-[#245EDC] rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <WindowsWindow title={t('skills.title')}>
      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Server className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('skills.backend')}</h2>
          </div>
          <div className="space-y-4">
            <SkillBar name="Node.js" level={90} />
            <SkillBar name="Python" level={85} />
            <SkillBar name="Java" level={80} />
            <SkillBar name="SQL" level={95} />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Gamepad2 className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('skills.gamedev')}</h2>
          </div>
          <div className="space-y-4">
            <SkillBar name="Unity" level={95} />
            <SkillBar name="Unreal Engine" level={85} />
            <SkillBar name="C#" level={90} />
            <SkillBar name="C++" level={80} />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('skills.web')}</h2>
          </div>
          <div className="space-y-4">
            <SkillBar name="React" level={85} />
            <SkillBar name="TypeScript" level={90} />
            <SkillBar name="HTML/CSS" level={85} />
            <SkillBar name="TailwindCSS" level={90} />
          </div>
        </section>
      </div>
    </WindowsWindow>
  );
};

export default Skills;