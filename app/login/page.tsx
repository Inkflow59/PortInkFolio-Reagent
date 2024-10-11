"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('Utilisez "invite" comme nom d\'utilisateur et mot de passe pour accéder au portfolio.');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'authentification ici
    if (username === 'invite' && password === 'invite') {
      setInfo('Vous êtes connecté en mode normal.');
      router.push('/'); // Redirige vers le portfolio
    } else if (username === 'admin' && password === 'PortFolioInkToto59116') {
      setInfo('Vous êtes connecté en mode admin.');
      router.push('/admin'); // Redirige vers la page admin (à créer)
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect. Utilisez "invite" accéder au portfolio.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Connectez-vous à InkflOS</h2>
        {info && <p className="text-green-500 text-xs italic mb-4">{info}</p>} // Ajoutez cette ligne ici
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-md appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-md appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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