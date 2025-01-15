import VConsole from 'vconsole'

function getQueryParam(name: string) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

// Read 'debug' parameter from URL, defaulting to 'false' if not present
const debugQueryParam = getQueryParam('debug') === 'true'

// Store the debug value in localStorage
localStorage.setItem('debug', debugQueryParam.toString())

// Retrieve the debug value from localStorage
const debugLocalStorage = localStorage.getItem('debug') === 'true'

// Include the retrieved debug value in the if clause
// if (config.environment !== 'production' || debugLocalStorage) {
export const vconsole = new VConsole({ theme: 'dark' })

console.info('vconsole initialized', vconsole)
