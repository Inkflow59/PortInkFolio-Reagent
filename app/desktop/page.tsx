"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const Desktop = () => {
  const { theme } = useTheme();

  const icons = [
    { src: '/icons/accueil.svg', path: '/desktop/accueil', name: 'Accueil' },
    { src: '/icons/contact.svg', path: '/desktop/contact', name: 'Contact' },
    { src: '/icons/veille.svg', path: '/desktop/veille', name: 'Veille' },
    { src: '/icons/projects.svg', path: '/desktop/projets', name: 'Projets' },
    { src: '/icons/github.svg', path: 'https://github.com/Inkflow59', external: true, name: 'GitHub' },
  ];

  const handleIconClick = (path: string) => {
    window.location.href = path; // Redirige vers le chemin spécifié
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-blue-200 to-white text-black'}`}>
      <div className="flex flex-wrap justify-center mt-10">
        {icons.map((icon, index) => (
          <div className="flex flex-col items-center m-4 group cursor-pointer" key={index} onClick={() => handleIconClick(icon.path)}> {/* Ajout du gestionnaire de clic */}
            <a href={icon.external ? icon.path : undefined} target={icon.external ? '_blank' : undefined} rel="noopener noreferrer">
              <Image
                src={icon.src}
                alt={`Icon ${index + 1}`}
                width={100}
                height={100}
                className={`w-16 h-16 ${theme === 'dark' ? 'filter invert' : ''} transition-transform duration-300 transform group-hover:scale-110`}
              />
            </a>
            <span className={`mt-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {icon.name}
            </span>
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Desktop;