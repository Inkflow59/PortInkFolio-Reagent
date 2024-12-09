import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { projects } from '../data/projects';
import { Gamepad2, Globe } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const gameProjects = projects.filter(p => p.category === 'game');
  const webProjects = projects.filter(p => p.category === 'web');

  const ProjectCard = ({ project }) => (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-[#ECE9D8] px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <WindowsWindow title={t('nav.projects')}>
      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Gamepad2 className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('projects.games')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-[#245EDC]" />
            <h2 className="text-2xl font-bold">{t('projects.web')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </WindowsWindow>
  );
};

export default Projects;