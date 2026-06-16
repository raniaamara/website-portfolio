import  { useEffect, useRef } from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiCapacitor, SiFirebase, SiSupabase, SiJavascript ,SiFigma} from 'react-icons/si';
import { MdTerminal } from 'react-icons/md';
import '../App.css';

const techs = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Capacitor", icon: <SiCapacitor size={32} /> },
  { name: "JS", icon: <SiJavascript size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
  { name: "Supabase", icon: <SiSupabase size={32} /> },
  { name: "GitHub", icon: <FaGithub size={32} /> },
  { name: "Figma", icon: <SiFigma size={32} /> },
  { name: "Automation", icon: <MdTerminal size={32} /> }
];

const TechStack = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          } else {
            // Remove class so it resets and can animate again on re-scroll
            entry.target.classList.remove('animate-reveal');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="tech-container">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="tech-grid" ref={gridRef}>
        {techs.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="tech-icon">{tech.icon}</div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;