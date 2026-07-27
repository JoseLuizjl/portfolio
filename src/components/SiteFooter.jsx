import portugueseResume from '../assets/File/Curriculo.pdf'
import englishResume from '../assets/File/Resume.pdf'

function SiteFooter({ t, language }) {
  const currentYear = new Date().getFullYear()
  const resumeFile = language === 'pt' ? portugueseResume : englishResume
  const resumeDownloadName = language === 'pt'
    ? 'Jose-Luiz-Arana-Curriculo.pdf'
    : 'Jose-Luiz-Arana-Resume.pdf'

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>{t.footer.brand}</strong>
        <p>© {currentYear} José Luiz Arana Almeida. {t.footer.rights}</p>
      </div>

      <nav className="footer-links" aria-label={t.footer.quickLinks}>
        <span>{t.footer.quickLinks}</span>
        <a href="#about">{t.footer.about}</a>
        <a href="#projects">{t.footer.projects}</a>
        <a href="#contact">{t.footer.contact}</a>
      </nav>

      <address className="footer-contact">
        <span>{t.footer.contactDetails}</span>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/jose-luiz-arana/"
            target="_blank"
            rel="noreferrer"
            aria-label={t.footer.linkedinAria}
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
            aria-label={t.footer.githubAria}
            title="GitHub"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.99c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="mailto:joseluizaranaalmeida@gmail.com"
            aria-label={t.footer.emailAria}
            title="Email"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6.5h16v11H4v-11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="m5 7.5 7 5 7-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={resumeFile}
            download={resumeDownloadName}
            aria-label={t.footer.resumeAria}
            title={t.footer.resumeTitle}
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
          </a>
        </div>
      </address>
    </footer>
  )
}

export default SiteFooter
