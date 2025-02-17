"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

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
    <div className={`min-h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-gradient-to-r from-black to-gray-800 text-white' : 'bg-gradient-to-r from-blue-200 to-white text-black'}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 p-4 md:p-8 mt-4 md:mt-10">
        {icons.map((icon, index) => (
          <motion.div 
            className="flex flex-col items-center group cursor-pointer" 
            key={index} 
            onClick={() => handleIconClick(icon.path)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={icon.external ? icon.path : undefined} target={icon.external ? '_blank' : undefined} rel="noopener noreferrer">
              <Image
                src={icon.src}
                alt={`Icon ${index + 1}`}
                width={64}
                height={64}
                className={`w-12 h-12 md:w-16 md:h-16 ${theme === 'dark' ? 'filter invert' : ''}`}
              />
            </a>
            <span className={`mt-2 text-sm md:text-base text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {icon.name}
            </span>
          </motion.div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Desktop;