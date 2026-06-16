import  { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactFooter = () => {
  const [state, handleSubmit] = useForm("xpqebnwq");
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle the 'visible' class based on intersection
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the footer is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={footerRef} id="contact" className="contact-footer fade-wrapper">
      <h2>Contact me to sizzle your project !</h2>
      <p>Feel free to contact me if having any questions.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        
        <input id="email" type="email" name="email" placeholder="Email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea id="message" name="message" placeholder="Work Description..." required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default ContactFooter;