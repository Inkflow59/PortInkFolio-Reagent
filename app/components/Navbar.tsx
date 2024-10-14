import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

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
    router.push('/'); // Redirige vers la page d'accueil
  };

  const handleIconClick = (path: string) => {
    router.push(path); // Redirige vers le chemin spécifié
  };

  return (
    <div className={`fixed bottom-0 w-full flex items-center justify-between p-1 ${theme === 'dark' ? 'bg-gray-900/70 text-white border-t border-white/70' : 'bg-white text-gray-800 border-t border-black'}`}> {/* Réduit le padding */}
      <div className="flex items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          onClick={handleLogoClick} 
          style={{ cursor: 'pointer' }} // Change le curseur au-dessus du logo
        >
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={40} // Réduit la taille du logo
            height={40} // Réduit la taille du logo
            className={`filter ${theme === 'dark' ? 'invert' : ''}`}
          />
        </motion.div>
        <button onClick={toggleTheme} className="ml-4 p-1 border rounded"> {/* Réduit la taille du bouton */}
          Changer le thème
        </button>
      </div>
      <div className="flex space-x-4 fixed left-1/2 transform -translate-x-1/2"> {/* Position fixe des icônes */}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`relative ${pathname === icon.path ? 'border-2 border-blue-500' : ''}`}
          style={{ cursor: 'pointer' }} // Change le curseur au-dessus de l'icône
          onClick={() => handleIconClick(icon.path)} // Ajout de l'appel à handleIconClick
        >
          <motion.img
            src={icon.src}
            alt={`Icon ${index + 1}`}
            className={`w-8 h-8 ${theme === 'dark' ? 'filter invert' : ''}`} // Agrandit la taille des icônes
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      ))}
      </div>
      <div className="text-lg">{currentTime}</div>
    </div>
  );
};

export default Navbar;