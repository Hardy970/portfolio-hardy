export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  languages: string[];
  githubUrl?: string;
  weight: number; // Plus le poids est élevé, plus le projet est mis en avant ⚖️
}