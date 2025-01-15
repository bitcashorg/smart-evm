import BN from 'bn.js'

export function toSmallestUnit(value: string | number, decimals = 18) {
  // Split the value into integer and fractional parts
  const parts = value.toString().split('.')
  const integerPart = parts[0]
  const fractionalPart = parts[1] || '0'

  // Create a BN instance for the base (10)
  const ten = new BN(10)
  // Create a BN instance for the number of decimals the token uses
  const base = ten.pow(new BN(decimals))

  // Scale the integer part by the base
  let amountInBaseUnit = new BN(integerPart).mul(base)

  // If there's a fractional part, scale it accordingly and add it to the amount in base unit
  if (fractionalPart !== '0') {
    const fractionalBase = ten.pow(new BN(fractionalPart.length))
    const scaledFractionalPart = new BN(fractionalPart).mul(base).div(fractionalBase)
    amountInBaseUnit = amountInBaseUnit.add(scaledFractionalPart)
  }

  return BigInt(amountInBaseUnit.toString())
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
