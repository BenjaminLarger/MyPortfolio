import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-ai-black border-t border-ai-light-gray/20 overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-ai-cyan/30 rounded-lg"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-ai-purple/30 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-ai-pink/30 rotate-45"></div>
        
        {/* Connection lines */}
        <div className="absolute top-20 left-20 w-32 h-px bg-gradient-to-r from-ai-cyan/30 to-transparent"></div>
        <div className="absolute right-36 top-28 w-px h-20 bg-gradient-to-b from-ai-purple/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center">
              <span className="text-ai-cyan">[</span>CONTACT<span className="text-ai-cyan">]</span>
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:benjaminlarger.bl@gmail.com" 
                className="group flex items-center text-gray-300 hover:text-ai-cyan transition-colors font-mono"
              >
                <div className="w-6 h-6 mr-3 bg-ai-light-gray/20 rounded-md flex items-center justify-center group-hover:bg-ai-cyan/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                benjaminlarger.bl@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="group flex items-center text-gray-300 hover:text-ai-blue transition-colors font-mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-6 h-6 mr-3 bg-ai-light-gray/20 rounded-md flex items-center justify-center group-hover:bg-ai-blue/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                </div>
                linkedin.connect()
              </a>
              <a 
                href="https://github.com/yourusername" 
                className="group flex items-center text-gray-300 hover:text-ai-green transition-colors font-mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-6 h-6 mr-3 bg-ai-light-gray/20 rounded-md flex items-center justify-center group-hover:bg-ai-green/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </div>
                github.repo()
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center">
              <span className="text-ai-purple">[</span>NAV.MENU<span className="text-ai-purple">]</span>
            </h3>
            <div className="space-y-4">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-ai-cyan transition-colors text-left font-mono hover:translate-x-1 transform transition-transform"
              >
                <span className="text-ai-cyan">&gt;</span> home()
              </button>
              <button 
                onClick={() => document.getElementById('42-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-ai-cyan transition-colors text-left font-mono hover:translate-x-1 transform transition-transform"
              >
                <span className="text-ai-cyan">&gt;</span> projects_42[]
              </button>
              <button 
                onClick={() => document.getElementById('ai-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-ai-purple transition-colors text-left font-mono hover:translate-x-1 transform transition-transform"
              >
                <span className="text-ai-purple">&gt;</span> ai_agents{}
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center">
              <span className="text-ai-green">[</span>README<span className="text-ai-green">]</span>
            </h3>
            <div className="bg-ai-card backdrop-blur-sm border border-ai-light-gray/20 rounded-xl p-4">
              <p className="text-gray-300 text-sm font-mono leading-relaxed">
                <span className="text-gray-500">/**</span><br/>
                <span className="text-gray-500"> * Software developer exploring</span><br/>
                <span className="text-gray-500"> * dual pathways: 42_MALAGA</span><br/>
                <span className="text-gray-500"> * curriculum + AI_AGENTS</span><br/>
                <span className="text-gray-500"> * development pipeline</span><br/>
                <span className="text-gray-500"> */</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative mt-16 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ai-cyan/30 to-transparent"></div>
          <div className="text-center">
            <p className="text-gray-400 text-sm font-mono">
              <span className="text-ai-cyan">$</span> echo "© {new Date().getFullYear()} | Built with React + TypeScript + TailwindCSS"
            </p>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-ai-green rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-mono">SYSTEM_ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;