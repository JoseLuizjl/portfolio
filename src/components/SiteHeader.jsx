import LanguageMenu from './LanguageMenu'
import ThemeToggle from './ThemeToggle'

const pageIds = ['home', 'about', 'projects', 'contact']

function SiteHeader({
  activePage,
  isDarkTheme,
  onToggleTheme,
  language,
  onChangeLanguage,
  isScrolled,
  t,
}) {
  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label={t.header.homeAria}>
        José Luiz Arana Almeida
      </a>

      <nav className="main-nav" aria-label={t.header.navAria}>
        {pageIds.map((pageId) => (
          <a
            key={pageId}
            className={activePage === pageId ? 'active' : ''}
            href={`#${pageId}`}
          >
            {t.nav[pageId]}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageMenu
          language={language}
          onChangeLanguage={onChangeLanguage}
          labels={t.meta}
        />
        <ThemeToggle
          isDark={isDarkTheme}
          onToggle={onToggleTheme}
          labels={t.theme}
        />
      </div>
    </header>
  )
}

export default SiteHeader
