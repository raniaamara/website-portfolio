import '../App.css';
import myPhoto from '../assets/my-photo.png';
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">

      <AnimatedSection className="hero-left">
        <span className="hero-greeting">
          Hi, I'm Rania Amara
        </span>

        <h1>
          Mobile App Developer | React + Capacitor
        </h1>

        <p className="hero-subtext">
          Passionate developer dedicated to building seamless mobile experiences
          with React and Capacitor, turning complex ideas into intuitive,
          native-ready applications.
        </p>

        <a href="#contact" className="btn-primary">
          Contact Me
        </a>
      </AnimatedSection>

      <AnimatedSection
        className="hero-right"
        delay={0.2}
      >
        <img
          src={myPhoto}
          alt="Rania Amara"
          className="profile-img"
        />
      </AnimatedSection>

    </section>
  );
};

export default Hero;