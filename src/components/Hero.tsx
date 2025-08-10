import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-ai-cyan to-transparent"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-ai-purple to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-ai-pink to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-ai-green to-transparent"></div>
      </div>
      
      {/* Glowing orb */}
      <div className="absolute top-1/3 right-1/5 w-32 h-32 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink animate-glow">
              [NEURAL_INIT]
              <span className="block text-4xl sm:text-5xl md:text-6xl mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Portfolio.exe
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-ai-cyan font-mono text-sm">
              <div className="w-2 h-2 bg-ai-cyan rounded-full animate-pulse"></div>
              <span>SYSTEM_STATUS: ONLINE</span>
              <div className="w-2 h-2 bg-ai-green rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
              <span className="text-ai-cyan">&gt;</span> Software Developer | AI Enthusiast | Innovation Catalyst
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="relative p-6 bg-ai-card backdrop-blur-md border border-ai-light-gray/20 rounded-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                <span className="text-ai-cyan">$</span> cat mission.txt<br/>
                <span className="text-gray-500"># Exploring dual pathways:</span><br/>
                • <span className="text-ai-cyan font-semibold">42_PROJECTS</span> → System-level mastery<br/>
                • <span className="text-ai-purple font-semibold">AI_AGENT_DEVELOPMENT</span> → Future intelligence<br/>
                <span className="text-gray-500"># Each iteration pushes boundaries of possibility</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => document.getElementById('42-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-ai-cyan to-ai-blue text-ai-black font-mono font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-ai-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan to-ai-blue opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">[LOAD_42_MODULES]</span>
              </button>
              <button 
                onClick={() => document.getElementById('ai-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 border-2 border-ai-purple text-ai-purple font-mono font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-ai-purple hover:text-ai-black"
              >
                <div className="absolute inset-0 bg-ai-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">[INIT_AI_SYSTEMS]</span>
              </button>
            </div>
          </div>
          
          <div className="pt-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-xs text-ai-cyan font-mono animate-pulse">SCROLL_TO_EXPLORE</div>
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-ai-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;