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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-7xl max-h-[90vh] w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{project.title} - Documentation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {/* Video Section */}
          {project.videoUrl && (
            <div className="lg:w-1/2 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Demo</h3>
              <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden min-h-[250px] lg:min-h-[400px]">
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
              </div>
            </div>
          )}

          {/* Documentation Section */}
          <div className={`flex-1 overflow-y-auto p-6 ${project.videoUrl ? 'lg:w-1/2' : 'w-full'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Documentation</h3>
            {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading documentation...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-600 font-medium">{error}</p>
              <p className="text-gray-500 text-sm mt-2">
                Documentation for this project is not available yet.
              </p>
            </div>
          )}

          {markdownContent && !isLoading && !error && (
            <div className="prose prose-gray max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                  code: ({ children, className }) => {
                    const isInline = !className?.includes('language-');
                    return isInline ? (
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => <pre className="mb-4">{children}</pre>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
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
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;