export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'game' | 'web';
  technologies: string[];
  link?: string;
}