import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import  { useEffect } from 'react';
import AnimatedSection from "./AnimatedSection";

const ProjectCard = () => {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  const project = projectsData[projectId];

  if (!project) return <Navigate to="/" />;



  return (
    <div className="case-study-page">
      <Link to="/" className="back-btn">
        <FaRegArrowAltCircleLeft size={25} /> Back to Portfolio
      </Link>

    
        {/* 1. Header & Overview */}
        <header className="case-header">
          <h1>{project.title}</h1>
          <p className="pitch">{project.pitch}</p>
          <div className="meta-grid">
            <span><strong>Role:</strong> {project.role}</span>
            <span><strong>Tools:</strong> {project.stack?.join(', ')}</span>
           
          </div>
        </header>


      {/* 2. The Challenge & Solution */}
      <AnimatedSection className="challenge-solution">
        <div><h3>The Challenge</h3><p>{project.problem}</p></div>
        <div><h3>The Solution</h3><p>{project.solution}</p></div>
      </AnimatedSection>

      {/* 3. Key Features */}
      <AnimatedSection className="research">
        <h3>Key Features</h3>
        <div className="persona-cards-grid">
          {(project.highlights || []).map((h, i) => (
            <div key={i} className="persona-card">
              <strong>{h.title}</strong>
              <span>{h.desc}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 4. UX Process (Single Image) */}
      {project.uxProcess && (
        <AnimatedSection className="process">
          <h3>Design Walkthrough</h3>
          
            <div className="ux-process">
              <img src={project.uxProcess.img} alt="UX Process" />
              <p className="caption">{project.uxProcess.caption}</p>
       
          </div>
        </AnimatedSection>
      )}

      {/* 5. User Flow Diagram */}
      {project.userFlow && (
        <AnimatedSection className="user-flow">
          <h3>User Experience Flow</h3>
          <img src={project.userFlow.diagram} alt="User Flow Diagram" className="flow-diagram" />
          <p className="flow-desc">{project.userFlow.desc}</p>
        </AnimatedSection>
      )}

      {/* 6. Results & Takeaways */}
      <AnimatedSection className="results">
        <h3>Results</h3>
        {project.impact && <p><strong>Impact:</strong> {project.impact}</p>}
        <p><strong>What I Learned:</strong> {project.learnings}</p>
      </AnimatedSection>
    </div>
  );
};

export default ProjectCard;
