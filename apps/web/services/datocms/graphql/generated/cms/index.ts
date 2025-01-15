// @ts-nocheck
import {
  type ClientOptions,
  type FieldsSelection,
  GenqlError,
  type GraphqlOperation,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  linkTypeMap,
} from './runtime'
import type { Query, QueryGenqlSelection } from './schema'
import types from './types'

export type { FieldsSelection } from './runtime'
export { GenqlError }

export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends QueryGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>
}

export const createClient = (options?: ClientOptions): Client =>
  createClientOriginal({
    url: 'https://graphql.datocms.com',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
  Query,
  fields
>
export const generateQueryOp: (
  fields: QueryGenqlSelection & { __name?: string },
) => GraphqlOperation = (fields) =>
  generateGraphqlOperation('query', typeMap.Query!, fields as any)
