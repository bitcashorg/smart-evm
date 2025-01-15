export function formatAddress(address: string) {
  // Ensure the address is a string and has a length of at least 8 characters
  if (typeof address === 'string' && address.length >= 8) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }
  // Return the original address if it's too short or not a string
  return address
}

export function formatAddressShort(address: string) {
  // Ensure the address is a string and has a length of at least 8 characters
  if (typeof address === 'string' && address.length >= 4) {
    return `...${address.slice(-4)}`
  }
  // Return the original address if it's too short or not a string
  return address
}
