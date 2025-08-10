import React from 'react';
import { Project } from '../types/project';
import ProjectCard from './ProjectCard';

interface ProjectSectionProps {
  id: string;
  title: string;
  description: string;
  projects: Project[];
  onViewDocumentation: (projectId: string, projectTitle: string) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id, title, description, projects, onViewDocumentation }) => {
  const isAISection = id === 'ai-projects';
  
  return (
    <section id={id} className="relative py-24 overflow-hidden">
      {/* Section-specific background patterns */}
      <div className="absolute inset-0">
        {isAISection ? (
          <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/5 to-ai-pink/5"></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/5 to-ai-blue/5"></div>
        )}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="border-r border-ai-light-gray/20"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className={`px-4 py-2 rounded-full border font-mono text-sm ${
              isAISection 
                ? 'border-ai-purple/30 text-ai-purple bg-ai-purple/10' 
                : 'border-ai-cyan/30 text-ai-cyan bg-ai-cyan/10'
            }`}>
              {isAISection ? '[AI_MODULES]' : '[42_SYSTEM]'}
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-white mb-6">
            <span className={isAISection ? 'text-ai-purple' : 'text-ai-cyan'}>//</span> {title}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 font-mono leading-relaxed">
              <span className={isAISection ? 'text-ai-purple' : 'text-ai-cyan'}>/* </span>
              {description}
              <span className={isAISection ? 'text-ai-purple' : 'text-ai-cyan'}> */</span>
            </p>
          </div>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="relative max-w-lg mx-auto">
              <div className="bg-ai-card backdrop-blur-md border border-ai-light-gray/20 rounded-2xl p-12 shadow-ai-card">
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                    isAISection ? 'bg-ai-purple/20' : 'bg-ai-cyan/20'
                  }`}>
                    <svg className={`w-10 h-10 ${isAISection ? 'text-ai-purple' : 'text-ai-cyan'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-4">
                  <span className={isAISection ? 'text-ai-purple' : 'text-ai-cyan'}>[</span>
                  INITIALIZING...
                  <span className={isAISection ? 'text-ai-purple' : 'text-ai-cyan'}>]</span>
                </h3>
                <p className="text-gray-300 font-mono">
                  <span className={isAISection ? 'text-ai-purple' : 'text-ai-cyan'}>&gt;</span> Loading modules in progress...<br/>
                  <span className="text-gray-500">// Projects will deploy as development completes</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onViewDocumentation={onViewDocumentation} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;