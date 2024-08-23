import * as fs from 'fs'
import path from 'path'

export function parseFile(filePath: string) {
  try {
    const fullPath = getFilePath(filePath)
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  } catch (error) {
    console.error('Failed to parse file,\nERROR:', (error as Error).message)
    return undefined
  }
}

export function getFilePath(filePath: string) {
  const root = path.resolve(`./`)
  const vercel = process.env.VERCEL
  const fullPath = path.join(root, filePath)
  // console.log('🍓 file paths', { root, vercel, filePath, fullPath, __dirname })
  return fullPath
}
