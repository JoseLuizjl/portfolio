import { useState } from 'react'

function LanguageMenu({ language, onChangeLanguage, labels }) {
  const [isOpen, setIsOpen] = useState(false)
  const options = [
    { id: 'en', label: 'English' },
    { id: 'pt', label: 'Português BR' },
  ]

  const handleSelect = (nextLanguage) => {
    onChangeLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <div className="language-menu">
      <button
        className="language-toggle"
        type="button"
        aria-label={labels.languageMenu}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        title={labels.languageMenu}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h10M9 4v2m2.5 0c-.9 3-2.9 5.5-5.5 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 10c1 1.4 2.2 2.5 3.8 3.4M14 20l1.1-3m0 0L17 12l1.9 5m-3.8 0h3.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-popover" role="menu">
          <span>{labels.currentLanguage}: {labels.languageName}</span>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={language === option.id ? 'active' : ''}
              onClick={() => handleSelect(option.id)}
              role="menuitem"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageMenu
