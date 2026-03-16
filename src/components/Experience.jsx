const timeline = [
  {
    date: "2023 — Present",
    role: "React Developer",
    company: "Self-taught / Personal Projects",
    description: `Deep-dived into modern JavaScript, React ecosystem, and frontend best practices. 
              Building responsive, performant web applications with React.
              Focused on clean component architecture, state management, and
              delivering polished user experiences.`,
  },
  {
    date: "2022 — Present",
    role: "Game Tester",
    company: "Electronic Arts (Remote)",
    description: `Identified and documented over 150+ software bugs and defects.
              Collaborated with QA and development teams to enhance software quality.
              Performed usability testing and provided detailed feedback on user experience.
              Used debugging tools to analyze and resolve performance issues.`,
  },
];

function Experience() {
  return (
    <section class="experience-section" id="experience">
      <div class="experience-inner">
        <div class="section-label">Background</div>
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          {timeline.map((item) => (
            <div class="timeline-item">
              <div class="timeline-date">{item.date}</div>
              <div class="timeline-role">{item.role}</div>
              <div class="timeline-company">{item.company}</div>
              <div class="timeline-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
