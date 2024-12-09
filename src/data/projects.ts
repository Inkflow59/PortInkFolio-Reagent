import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'hos',
    title: 'Heroes of Songs: J.V',
    description: 'Un jeu vidéo musical épique',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
    category: 'game',
    technologies: ['Unity', 'C#', 'FMOD'],
  },
  {
    id: 'mysterious-bot',
    title: 'Mysterious Bot: Reinitialized',
    description: 'Une aventure robotique unique',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    category: 'game',
    technologies: ['Unreal Engine', 'C++'],
  },
  {
    id: 'relics',
    title: 'Relics of Sokal: The Divine Call',
    description: 'Un RPG mystique et immersif',
    image: 'https://images.unsplash.com/photo-1519669417670-68775a50919c',
    category: 'game',
    technologies: ['Unity', 'C#'],
  },
  {
    id: 'portinkfolio',
    title: 'PortInkFolio',
    description: 'Portfolio innovant avec des animations à l\'encre',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    id: 'hos-website',
    title: 'HoS Website',
    description: 'Site officiel de Heroes of Songs',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    category: 'web',
    technologies: ['Next.js', 'TailwindCSS'],
  },
  {
    id: 'rpg-creator',
    title: 'RolePlay Game: Character Creator',
    description: 'Créateur de personnages pour jeux de rôle',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
];