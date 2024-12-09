import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogOut, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const handleExit = () => {
    onClose();
    window.close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-12 left-0 w-64 bg-[#ECE9D8] rounded-t-lg shadow-xl border-2 border-[#0054E3] overflow-hidden"
        >
          <div className="bg-[#0054E3] p-4">
            <div className="flex items-center gap-3">
              <Monitor className="w-8 h-8 text-white" />
              <span className="text-white font-bold">TomOS</span>
            </div>
          </div>
          
          <div className="p-2">
            <button
              onClick={handleExit}
              className="w-full flex items-center gap-3 p-2 hover:bg-[#3579F6] hover:text-white rounded transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Quitter le portfolio</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartMenu;