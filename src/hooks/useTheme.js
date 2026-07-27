import { useEffect, useState } from 'react'

const legacyStorageKey = 'portfolio-theme'
const storageKey = 'portfolio-theme-mode'
const themes = {
  light: 'light',
  dark: 'dark',
  system: 'system',
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? themes.dark
    : themes.light
}

function getInitialMode() {
  const savedTheme = localStorage.getItem(storageKey)

  if (savedTheme === themes.light || savedTheme === themes.dark) {
    return savedTheme
  }

  return themes.system
}

function useTheme() {
  const [mode, setMode] = useState(getInitialMode)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const theme = mode === themes.system ? systemTheme : mode

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (mode === themes.system) {
      localStorage.removeItem(storageKey)
      localStorage.removeItem(legacyStorageKey)
      return
    }

    localStorage.setItem(storageKey, mode)
  }, [mode])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      setSystemTheme(event.matches ? themes.dark : themes.light)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  function toggleTheme() {
    setMode((currentMode) =>
      (currentMode === themes.system ? systemTheme : currentMode) === themes.dark
        ? themes.light
        : themes.dark,
    )
  }

  return {
    isDark: theme === themes.dark,
    mode,
    theme,
    toggleTheme,
  }
}

export default useTheme
