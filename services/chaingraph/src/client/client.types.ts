import { createChaingraphClient } from ".."

export type ChaingraphClient = ReturnType<typeof createChaingraphClient>

export type GraphQLSdkProps = {
  config?: RequestInit
  options?: any // TODO: improve type
}