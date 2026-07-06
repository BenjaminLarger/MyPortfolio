import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Project } from '../types/project';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (isOpen && project) {
      loadMarkdownContent();
    }
  }, [isOpen, project]);

  const loadMarkdownContent = async () => {
    if (!project) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const url = `/${project.id}.md`;
      console.log('Fetching markdown from:', url);
      const response = await fetch(url);
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`Documentation not found: ${response.status}`);
      }
      const content = await response.text();
      console.log('Content preview:', content.substring(0, 200));
      setMarkdownContent(content);
    } catch (err) {
      setError('Failed to load documentation');
      console.error('Error loading markdown:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-ai-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-ai-card backdrop-blur-md border border-ai-light-gray/30 rounded-2xl max-w-7xl max-h-[90vh] w-full flex flex-col shadow-ai-card">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-ai-light-gray/20">
          <h2 className="text-2xl font-bold font-mono text-white flex items-center">
            <span className="text-ai-cyan">[</span>
            {project.title}
            <span className="text-ai-cyan">]</span>
            <span className="text-gray-400 text-lg ml-2">.docs</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-ai-cyan transition-colors p-2 rounded-lg hover:bg-ai-light-gray/20"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {/* Media Section - Video or Image */}
          {(project.videoUrl || project.imageUrl) && (
            <div className="lg:w-1/2 p-6 border-b lg:border-b-0 lg:border-r border-ai-light-gray/20 flex flex-col">
              <h3 className="text-lg font-semibold font-mono text-white mb-3 flex items-center">
                <span className="text-ai-purple">//</span>
                <span className="ml-2">{project.videoUrl ? 'project_demo.mp4' : 'preview.img'}</span>
              </h3>
              <div className="flex-1 bg-ai-dark rounded-xl overflow-hidden min-h-[250px] lg:min-h-[400px] border border-ai-light-gray/20">
                {project.videoUrl ? (
                  <video 
                    src={project.videoUrl} 
                    className="w-full h-full object-contain"
                    controls
                    muted
                    loop
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          )}

          {/* Documentation Section */}
          <div className={`flex-1 overflow-y-auto p-6 ${(project.videoUrl || project.imageUrl) ? 'lg:w-1/2' : 'w-full'}`}>
            <h3 className="text-lg font-semibold font-mono text-white mb-3 flex items-center">
              <span className="text-ai-green">//</span>
              <span className="ml-2">readme.md</span>
            </h3>
            {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ai-cyan"></div>
              <span className="ml-3 text-gray-300 font-mono">Loading documentation...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <div className="text-ai-pink mb-4">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-ai-pink font-medium font-mono">{error}</p>
              <p className="text-gray-400 text-sm mt-2 font-mono">
                <span className="text-gray-500">// Documentation for this project is not available yet.</span>
              </p>
            </div>
          )}

          {markdownContent && !isLoading && !error && (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-4 font-mono flex items-center"><span className="text-ai-cyan"># </span>{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold text-ai-cyan mb-3 mt-6 font-mono flex items-center"><span className="text-ai-cyan">## </span>{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-medium text-ai-purple mb-2 mt-4 font-mono flex items-center"><span className="text-ai-purple">### </span>{children}</h3>,
                  p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-300">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-300">{children}</ol>,
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                  code: ({ children, className }) => {
                    const isInline = !className?.includes('language-');
                    return isInline ? (
                      <code className="bg-ai-light-gray/30 px-2 py-1 rounded text-sm font-mono text-ai-cyan border border-ai-light-gray/20">
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-ai-black text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono border border-ai-light-gray/20">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => <pre className="mb-4">{children}</pre>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-ai-cyan pl-4 italic text-gray-400 mb-4 bg-ai-light-gray/10 py-2 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ai-cyan hover:text-ai-blue underline transition-colors"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-ai-light-gray/20 px-6 py-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-ai-cyan text-ai-black font-mono font-bold px-6 py-3 rounded-lg hover:bg-ai-blue transition-colors hover:scale-105 transform duration-200"
            >
              [CLOSE]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;