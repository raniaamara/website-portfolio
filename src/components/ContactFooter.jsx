import { useForm, ValidationError } from '@formspree/react';
import AnimatedSection from "./AnimatedSection";

const ContactFooter = () => {
  const [state, handleSubmit] = useForm("xpqebnwq");

  // If the form was submitted successfully, show a thank you message
  if (state.succeeded) {
    return (
      <AnimatedSection>
        <section id="contact" className="contact-footer">
          <h2>Message sent!</h2>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </section>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <section id="contact" className="contact-footer">
        <h2>Contact me to sizzle your project !</h2>
        <p>Feel free to contact me if having any questions.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <textarea
            id="message"
            name="message"
            placeholder="Work Description..."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>
    </AnimatedSection>
  );
};

export default ContactFooter;