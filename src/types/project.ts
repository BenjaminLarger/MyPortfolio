export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: '42-malaga' | 'ai-agents';
  featured: boolean;
  completionDate: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}