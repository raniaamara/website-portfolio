import { useEffect, useRef } from 'react';
import '../App.css';
import myPhoto from '../assets/my-photo.png';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          } else {
            entry.target.classList.remove('animate-reveal');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero-container">
      {/* Left side: Text content */}
      <div className="hero-left">
        <span className="hero-greeting fade-in">Hi, I'm Rania Amara</span>
        <h1 className="fade-in">Mobile App Developer | React + Capacitor</h1>
        <p className="hero-subtext fade-in">
          Passionate developer dedicated to building seamless mobile experiences with React and Capacitor, turning complex ideas into intuitive, native-ready applications.
        </p>
      <a href="#contact" className="btn-primary fade-in">Contact Me</a>
      </div>

      {/* Right side: Image */}
      <div className="hero-right">
        <img src={myPhoto} alt="Rania Amara" className="profile-img fade-in" />
      </div>
    </section>
  );
};

export default Hero;