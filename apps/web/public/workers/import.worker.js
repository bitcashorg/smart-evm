import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.1/dist/transformers.min.js'

self.onmessage = async (event) => {
  const { text } = event.data
  try {
    console.log('⭐️ worker received data', event.data)

    const extractor = await pipeline('feature-extraction', 'Supabase/gte-small')
    console.log('⭐️  extractor', extractor)
    const rawEmbeddings = await extractor(text)

    // Extract the cpuData object and transform to string array
    const cpuData = rawEmbeddings.ort_tensor.cpuData
    const adjustedEmbeddings = cpuData.slice(0, 384)
    const embeddings = Object.values(adjustedEmbeddings).map((value) => value)
    console.log('⭐️  embeddings', embeddings)

    self.postMessage({
      embeddings,
      text,
    })
  } catch (error) {
    console.error('💀 Error in worker:', error)
    self.postMessage({
      text,
      error: true,
      result: '💀',
      errorMessage: JSON.stringify(error),
    })
  }
}
