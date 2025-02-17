import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`text-xl md:text-2xl p-2 rounded-full border-2 ${theme === 'dark' ? 'border-white/70 hover:border-white' : 'border-gray-400 hover:border-gray-600'} transition-colors ${className}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;