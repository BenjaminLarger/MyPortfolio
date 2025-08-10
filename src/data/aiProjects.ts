import { Project } from '../types/project';

export const aiProjects: Project[] = [
  {
    id: 'apply-genius',
    title: 'GeniusApply - CV & Cover Letter Generator',
    description: 'AI-powered document generation system using CrewAI that automatically tailors CVs and cover letters for specific job applications. Features job analysis, skills matching, HTML generation, and PDF conversion with an interactive Streamlit UI.',
    technologies: ['Python', 'CrewAI', 'OpenAI API', 'Streamlit', 'Playwright', 'Poetry'],
    category: 'ai-agents',
    featured: true,
    completionDate: '2024-12-15',
    githubUrl: 'https://github.com/BenjaminLarger/ApplyGenius',
  },
  {
    id: 'sheet-agent',
    title: 'SheetAgent - Autonomous Spreadsheet Analysis',
    description: 'Advanced AI agent using LangGraph for autonomous spreadsheet reasoning and manipulation. Features a Planner-Sandbox architecture with Python code execution, SQL querying, and secure file operations. Built with FastAPI and Google Cloud integration.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'OpenAI API', 'FastAPI', 'Google Cloud', 'Docker'],
    category: 'ai-agents',
    featured: true,
    completionDate: '2024-11-20',
    githubUrl: 'https://github.com/BenjaminLarger/SheetAgent',
  },
];