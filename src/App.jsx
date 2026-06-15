import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Journey />
      <Achievements />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}
