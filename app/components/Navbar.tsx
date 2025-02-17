import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Initial call

    return () => clearInterval(intervalId);
  }, []);

  const icons = [
    { src: '/icons/accueil.svg', path: '/desktop/accueil' },
    { src: '/icons/contact.svg', path: '/desktop/contact' },
    { src: '/icons/veille.svg', path: '/desktop/veille' },
    { src: '/icons/projects.svg', path: '/desktop/projets' }
  ];

  const handleLogoClick = () => {
    router.push('/login');
  };

  const handleIconClick = (path: string) => {
    if (pathname === path) {
      router.push('/desktop');
    } else {
      router.push(path);
    }
  };

  return (
    <div className={`fixed bottom-0 w-full z-50 flex items-center justify-between p-1 md:p-2 ${theme === 'dark' ? 'bg-gray-900/70 text-white border-t border-white/70' : 'bg-white text-gray-800 border-t border-black'}`}>
      <div className="flex items-center space-x-2 md:space-x-4">
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          onClick={handleLogoClick} 
          className="cursor-pointer"
        >
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className={`md:w-10 md:h-10 ${theme === 'dark' ? 'invert' : ''}`}
          />
        </motion.div>
        <ThemeToggle />
      </div>
      <div className="flex space-x-2 md:space-x-6 fixed left-1/2 transform -translate-x-1/2">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`relative ${pathname === icon.path ? 'border-b-2 border-black dark:border-white' : ''}`}
          onClick={() => handleIconClick(icon.path)}
        >
        <motion.img
            src={icon.src}
            alt={`Icon ${index + 1}`}
            className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${theme === 'dark' ? 'filter invert' : ''}`}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      ))}
      </div>
      <div className="text-sm md:text-lg">{currentTime}</div>
    </div>
  );
};

export default Navbar;