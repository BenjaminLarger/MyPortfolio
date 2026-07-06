import React from 'react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onViewDocumentation: (projectId: string, projectTitle: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDocumentation }) => {
  return (
    <div 
      className="relative group bg-ai-card backdrop-blur-md border border-ai-light-gray/20 rounded-xl shadow-ai-card hover:shadow-ai-hover transition-all duration-500 overflow-hidden cursor-pointer hover:border-ai-cyan/40 hover:bg-ai-card/80"
      onClick={() => onViewDocumentation(project.id, project.title)}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/20 via-ai-purple/20 to-ai-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
      </div>
      
      <div className="relative z-10">
      {project.videoUrl && (
        <div className="h-48 bg-ai-dark overflow-hidden relative">
          <video 
            src={project.videoUrl} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            controls
            muted
            loop
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ai-dark/20 to-transparent"></div>
        </div>
      )}
      {!project.videoUrl && project.imageUrl && (
        <div className="h-48 bg-ai-dark overflow-hidden relative">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ai-dark/20 to-transparent"></div>
        </div>
      )}
      
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white font-mono line-clamp-1">{project.title}</h3>
            {project.featured && (
              <span className="bg-ai-cyan/20 text-ai-cyan text-xs font-medium px-3 py-1 rounded-full border border-ai-cyan/40 animate-glow">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-ai-light-gray/50 text-ai-cyan text-xs font-medium px-3 py-1 rounded-full border border-ai-light-gray/30 hover:border-ai-cyan/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs text-gray-400 font-mono">
              {new Date(project.completionDate).toLocaleDateString()}
            </div>
            
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ai-cyan transition-colors duration-300 hover:scale-110 transform"
                  title="View Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Highlighted GitHub Repository Link */}
          <div className="border-t border-ai-light-gray/20 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-ai-cyan/10 to-ai-purple/10 hover:from-ai-cyan/20 hover:to-ai-purple/20 border border-ai-cyan/30 hover:border-ai-cyan/50 rounded-lg py-3 px-4 transition-all duration-300 group/github"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5 text-ai-cyan group-hover/github:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium group-hover/github:text-ai-cyan transition-colors duration-300">
                  View Repository
                </span>
                <svg className="w-4 h-4 text-ai-cyan group-hover/github:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {!project.githubUrl && (
              <div
                className="flex items-center justify-center gap-3 w-full bg-gray-800/50 border border-gray-600/30 rounded-lg py-3 px-4 cursor-not-allowed group/github"
                title="Repository is private"
              >
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 font-medium">
                  Private Repository
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;