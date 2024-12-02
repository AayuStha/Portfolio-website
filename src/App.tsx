import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 text-white relative">
      <ParticlesBackground />
      <Navbar />
      <div className="relative z-10">
        <section id="home" className="min-h-screen"><Hero /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="projects" className="min-h-screen"><Projects /></section>
        <section id="experience" className="min-h-screen"><Experience /></section>
        <section id="skills" className="min-h-screen"><Skills /></section>
        <section id="contact" className="min-h-screen"><Contact /></section>
      </div>
    </div>
  );
}

export default App;