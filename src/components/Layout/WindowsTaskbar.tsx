import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, Radio, User, Mail, FileText, Brain, Monitor } from 'lucide-react';
import StartMenu from './StartMenu';
import Clock from './Clock';

const WindowsTaskbar = () => {
  const { t } = useTranslation();
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, label: t('nav.home') },
    { to: '/projects', icon: FolderGit2, label: t('nav.projects') },
    { to: '/tech-watch', icon: Radio, label: t('nav.tech-watch') },
    { to: '/about', icon: User, label: t('nav.about') },
    { to: '/contact', icon: Mail, label: t('nav.contact') },
    { to: '/resume', icon: FileText, label: t('nav.resume') },
    { to: '/skills', icon: Brain, label: t('nav.skills') },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#245EDC] shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-12">
          <div className="relative">
            <button
              onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
              className={`flex items-center px-4 py-2 rounded-t-lg transition-colors ${
                isStartMenuOpen ? 'bg-[#3579F6] text-white' : 'text-white hover:bg-[#3579F6]'
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Démarrer</span>
            </button>
            <StartMenu isOpen={isStartMenuOpen} onClose={() => setIsStartMenuOpen(false)} />
          </div>

          <div className="flex-1 flex items-center justify-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-1.5 py-1.5 rounded-t-lg transition-colors text-xs ${
                    isActive
                      ? 'bg-[#3579F6] text-white'
                      : 'text-white hover:bg-[#3579F6]'
                  }`
                }
              >
                <item.icon className="w-3.5 h-3.5" />
                <span className="hidden md:inline ml-1 truncate max-w-[80px]">{item.label}</span>
              </NavLink>
            ))}
          </div>

          <Clock className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default WindowsTaskbar;