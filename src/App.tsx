import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import { projects42 } from './data/projects42'
import { aiProjects } from './data/aiProjects'
import { Project } from './types/project'

function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    project: Project | null;
  }>({
    isOpen: false,
    project: null
  });

  const handleViewDocumentation = (projectId: string, _projectTitle: string) => {
    // Find the project from both datasets
    const allProjects = [...projects42, ...aiProjects];
    const project = allProjects.find(p => p.id === projectId);
    
    setModalState({
      isOpen: true,
      project: project || null
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      project: null
    });
  };
  return (
    <div className="min-h-screen bg-ai-black bg-ai-gradient overflow-hidden">
      {/* Animated background mesh */}
      <div className="fixed inset-0 bg-ai-mesh opacity-50 animate-pulse-slow"></div>
      
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-ai-cyan rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-ai-purple rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-ai-pink rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-ai-green rounded-full animate-float opacity-45" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <Hero />
          <ProjectSection 
            id="42-projects"
            title="42 Projects"
            description="Rigorous projects from the innovative 42 curriculum, focusing on system programming, algorithms, and software engineering fundamentals."
            projects={projects42}
            onViewDocumentation={handleViewDocumentation}
          />
          <ProjectSection 
            id="ai-projects"
            title="AI Agent Projects"
            description="Cutting-edge AI agent development projects showcasing machine learning, natural language processing, and intelligent automation solutions."
            projects={aiProjects}
            onViewDocumentation={handleViewDocumentation}
          />
        </main>
        <Footer />
      </div>
      
      <ProjectModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        project={modalState.project}
      />
    </div>
  )
}

export default App