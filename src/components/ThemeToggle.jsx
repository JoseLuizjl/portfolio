function ThemeToggle({ isDark, onToggle, labels }) {
  const label = isDark ? labels.dark : labels.light

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      aria-pressed={isDark}
      onClick={onToggle}
      title={label}
    >
      <svg
        aria-hidden="true"
        className="theme-toggle-icon"
        viewBox="0 0 24 24"
        fill="none"
      >
        {isDark ? (
          <>
            <path
              d="M18.7 15.4A7.4 7.4 0 0 1 8.6 5.3 8.1 8.1 0 1 0 18.7 15.4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4 4.5h.01M19 7.1h.01"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </button>
  )
}

export default ThemeToggle
