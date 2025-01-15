// hash object
export async function hashObject(obj: object): Promise<string> {
  const objString = JSON.stringify(obj)
  const encoder = new TextEncoder()
  const data = encoder.encode(objString)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
