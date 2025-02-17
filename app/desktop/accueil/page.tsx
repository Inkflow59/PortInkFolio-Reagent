"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';
import ProfileCard from '../../components/ProfileCard';

// Import des icônes
import { SiTypescript, SiReact, SiJavascript, SiPython, SiPhp, SiNextdotjs, SiMysql, SiSymfony, SiLaravel, SiCsharp } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import { FaHtml5 } from "react-icons/fa";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-gradient-to-r from-black to-gray-800 text-white' : 'bg-gradient-to-r from-blue-200 to-white text-black'} overflow-auto pb-20 px-4 md:px-8`}>
      <Navbar />
      <div className="flex flex-col items-center mt-6 md:mt-10 text-center">
        <Image
          src="/profil/photo.jpg"
          alt="Tom CUCHEROSSET"
          width={120}
          height={120}
          className={`rounded-full border-4 ${theme === 'dark' ? 'border-white' : 'border-black'} transition duration-300 md:w-[150px] md:h-[150px]`}
        />
        <h1 className="text-2xl md:text-4xl font-bold mt-4">Tom CUCHEROSSET</h1>
        <h2 className="text-xl md:text-2xl mt-2 px-4">Développeur web et logiciel spécialisé dans le backend</h2>
        <p className="text-base md:text-lg mt-2 max-w-2xl">Passionné par le développement d'applications robustes et performantes, je suis toujours à la recherche de nouveaux défis.</p>
      </div>

      <div className="mt-8 md:mt-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Expériences</h3>
          <ul className="list-none space-y-4">
            <li className="mb-4">
              <ProfileCard 
                imageSrc="/profil/experience1.jpg" 
                title="Expérience 1" 
                description="Description de l'expérience 1." 
              />
            </li>
            <li className="mb-4">
              <ProfileCard 
                imageSrc="/profil/experience2.jpg" 
                title="Expérience 2" 
                description="Description de l'expérience 2." 
              />
            </li>
            <li className="mb-4">
              <ProfileCard 
                imageSrc="/profil/experience3.jpg" 
                title="Expérience 3" 
                description="Description de l'expérience 3." 
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-6 lg:mt-0">Formations</h3>
          <ul className="list-none space-y-4">
            <li className="mb-4">
              <ProfileCard 
                imageSrc="/images/formation1.jpg" 
                title="Formation 1" 
                description="Description de la formation 1." 
              />
            </li>
            <li className="mb-4">
              <ProfileCard 
                imageSrc="/images/formation2.jpg" 
                title="Formation 2" 
                description="Description de la formation 2." 
              />
            </li>
            <li className="mb-4">
              <ProfileCard 
                imageSrc="/images/formation3.jpg" 
                title="Formation 3" 
                description="Description de la formation 3." 
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 md:mt-10 p-4 md:p-6 bg-opacity-80 backdrop-blur-md rounded-lg w-full max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">Langages de programmation maîtrisés</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
          {[
            { icon: SiJavascript, name: 'JavaScript' },
            { icon: FaHtml5, name: 'HTML5' },
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: SiReact, name: 'React' },
            { icon: SiPython, name: 'Python' },
            { icon: SiPhp, name: 'PHP' },
            { icon: BiLogoJava, name: 'Java' },
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: SiMysql, name: 'MySQL' },
            { icon: SiSymfony, name: 'Symfony' },
            { icon: SiLaravel, name: 'Laravel' },
            { icon: SiCsharp, name: 'C#' }
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-2 hover:scale-110 transition-transform">
              <tech.icon className="size-6 md:size-8" />
              <span className="text-sm md:text-base mt-1">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;