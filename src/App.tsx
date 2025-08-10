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
    <div className="min-h-screen">
      <Header />
      <main>
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
      
      <ProjectModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        project={modalState.project}
      />
    </div>
  )
}

export default App