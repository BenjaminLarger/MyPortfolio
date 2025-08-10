import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-ai-black/80 backdrop-blur-md z-50 border-b border-ai-light-gray/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-ai-cyan to-ai-purple rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-ai-black rounded-sm"></div>
              </div>
              <h1 className="text-xl font-bold font-mono text-white">
                <span className="text-ai-cyan">[</span>
                PORTFOLIO
                <span className="text-ai-cyan">]</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('home')}
                className="group relative px-4 py-2 text-gray-300 hover:text-ai-cyan font-mono text-sm transition-all duration-300 hover:bg-ai-light-gray/20 rounded-lg"
              >
                <span className="relative z-10">home()</span>
                <div className="absolute inset-0 bg-ai-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <span className="text-ai-light-gray font-mono text-sm">|</span>
              <button
                onClick={() => scrollToSection('42-projects')}
                className="group relative px-4 py-2 text-gray-300 hover:text-ai-cyan font-mono text-sm transition-all duration-300 hover:bg-ai-light-gray/20 rounded-lg"
              >
                <span className="relative z-10">projects_42[]</span>
                <div className="absolute inset-0 bg-ai-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <span className="text-ai-light-gray font-mono text-sm">|</span>
              <button
                onClick={() => scrollToSection('ai-projects')}
                className="group relative px-4 py-2 text-gray-300 hover:text-ai-purple font-mono text-sm transition-all duration-300 hover:bg-ai-light-gray/20 rounded-lg"
              >
                <span className="relative z-10">ai_agents{}</span>
                <div className="absolute inset-0 bg-ai-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <span className="text-ai-light-gray font-mono text-sm">|</span>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-4 py-2 text-gray-300 hover:text-ai-green font-mono text-sm transition-all duration-300 hover:bg-ai-light-gray/20 rounded-lg"
              >
                <span className="relative z-10">contact()</span>
                <div className="absolute inset-0 bg-ai-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-ai-cyan hover:text-ai-purple transition-colors p-2 rounded-lg hover:bg-ai-light-gray/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;