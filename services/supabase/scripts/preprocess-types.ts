import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

function preprocessTypes() {
  const inputPath = join(import.meta.dir, '..', 'src', 'supa.types.ts')
  const outputPath = join(
    import.meta.dir,
    '..',
    'src',
    'supa.types.preprocessed.ts',
  )

  let content = readFileSync(inputPath, 'utf8')

  // Remove the specific part
  content = content.replace(/supabase_url:\s*{[^}]*},?/g, '')

  // Remove any empty Database interface that might result
  content = content.replace(/interface\s+Database\s*{\s*}/g, '')

  writeFileSync(outputPath, content)

  console.log('Preprocessed types file created successfully.')
}

preprocessTypes()
