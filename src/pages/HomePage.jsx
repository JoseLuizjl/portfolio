import { useState } from 'react'
import imageScraperPreview from '../assets/imageScraper.png'
import portugueseResume from '../assets/File/Curriculo.pdf'
import englishResume from '../assets/File/Resume.pdf'
import profilePicture from '../assets/profilePicture.jpg'

function HomePage({ t }) {
  const [isResumeMenuOpen, setIsResumeMenuOpen] = useState(false)
  const home = t.home

  return (
    <>
      <section className="hero-section">
        <div className="profile-photo-placeholder">
          <img
            src={profilePicture}
            alt={home.photoAria}
            width="579"
            height="761"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="hero-copy">
          <h1>{home.title}</h1>
          <p className="lead hero-subtitle">{home.subtitle}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              {home.contactButton}
            </a>
            <a className="secondary-action" href="#projects">
              {home.projectsButton}
            </a>
          </div>

          <div className="hero-socials" aria-label={home.socialAria}>
            <a
              href="https://www.linkedin.com/in/jose-luiz-arana/"
              target="_blank"
              rel="noreferrer"
              aria-label={home.linkedinAria}
              title="LinkedIn"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.25 4a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 4Zm14.68 9.72c0-3.28-1.75-4.8-4.08-4.8-1.88 0-2.72 1.04-3.19 1.77V8.98H9.43V20h3.37v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.37l-.09-6.28Z" />
              </svg>
            </a>
            <a
              href="https://github.com/JoseLuizjl"
              target="_blank"
              rel="noreferrer"
              aria-label={home.githubAria}
              title="GitHub"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.99c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <div className="resume-download-menu">
              <button
                className="resume-toggle"
                type="button"
                aria-label={home.resumeButtonAria}
                aria-expanded={isResumeMenuOpen}
                onClick={() => setIsResumeMenuOpen((current) => !current)}
                title={home.resumeButtonAria}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 3v4a1 1 0 0 0 1 1h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 12.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0M13 11l1.5 6 1.5-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isResumeMenuOpen && (
                <div className="resume-popover" role="menu">
                  <span>{home.resumeMenuTitle}</span>
                  <a
                    href={englishResume}
                    download="Jose-Luiz-Arana-Resume.pdf"
                    role="menuitem"
                    onClick={() => setIsResumeMenuOpen(false)}
                  >
                    {home.resumeEnglish}
                  </a>
                  <a
                    href={portugueseResume}
                    download="Jose-Luiz-Arana-Curriculo.pdf"
                    role="menuitem"
                    onClick={() => setIsResumeMenuOpen(false)}
                  >
                    {home.resumePortuguese}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-title">
        <div className="about-copy">
          <h2 id="about-title">{home.aboutTitle}</h2>
          <p>{home.aboutText}</p>
        </div>

        <div className="education-block" aria-label={home.educationLabel}>
          <span>{home.educationLabel}</span>
          {home.education.map((item) => (
            <article key={item.school}>
              <strong>{item.school}</strong>
              <p>{item.course}</p>
              <small>{item.period}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="tech-section" aria-labelledby="technologies-title">
        <div className="section-heading">
          <span>{home.stackLabel}</span>
          <h2 id="technologies-title">{home.technologiesTitle}</h2>
        </div>

        <div className="tech-grid">
          {home.technologyGroups.map((group) => (
            <article className="tech-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tech-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="about-more-action">
        <a href="#about">
          {home.learnMoreAboutMe}
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14m0 0-5-5m5 5-5 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <section className="featured-projects-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <span>{home.projectsLabel}</span>
          <h2 id="projects-title">{home.projectsTitle}</h2>
        </div>

        <article className="featured-project-card">
          <div className="project-image-placeholder">
            <img
              src={imageScraperPreview}
              alt={home.projectImageAria}
              width="1891"
              height="930"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="featured-project-content">
            <span className="project-kicker">{home.projectKicker}</span>
            <h3>ImageScraper</h3>
            <p>{home.projectDescription}</p>

            <div className="project-tech-list" aria-label={home.projectTechAria}>
              {['Python', 'Selenium', 'Pandas', 'Flask', 'NumPy'].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              className="project-link"
              href="https://github.com/JoseLuizjl/ImageScraper"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.99c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
              {home.githubButton}
            </a>
          </div>
        </article>
      </section>

      <section className="experience-section" aria-labelledby="experiences-title">
        <div className="section-heading">
          <span>{home.careerLabel}</span>
          <h2 id="experiences-title">{home.experiencesTitle}</h2>
        </div>

        <div className="experience-timeline">
          {home.experiences.map((experience) => (
            <article className="experience-item" key={`${experience.role}-${experience.company}`}>
              <div className="experience-card">
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <time>{experience.period}</time>
            </article>
          ))}
        </div>
      </section>

      <div className="contact-more-action">
        <a href="#contact">
          {home.contactMore}
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14m0 0-5-5m5 5-5 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  )
}

export default HomePage
