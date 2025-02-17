"use client";

import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from '../../components/Navbar';

const ContactPage = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    // Remplacez cette URL par votre endpoint d'envoi d'e-mail
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      setSuccess('Votre message a été envoyé avec succès !');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setError('Une erreur est survenue lors de l\'envoi de votre message.');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-gradient-to-r from-black to-gray-800 text-white' : 'bg-gradient-to-r from-blue-200 to-white text-black'}`}>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-6 md:py-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Un problème ? Contactez-moi</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`shadow-md appearance-none border border-gray-400 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white focus:bg-gray-700' : 'bg-white text-gray-800'}`}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold" htmlFor="subject">Objet</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`shadow-md appearance-none border border-gray-400 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white focus:bg-gray-700' : 'bg-white text-gray-800'}`}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className={`shadow-md appearance-none border border-gray-400 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white focus:bg-gray-700' : 'bg-white text-gray-800'}`}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Envoyer
          </button>
        </form>
        {success && <p className="text-green-500 text-sm md:text-base mt-4">{success}</p>}
        {error && <p className="text-red-500 text-sm md:text-base mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ContactPage;