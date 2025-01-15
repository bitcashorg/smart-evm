import { identify, track } from '@multibase/js'

export function useMultibase() {
  const identifyUser = (address: `0x${string}`, properties: Record<string, any>) =>
    identify(address, properties)

  const trackInteraction = (label: string, properties: MultibaseTrackPropertiesProps) =>
    track(label, properties)

  return { trackInteraction, identifyUser }
}

interface MultibaseTrackPropertiesProps {
  [key: string]: any
}
