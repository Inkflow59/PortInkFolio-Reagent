"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const Desktop = () => {
  const { theme } = useTheme();

  const icons = [
    { src: '/icons/accueil.svg', path: '/desktop/accueil' },
    { src: '/icons/contact.svg', path: '/desktop/contact' },
    { src: '/icons/veille.svg', path: '/desktop/veille' },
    { src: '/icons/projects.svg', path: '/desktop/projets' },
    { src: '/icons/github.svg', path: 'https://github.com/Inkflow59', external: true },
    // Ajoutez d'autres icônes selon vos besoins
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-wrap justify-center mt-10">
        {icons.map((icon, index) => (
          <a key={index} href={icon.external ? icon.path : undefined} target={icon.external ? '_blank' : undefined} rel="noopener noreferrer" className="m-4">
            <Image
              src={icon.src}
              alt={`Icon ${index + 1}`}
              width={100}
              height={100}
              className={`w-16 h-16 ${theme === 'dark' ? 'filter invert' : ''}`}
            />
          </a>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Desktop;