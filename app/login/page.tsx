"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';

const LoginPage = () => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'invite' && password === 'invite') {
      setInfo('Vous êtes connecté en mode normal.');
      router.push('/'); 
    } else if (username === 'admin' && password === 'PortFolioInkToto59116') {
      setInfo('Vous êtes connecté en mode admin.');
      router.push('/admin'); 
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect. Utilisez "invite" pour accéder au portfolio.');
    }
  };

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl font-bold">PortInkFolio : Reagent</h1>
      </div>
      <div className="border-l border-gray-300 flex items-center justify-center p-8 mx-auto">
        <form onSubmit={handleLogin} className="w-80">
          <h2 className="text-3xl font-bold mb-6 text-center">Connectez-vous</h2>
          <p className="text-blue-500 text-xs italic mb-4">Utilisez "invite" comme nom d'utilisateur et mot de passe pour accéder au portfolio.</p>
          {info && <p className="text-green-500 text-xs italic mb-4">{info}</p>}
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`shadow-md appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} // Changement de couleur de fond selon le thème
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`shadow-md appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} // Changement de couleur de fond selon le thème
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;