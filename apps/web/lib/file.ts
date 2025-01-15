import * as fs from 'fs'
import path from 'path'

export function parseFile(filePath: string) {
  const fullPath = getFilePath(filePath)
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'))
}

export function getFilePath(filePath: string) {
  const root = path.resolve(`./`)
  const vercel = process.env.VERCEL
  const fullPath = path.join(root, filePath)
  // console.log('🍓 file paths', { root, vercel, filePath, fullPath, __dirname })
  return fullPath
}
