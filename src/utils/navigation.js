import { pages } from '../data/portfolio'

const hashAliases = {
  inicio: 'home',
  perfil: 'about',
  projetos: 'projects',
  contato: 'contact',
}

function getNormalizedPageId(pageId) {
  return hashAliases[pageId] ?? pageId
}

export function getPageFromHash() {
  const hash = window.location.hash.replace('#', '')
  const pageId = getNormalizedPageId(hash)
  return pages.some((page) => page.id === pageId) ? pageId : 'home'
}

export function normalizeHashInUrl() {
  const hash = window.location.hash.replace('#', '')
  const pageId = getNormalizedPageId(hash)
  const isKnownPage = pages.some((page) => page.id === pageId)

  if (!hash || !isKnownPage) {
    return 'home'
  }

  if (hash === pageId) {
    return pageId
  }

  const url = new URL(window.location.href)
  url.hash = pageId
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)

  return pageId
}

export function getPageLabel(pageId, t) {
  return t?.nav?.[pageId] ?? pages.find((page) => page.id === pageId)?.label ?? 'Home'
}
