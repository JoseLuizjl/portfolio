import SectionIntro from '../components/SectionIntro'
import TagList from '../components/TagList'

function ProjectsPage({ t }) {
  const projectsPage = t.projectsPage

  return (
    <section className="content-grid projects-page">
      <SectionIntro eyebrow={projectsPage.eyebrow} title={projectsPage.title}>
        {projectsPage.intro}
      </SectionIntro>

      <div className="project-grid">
        {projectsPage.items.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <TagList items={project.stack} />
            <div className="project-footer">
              <span>{project.status}</span>
              <a
                className="project-github-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.99c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
                {projectsPage.githubButton}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
