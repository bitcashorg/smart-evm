import { createAnthropic } from '@ai-sdk/anthropic'
import { generateText } from 'ai'
import { LucideReceiptPoundSterling } from 'lucide-react'

const anthropic = createAnthropic({
  apiKey: process.env.CLAUDE_API_KEY,
})

export async function anthropicTranslate(content: any, locale: string) {
  // console.log('anthropicTranslate', locale, content)
  let text
  let finishReason
  let usage
  try {
    const response = await generateText({
      model: anthropic('claude-3-5-sonnet-20240620'),
      temperature: 0,
      system: `ACT AS TRANSLATOR OF JSON VALUES. Never return english, always translate to ${locale}. RETURN ONLY THE TRANSLATED PLAIN VALID JSON without formatting or escaping characters for whitespace, VALID JSON ONLY. Validate JSON before replying, only valid flat JSON responses. CHECK JSON FORMAT BEFORE REPLYING, ONLY VALID FLAT JSON RESPONSES. You cannot reply with invalid JSON. RETURN PLAIN JSON. IMPORTANT: USE ASCII SAFE CHARACTERS TO AVOID ENCODING ERRORS LIKE UNRECOGNIZED TOKENS. JSON MUST BE PARSABLE`,
      prompt: `Translate the following json value from English to ${locale} and RETURN ONLY PLAIN VALID JSON, VALID JSON ONLY, Validate JSON before replying, only valid flat json responses. ONLY VALID FLAT JSON RESPONSES.  INPUT : ${typeof content === 'string' ? content : JSON.stringify(content)}`,
    })
    text = response.text
    finishReason = response.finishReason
    usage = response.usage

    if (finishReason !== 'stop' || !text) {
      console.log('ERROR TRANSLATING')
      return
    }
  } catch (error) {
    console.error('Error generating text:', error)
    LucideReceiptPoundSterling
  }

  if (text) {
    try {
      const parsedText = JSON.parse(text)
      return { translation: JSON.parse(text), finishReason, usage }
    } catch (parseError) {
      throw new Error('❌ Failed to parse translation')
    }
  }
}
