const projects = [
  {
    icon: "✅",
    title: "Habit Tracker",
    description: `A clean, intuitive web app to build and track your habits.
    Features daily and weekly tracking and a minimal UI
    designed to keep you focused on what matters.`,
    tags: ["React", "Javascript", "CSS", "Node.js", "Express.js"],
    link: "https://habit-tracker-4419.netlify.app",
    linkContent: "Live App →",
  },
  {
    icon: "💻",
    title: "More on GitHub",
    description: `Explore all of my open-source work, experiments, and side projects.
    From UI components to full-stack applications — all publicly available on GitHub.`,
    tags: ["React", "Javascript", "CSS", "Node.js", "Express.js"],
    link: "https://github.com/robi4419",
    linkContent: "View GitHub →",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-label">Work</div>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="project-link">
              {project.linkContent}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
