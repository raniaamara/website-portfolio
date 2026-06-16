import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProjectList from './components/ProjectList';
import ContactFooter from './components/ContactFooter';
import ProjectCard from './components/ProjectCard'; // You will create this file
import './App.css';

// Home component to hold your current layout
const Home = () => (
  <div className="main-container">
    <section id="hero"><Hero /></section>
    <section id="tech"><TechStack /></section>
    <section id="projects"><ProjectList /></section>
    <section id="contact"><ContactFooter /></section>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route: /case-study/todo, /case-study/aura, etc */}
        <Route path="/case-study/:projectId" element={<ProjectCard />} />
      </Routes>
    </Router>
  );
}

export default App;