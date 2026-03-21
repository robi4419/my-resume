import { useFetchProjects } from "../fetchProjects";

function Projects() {
  const { projects, isLoading } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="projects-section" id="projects">
        <div className="section-label">Work</div>
        <h2 className="section-title">My Projects</h2>
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="section-label">Work</div>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-hover-overlay">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn primary"
                >
                  Live App
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn secondary"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
