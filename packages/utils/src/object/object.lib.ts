export function fromEntries(data: FormData) {
  const object = Object.fromEntries(data)
  const result: Record<string, string> = {}
  Object.keys(object).forEach((key) => {
    result[key] = object[key].toString()
  })
  return result
}
