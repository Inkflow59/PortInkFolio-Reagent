import React from 'react';
import { useTranslation } from 'react-i18next';
import WindowsWindow from '../components/Layout/WindowsWindow';
import { Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <WindowsWindow title={t('contact.title')}>
      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.name')}
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#245EDC] focus:border-[#245EDC]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.email')}
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#245EDC] focus:border-[#245EDC]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#245EDC] focus:border-[#245EDC]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#245EDC] text-white py-2 px-4 rounded-lg hover:bg-[#3579F6] transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          {t('contact.send')}
        </button>
      </form>
    </WindowsWindow>
  );
};

export default Contact;