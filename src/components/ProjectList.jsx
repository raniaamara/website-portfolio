import AnimatedSection from "./AnimatedSection";
import '../App.css';
import img1 from '../assets/osecours.svg'; 
import img2 from '../assets/todo.svg';
import img3 from '../assets/aura.svg';
import googlePlayLogo from '../assets/google-play-store-icon.svg';
import { Link } from 'react-router-dom';
const projects = [
  { slug: "todo",name: "ToDo", desc: "A simple to do list & daily planner.", img: img2, link: "https://play.google.com/store/apps/details?id=com.rania.todoapp", caseStudy: "#" ,figmaLink:'https://www.figma.com/design/xYHmW1W7Qlv9AzxG9YtomH/iPhone-16-and-16-Plus-Mockups--Community-?node-id=3-1023&t=iaPDCxvmcdBHtBmi-1'},
  {slug: "osecours", name: "Osecours", desc: "Fast Emergency Aid & SOS alerts.", img: img1, link: "https://play.google.com/store/apps/details?id=com.rania.emergencyaid", caseStudy: "#",figmaLink: 'https://www.figma.com/design/vgSGB13VsfixqUeupbC0Fy/Food-Couriers---Food-Delivery-App---UI-UX-Design-Case-Study--Community-?node-id=1-9400&t=0YXVXJGS9TE0j7kW-1'},
  {slug: "aura", name: "Aura", desc: "Meditation & Zen personal sanctuary.", img: img3, link: "https://play.google.com/store/apps/details?id=com.rania.aurazen", caseStudy: "#" ,figmaLink:'https://www.figma.com/design/rglYESWir1NqFgGYY4hIu5/Task-management---to-do-list-app--Community-?node-id=0-1&t=RFV07PMIeiVES5Ha-1'},
];

const ProjectList = () => {


  return (
    <section id="projects" className="project-container">
      <h2 className="section-title">The Apps (Play Store Live)</h2>
      <div className="project-list">
        {projects.map((proj) => (
        <AnimatedSection
        key={proj.slug}
        
        className="project-card" 
         
          >
            
<a href={proj.figmaLink} target="_blank" rel="noopener noreferrer" >
      <img src={proj.img} alt={proj.name}  className="project-img" />
    </a>
            <div className="project-info">
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} className="btn-store">
                <img src={googlePlayLogo} alt="Google Play" className="store-icon" />
                Get on Google Play
              </a>
             <Link to={`/case-study/${proj.slug}`} className="btn-outline">
                View Case Study
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;