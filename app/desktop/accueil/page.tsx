"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';

// Import des icônes
import { SiTypescript, SiReact, SiJavascript, SiPython, SiPhp, SiNextdotjs, SiMysql, SiSymfony, SiLaravel, SiCsharp } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-gradient-to-r from-black to-gray-800 text-white' : 'bg-gradient-to-r from-blue-200 to-white text-black'} overflow-auto pb-20`}>
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <Image
          src="/profil/photo.jpg"
          alt="Tom CUCHEROSSET"
          width={150}
          height={150}
          className={`rounded-full border-4 ${theme === 'dark' ? 'border-white' : 'border-black'} transition duration-300`}
        />
        <h1 className="text-4xl font-bold mt-4">Tom CUCHEROSSET</h1>
        <h2 className="text-2xl mt-2">Développeur web et logiciel spécialisé dans le backend</h2>
      </div>
      <div className="mt-10 p-6 bg-opacity-80 backdrop-blur-md rounded-lg">
        <h3 className="text-3xl font-semibold">Expériences</h3>
        <ul className="list-disc list-inside mt-2">
          <li>
            Expérience 1
            <p className="text-sm">Description de l'expérience 1.</p>
          </li>
          <li>
            Expérience 2
            <p className="text-sm">Description de l'expérience 2.</p>
          </li>
          <li>
            Expérience 3
            <p className="text-sm">Description de l'expérience 3.</p>
          </li>
        </ul>
      </div>
      <div className="mt-10 p-6 bg-opacity-80 backdrop-blur-md rounded-lg">
        <h3 className="text-3xl font-semibold">Formations</h3>
        <ul className="list-disc list-inside mt-2">
          <li>
            Formation 1
            <p className="text-sm">Description de la formation 1.</p>
          </li>
          <li>
            Formation 2
            <p className="text-sm">Description de la formation 2.</p>
          </li>
          <li>
            Formation 3
            <p className="text-sm">Description de la formation 3.</p>
          </li>
        </ul>
      </div>
      <div className="mt-10 p-6 bg-opacity-80 backdrop-blur-md rounded-lg">
        <h3 className="text-3xl font-semibold text-center mb-4">Langages maîtrisés</h3>
        <div className="flex flex-wrap justify-center mt-2">
          <div className="flex flex-col items-center mx-4">
            <SiJavascript className='size-8' />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiTypescript className='size-8' />
            <span>TypeScript</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiReact className='size-8' />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiPython className='size-8' />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiPhp className='size-8' />
            <span>PHP</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <BiLogoJava className='size-8' />
            <span>Java</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiNextdotjs className='size-8' />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiMysql className='size-8' />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiSymfony className='size-8' />
            <span>Symfony</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiLaravel className='size-8' />
            <span>Laravel</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SiCsharp className='size-8' />
            <span>C#</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;