"use client";

import { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Chargement des assets...");

  useEffect(() => {
    const loadingTexts = [
      "Chargement des assets...",
      "Initialisation des composants...",
      "Démarrage du système..."
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[currentIndex]);
    }, 3000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setLoading(false);
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mb-8">
        <ThemeToggle />
      </div>
      
      {loading ? (
        <div className="text-center">
          <h1 className="text-gray-800 dark:text-white text-3xl mb-6">{loadingText}</h1>
          <div className="relative w-96 h-4 bg-gray-300 dark:bg-gray-700 rounded mx-auto">
            <div className="absolute top-0 left-0 h-4 bg-green-500 rounded animate-load"></div>
          </div>
        </div>
      ) : (
        <h1 className="text-gray-800 dark:text-white text-6xl font-bold tracking-wide animate-fadeIn">
          Bienvenue sur le <span className="text-green-600 dark:text-green-400">PortInkFolio : Reagent!</span>
        </h1>
      )}

      <style jsx>{`
        @keyframes load {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-load {
          animation: load 10s linear forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}