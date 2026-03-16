import { FaGithub } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-circle"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">React Developer</div>
        <h1 className="hero-name">
          Văsâi
          <br />
          <em>Robert</em>
        </h1>
        <p className="hero-desc">
          Motivated Computer Science graduate with hands-on experience in
          software testing and a strong foundation in full-stack web
          development. Adept at identifying software defects, collaborating on
          user-focused solutions, and quickly adapting to new technologies.
          Seeking a Software Developer role to contribute to a dynamic
          development team while continuing to grow as a software engineer.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <MdChevronRight /> View My Work
          </a>
          <a
            href="https://github.com/robi4419"
            target="_blank"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
