const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "SQL",
  "Node.js",
  "Express.js",
  "ASP.NET MVC",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
  "Microsoft Office Suite",
  "Fast learner",
  "Team-oriented",
  "Adaptable",
  "Strong problem-solving",
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="section-label">Toolkit</div>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              <span className="skill-dot"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
