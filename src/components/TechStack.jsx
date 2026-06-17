import AnimatedSection from "./AnimatedSection";
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

  return (
<section id="tech" className="tech-container">
  <h2 className="section-title">My Tech Stack</h2>

  <div className="tech-grid">
    {techs.map((tech, index) => (
      <AnimatedSection
        key={index}
        className="tech-card"
        
      >
        <div className="tech-icon">
          {tech.icon}
        </div>

        <p>{tech.name}</p>
      </AnimatedSection>
    ))}
  </div>
</section>
  );
};

export default TechStack;