"use client";
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';
import { useState } from 'react';

const AdminPage = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const documents = [
    { name: 'Télécharger le CV', url: '/documents/CVTom.pdf' },
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gradient-to-r from-black to-gray-800 text-white' : 'bg-gradient-to-r from-blue-200 to-white text-black'}`}>
      <div className="text-center mb-8 p-6 rounded-lg bg-opacity-80 backdrop-blur-md">
        <h1 className="text-5xl font-bold mb-2">Mode administrateur</h1>
        <h2 className="text-3xl mb-4">PortInkFolio : Reagent</h2>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/logo.svg"
            alt="Logo PortInkFolio"
            width={80}
            height={80}
            className={theme === 'dark' ? 'invert' : ''}
          />
        </div>
      </div>
      <h2 className="text-2xl mb-4">Documents disponibles :</h2>
      <div className="mb-8 flex-grow">
        {documents.map((doc, index) => (
          <div key={index} className="mb-2">
            <a 
              href={doc.url} 
              className={`text-white font-semibold py-2 px-4 rounded transition duration-300 ${theme === 'dark' ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-200 hover:bg-blue-300'}`} 
              download
            >
              {doc.name}
            </a>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <button
          onClick={toggleTheme}
          className={`py-2 px-4 rounded transition duration-300 ${isDarkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-200 hover:bg-blue-300'}`}
        >
          Changer le thème
        </button>
      </div>
    </div>
  );
};

export default AdminPage;