import profilePicture from '../assets/profilePicture.jpg'

function SkillIcon({ name }) {
  const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
  const icons = {
    Python: `${iconBase}/python/python-original.svg`,
    Java: `${iconBase}/java/java-original.svg`,
    Spring: `${iconBase}/spring/spring-original.svg`,
    Django: `${iconBase}/django/django-plain.svg`,
    Flask: `${iconBase}/flask/flask-original.svg`,
    PostgreSQL: `${iconBase}/postgresql/postgresql-original.svg`,
    Flutter: `${iconBase}/flutter/flutter-original.svg`,
    JavaScript: `${iconBase}/javascript/javascript-original.svg`,
    React: `${iconBase}/react/react-original.svg`,
    Dart: `${iconBase}/dart/dart-original.svg`,
    Pandas: `${iconBase}/pandas/pandas-original.svg`,
    'C++': `${iconBase}/cplusplus/cplusplus-original.svg`,
  }

  return <img src={icons[name]} alt="" loading="lazy" decoding="async" />
}

function SectionIcon({ type }) {
  const iconProps = {
    'aria-hidden': 'true',
    viewBox: '0 0 24 24',
    fill: 'none',
  }

  const strokeProps = {
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    summary: (
      <svg {...iconProps}>
        <path {...strokeProps} d="M5 5.5h14" />
        <path {...strokeProps} d="M5 10.5h10" />
        <path {...strokeProps} d="M5 15.5h7" />
        <path {...strokeProps} d="M18 14.5l1.5 1.5L18 17.5" />
      </svg>
    ),
    skills: (
      <svg {...iconProps}>
        <path {...strokeProps} d="m9 8-4 4 4 4" />
        <path {...strokeProps} d="m15 8 4 4-4 4" />
        <path {...strokeProps} d="m13 6-2 12" />
      </svg>
    ),
    work: (
      <svg {...iconProps}>
        <path {...strokeProps} d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
        <path {...strokeProps} d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
        <path {...strokeProps} d="M4 12h16" />
      </svg>
    ),
    certifications: (
      <svg {...iconProps}>
        <circle {...strokeProps} cx="12" cy="8" r="4" />
        <path {...strokeProps} d="M9.5 11.4 8 20l4-2 4 2-1.5-8.6" />
        <path {...strokeProps} d="m10.7 8 1 1 1.8-2" />
      </svg>
    ),
    education: (
      <svg {...iconProps}>
        <path {...strokeProps} d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path {...strokeProps} d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
        <path {...strokeProps} d="M21 9v5" />
      </svg>
    ),
  }

  return <span className="profile-heading-icon">{icons[type]}</span>
}

function ProfilePage({ t }) {
  const profile = t.profile
  const skills = [
    'Python',
    'Java',
    'Spring',
    'Django',
    'Flask',
    'PostgreSQL',
    'Flutter',
    'JavaScript',
    'React',
    'Dart',
    'Pandas',
    'C++',
  ]

  return (
    <section className="profile-page">
      <section className="profile-hero-card">
        <div className="profile-avatar-frame">
          <img
            src={profilePicture}
            alt={profile.photoAria}
            width="579"
            height="761"
            decoding="async"
          />
        </div>

        <div className="profile-hero-copy">
          <h1>{profile.title}</h1>
          <p>{profile.subtitle}</p>
          <div className="profile-tags" aria-label={profile.tagsAria}>
            {profile.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="profile-section-card professional-summary">
        <div className="profile-title-row">
          <SectionIcon type="summary" />
          <h2>{profile.summaryTitle}</h2>
        </div>
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <section className="profile-section-card">
        <div className="profile-section-heading">
          <span>{profile.skillsEyebrow}</span>
          <div className="profile-title-row">
            <SectionIcon type="skills" />
            <h2>{profile.skillsTitle}</h2>
          </div>
        </div>
        <div className="profile-skill-grid">
          {skills.map((skill) => (
            <article className="profile-skill-card" key={skill}>
              <span className="profile-skill-icon">
                <SkillIcon name={skill} />
              </span>
              <strong>{skill}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section-card">
        <div className="profile-section-heading">
          <span>{profile.workEyebrow}</span>
          <div className="profile-title-row">
            <SectionIcon type="work" />
            <h2>{profile.workTitle}</h2>
          </div>
        </div>
        <div className="profile-work-list">
          {profile.workExperiences.map((experience) => (
            <article className="profile-work-item" key={`${experience.role}-${experience.company}`}>
              <div>
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
              </div>
              <time>{experience.period}</time>
              <ul>
                {experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section-card">
        <div className="profile-section-heading">
          <span>{profile.certificationsEyebrow}</span>
          <div className="profile-title-row">
            <SectionIcon type="certifications" />
            <h2>{profile.certificationsTitle}</h2>
          </div>
        </div>
        <div className="certification-grid">
          {profile.certifications.map((certification) => (
            <article className="certification-card" key={certification.title}>
              <span className="certification-icon" aria-label={profile.institutionIconAria}>
                JL
              </span>
              <div>
                <h3>{certification.title}</h3>
                <p>{certification.technology}</p>
                <small>{profile.startedAt}: {certification.startedAt}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section-card education-section-card">
        <div className="profile-section-heading education-title">
          <span>{profile.educationEyebrow}</span>
          <div className="profile-title-row">
            <SectionIcon type="education" />
            <h2>{profile.educationTitle}</h2>
          </div>
        </div>
        <div className="profile-education-list">
          {profile.education.map((item) => (
            <article className="profile-education-item" key={item.school}>
              <div className="education-main">
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
                <time>{item.period}</time>
              </div>

              <div className="education-tags" aria-label={profile.learnedAria}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="education-activities">
                <strong>{profile.activitiesTitle}</strong>
                <ul>
                  {item.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProfilePage
