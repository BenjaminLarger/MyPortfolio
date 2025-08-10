import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Welcome to My
              <span className="block text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              Software Developer passionate about creating innovative solutions
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore my journey through two distinct paths: rigorous projects from 
              <span className="font-semibold text-blue-600"> 42 Malaga</span> and 
              cutting-edge <span className="font-semibold text-blue-600">AI Agent</span> development.
              Each project represents a step forward in my commitment to excellence in software engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('42-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View 42 Projects
              </button>
              <button 
                onClick={() => document.getElementById('ai-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore AI Agents
              </button>
            </div>
          </div>
          
          <div className="pt-8">
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;