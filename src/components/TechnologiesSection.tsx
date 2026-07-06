import React from 'react';
import IconCloud from './IconCloud';

const TechnologiesSection: React.FC = () => {
  const technologies = [
    '/assets/icons/python.png',
    '/assets/icons/javascript.png',
    '/assets/icons/c++.png',
    '/assets/icons/c.png',
    '/assets/icons/docker.png',
    '/assets/icons/aws.png',
    '/assets/icons/google-cloud.png',
    '/assets/icons/github.png',
    '/assets/icons/fastAPI.png',
    '/assets/icons/langChain.png',
    '/assets/icons/openAI.webp',
    '/assets/icons/Claude_AI_logo.svg.png',
    '/assets/icons/crewAI.png',
    '/assets/icons/pydanticAI.png',
    '/assets/icons/solidity.svg',
    '/assets/icons/copilot.svg',
    '/assets/icons/n8n.svg',
  ];

  return (
    <section id="technologies" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Technologies I Master
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Interactive 3D cloud showcasing my technical expertise across 
            AI, cloud computing, and software development.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-lg">
            <IconCloud 
              images={technologies} 
              className="mx-auto"
            />
          </div>
        </div>
        
        <div className="mt-8 md:mt-16 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            Hover to interact with the technology cloud
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;