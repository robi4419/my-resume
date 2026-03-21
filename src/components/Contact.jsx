import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let's work together</h2>
        <p className="contact-subtitle">
          Open to new opportunities, collaborations, and interesting projects.
          Reach out through any of the links below.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/robi4419"
            target="_blank"
            className="social-btn"
          >
            <FaGithub size="1.25rem" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/robert-vasai-9a6895284"
            target="_blank"
            className="social-btn"
          >
            <FaLinkedin size="1.25rem" />
            LinkedIn
          </a>
          <a href="mailto:vasairobert@yahoo.com" className="social-btn">
            <MdEmail size="1.25rem" />
            vasairobert@yahoo.com
          </a>
          <a className="social-btn">
            <FaPhone size="1rem" />
            +40 732 542 089
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
