import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import useTheme from './hooks/useTheme'
import HomePage from './pages/HomePage'
import {
  detectPreferredLanguage,
  getLanguageFromUrl,
  getTranslations,
  setLanguageInUrl,
} from './i18n'
import {
  getPageFromHash,
  getPageLabel,
  normalizeHashInUrl,
} from './utils/navigation'
import './App.css'

const ContactPage = lazy(() => import('./pages/ContactPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))

const pageComponents = {
  home: HomePage,
  about: ProfilePage,
  projects: ProjectsPage,
  contact: ContactPage,
}

function PageLoader({ label }) {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader-spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash)
  const [language, setLanguage] = useState(detectPreferredLanguage)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = previousScrollRestoration
      }
    }
  }, [])

  useEffect(() => {
    if (!getLanguageFromUrl()) {
      setLanguageInUrl(language, { replace: true })
    }

    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  useEffect(() => {
    normalizeHashInUrl()

    const handleHashChange = () => setActivePage(normalizeHashInUrl())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [activePage])

  useEffect(() => {
    const handlePopState = () => {
      const urlLanguage = getLanguageFromUrl()
      if (urlLanguage) setLanguage(urlLanguage)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 360)
      setIsScrolled(scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChangeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    setLanguageInUrl(nextLanguage)
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = useMemo(() => getTranslations(language), [language])
  const Page = pageComponents[activePage] ?? HomePage
  const pageTitle = useMemo(() => getPageLabel(activePage, t), [activePage, t])

  return (
    <div className="site-shell">
      <SiteHeader
        activePage={activePage}
        isDarkTheme={isDark}
        onToggleTheme={toggleTheme}
        language={language}
        onChangeLanguage={handleChangeLanguage}
        isScrolled={isScrolled}
        t={t}
      />
      <main key={activePage} className="page-view" aria-label={pageTitle}>
        <Suspense fallback={<PageLoader label={t.meta.loading} />}>
          <Page t={t} language={language} />
        </Suspense>
      </main>
      {showScrollTop && (
        <button
          className="scroll-top-button"
          type="button"
          aria-label={t.meta.scrollTop}
          title={t.meta.scrollTop}
          onClick={handleScrollTop}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5m0 0-6 6m6-6 6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <SiteFooter t={t} language={language} />
    </div>
  )
}

export default App
