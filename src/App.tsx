import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import { projects42 } from './data/projects42'
import { aiProjects } from './data/aiProjects'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectSection 
          id="42-projects"
          title="42 Malaga Projects"
          description="Rigorous projects from the innovative 42 curriculum, focusing on system programming, algorithms, and software engineering fundamentals."
          projects={projects42}
        />
        <ProjectSection 
          id="ai-projects"
          title="AI Agent Projects"
          description="Cutting-edge AI agent development projects showcasing machine learning, natural language processing, and intelligent automation solutions."
          projects={aiProjects}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App