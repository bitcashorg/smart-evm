declare var window: any

export function getSiteUrl() {
  if (!window) throw new Error('window not found')
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}`
}
