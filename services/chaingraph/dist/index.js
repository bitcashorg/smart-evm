"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GenqlError: () => GenqlError,
  chaingraphService: () => chaingraphService,
  createChaingraphClient: () => createChaingraphClient,
  createClient: () => createClient2,
  enumActionsConstraint: () => enumActionsConstraint,
  enumActionsSelectColumn: () => enumActionsSelectColumn,
  enumActionsUpdateColumn: () => enumActionsUpdateColumn,
  enumApiUsersConstraint: () => enumApiUsersConstraint,
  enumApiUsersSelectColumn: () => enumApiUsersSelectColumn,
  enumApiUsersUpdateColumn: () => enumApiUsersUpdateColumn,
  enumBlocksConstraint: () => enumBlocksConstraint,
  enumBlocksSelectColumn: () => enumBlocksSelectColumn,
  enumBlocksUpdateColumn: () => enumBlocksUpdateColumn,
  enumChainsConstraint: () => enumChainsConstraint,
  enumChainsSelectColumn: () => enumChainsSelectColumn,
  enumChainsUpdateColumn: () => enumChainsUpdateColumn,
  enumCursorOrdering: () => enumCursorOrdering,
  enumManifestsConstraint: () => enumManifestsConstraint,
  enumManifestsSelectColumn: () => enumManifestsSelectColumn,
  enumManifestsUpdateColumn: () => enumManifestsUpdateColumn,
  enumMappingsConstraint: () => enumMappingsConstraint,
  enumMappingsSelectColumn: () => enumMappingsSelectColumn,
  enumMappingsUpdateColumn: () => enumMappingsUpdateColumn,
  enumOrderBy: () => enumOrderBy,
  enumTableRowsConstraint: () => enumTableRowsConstraint,
  enumTableRowsSelectColumn: () => enumTableRowsSelectColumn,
  enumTableRowsUpdateColumn: () => enumTableRowsUpdateColumn,
  enumTransactionsConstraint: () => enumTransactionsConstraint,
  enumTransactionsSelectColumn: () => enumTransactionsSelectColumn,
  enumTransactionsUpdateColumn: () => enumTransactionsUpdateColumn,
  enumWhitelistsConstraint: () => enumWhitelistsConstraint,
  enumWhitelistsSelectColumn: () => enumWhitelistsSelectColumn,
  enumWhitelistsUpdateColumn: () => enumWhitelistsUpdateColumn,
  everything: () => everything,
  generateMutationOp: () => generateMutationOp,
  generateQueryOp: () => generateQueryOp,
  generateSubscriptionOp: () => generateSubscriptionOp,
  isactions: () => isactions,
  isactions_aggregate: () => isactions_aggregate,
  isactions_aggregate_fields: () => isactions_aggregate_fields,
  isactions_avg_fields: () => isactions_avg_fields,
  isactions_max_fields: () => isactions_max_fields,
  isactions_min_fields: () => isactions_min_fields,
  isactions_mutation_response: () => isactions_mutation_response,
  isactions_stddev_fields: () => isactions_stddev_fields,
  isactions_stddev_pop_fields: () => isactions_stddev_pop_fields,
  isactions_stddev_samp_fields: () => isactions_stddev_samp_fields,
  isactions_sum_fields: () => isactions_sum_fields,
  isactions_var_pop_fields: () => isactions_var_pop_fields,
  isactions_var_samp_fields: () => isactions_var_samp_fields,
  isactions_variance_fields: () => isactions_variance_fields,
  isapi_users: () => isapi_users,
  isapi_users_aggregate: () => isapi_users_aggregate,
  isapi_users_aggregate_fields: () => isapi_users_aggregate_fields,
  isapi_users_avg_fields: () => isapi_users_avg_fields,
  isapi_users_max_fields: () => isapi_users_max_fields,
  isapi_users_min_fields: () => isapi_users_min_fields,
  isapi_users_mutation_response: () => isapi_users_mutation_response,
  isapi_users_stddev_fields: () => isapi_users_stddev_fields,
  isapi_users_stddev_pop_fields: () => isapi_users_stddev_pop_fields,
  isapi_users_stddev_samp_fields: () => isapi_users_stddev_samp_fields,
  isapi_users_sum_fields: () => isapi_users_sum_fields,
  isapi_users_var_pop_fields: () => isapi_users_var_pop_fields,
  isapi_users_var_samp_fields: () => isapi_users_var_samp_fields,
  isapi_users_variance_fields: () => isapi_users_variance_fields,
  isblocks: () => isblocks,
  isblocks_aggregate: () => isblocks_aggregate,
  isblocks_aggregate_fields: () => isblocks_aggregate_fields,
  isblocks_avg_fields: () => isblocks_avg_fields,
  isblocks_max_fields: () => isblocks_max_fields,
  isblocks_min_fields: () => isblocks_min_fields,
  isblocks_mutation_response: () => isblocks_mutation_response,
  isblocks_stddev_fields: () => isblocks_stddev_fields,
  isblocks_stddev_pop_fields: () => isblocks_stddev_pop_fields,
  isblocks_stddev_samp_fields: () => isblocks_stddev_samp_fields,
  isblocks_sum_fields: () => isblocks_sum_fields,
  isblocks_var_pop_fields: () => isblocks_var_pop_fields,
  isblocks_var_samp_fields: () => isblocks_var_samp_fields,
  isblocks_variance_fields: () => isblocks_variance_fields,
  ischains: () => ischains,
  ischains_aggregate: () => ischains_aggregate,
  ischains_aggregate_fields: () => ischains_aggregate_fields,
  ischains_max_fields: () => ischains_max_fields,
  ischains_min_fields: () => ischains_min_fields,
  ischains_mutation_response: () => ischains_mutation_response,
  ismanifests: () => ismanifests,
  ismanifests_aggregate: () => ismanifests_aggregate,
  ismanifests_aggregate_fields: () => ismanifests_aggregate_fields,
  ismanifests_max_fields: () => ismanifests_max_fields,
  ismanifests_min_fields: () => ismanifests_min_fields,
  ismanifests_mutation_response: () => ismanifests_mutation_response,
  ismappings: () => ismappings,
  ismappings_aggregate: () => ismappings_aggregate,
  ismappings_aggregate_fields: () => ismappings_aggregate_fields,
  ismappings_max_fields: () => ismappings_max_fields,
  ismappings_min_fields: () => ismappings_min_fields,
  ismappings_mutation_response: () => ismappings_mutation_response,
  ismutation_root: () => ismutation_root,
  isquery_root: () => isquery_root,
  issubscription_root: () => issubscription_root,
  istable_rows: () => istable_rows,
  istable_rows_aggregate: () => istable_rows_aggregate,
  istable_rows_aggregate_fields: () => istable_rows_aggregate_fields,
  istable_rows_max_fields: () => istable_rows_max_fields,
  istable_rows_min_fields: () => istable_rows_min_fields,
  istable_rows_mutation_response: () => istable_rows_mutation_response,
  istransactions: () => istransactions,
  istransactions_aggregate: () => istransactions_aggregate,
  istransactions_aggregate_fields: () => istransactions_aggregate_fields,
  istransactions_avg_fields: () => istransactions_avg_fields,
  istransactions_max_fields: () => istransactions_max_fields,
  istransactions_min_fields: () => istransactions_min_fields,
  istransactions_mutation_response: () => istransactions_mutation_response,
  istransactions_stddev_fields: () => istransactions_stddev_fields,
  istransactions_stddev_pop_fields: () => istransactions_stddev_pop_fields,
  istransactions_stddev_samp_fields: () => istransactions_stddev_samp_fields,
  istransactions_sum_fields: () => istransactions_sum_fields,
  istransactions_var_pop_fields: () => istransactions_var_pop_fields,
  istransactions_var_samp_fields: () => istransactions_var_samp_fields,
  istransactions_variance_fields: () => istransactions_variance_fields,
  iswhitelists: () => iswhitelists,
  iswhitelists_aggregate: () => iswhitelists_aggregate,
  iswhitelists_aggregate_fields: () => iswhitelists_aggregate_fields,
  iswhitelists_avg_fields: () => iswhitelists_avg_fields,
  iswhitelists_max_fields: () => iswhitelists_max_fields,
  iswhitelists_min_fields: () => iswhitelists_min_fields,
  iswhitelists_mutation_response: () => iswhitelists_mutation_response,
  iswhitelists_stddev_fields: () => iswhitelists_stddev_fields,
  iswhitelists_stddev_pop_fields: () => iswhitelists_stddev_pop_fields,
  iswhitelists_stddev_samp_fields: () => iswhitelists_stddev_samp_fields,
  iswhitelists_sum_fields: () => iswhitelists_sum_fields,
  iswhitelists_var_pop_fields: () => iswhitelists_var_pop_fields,
  iswhitelists_var_samp_fields: () => iswhitelists_var_samp_fields,
  iswhitelists_variance_fields: () => iswhitelists_variance_fields
});
module.exports = __toCommonJS(src_exports);

// src/client/index.ts
var import_config = require("@repo/config");
var import_graphql_ws = require("graphql-ws");

// generated/runtime/error.ts
var GenqlError = class extends Error {
  errors = [];
  /**
   * Partial data returned by the server
   */
  data;
  constructor(errors, data) {
    let message = Array.isArray(errors) ? errors.map((x) => (x == null ? void 0 : x.message) || "").join("\n") : "";
    if (!message) {
      message = "GraphQL error";
    }
    super(message);
    this.errors = errors;
    this.data = data;
  }
};

// generated/runtime/batcher.ts
function dispatchQueueBatch(client, queue) {
  let batchedQuery = queue.map((item) => item.request);
  if (batchedQuery.length === 1) {
    batchedQuery = batchedQuery[0];
  }
  client.fetcher(batchedQuery).then((responses) => {
    if (queue.length === 1 && !Array.isArray(responses)) {
      if (responses.errors && responses.errors.length) {
        queue[0].reject(new GenqlError(responses.errors, responses.data));
        return;
      }
      queue[0].resolve(responses);
      return;
    } else if (responses.length !== queue.length) {
      throw new Error("response length did not match query length");
    }
    for (let i = 0; i < queue.length; i++) {
      if (responses[i].errors && responses[i].errors.length) {
        queue[i].reject(new GenqlError(responses[i].errors, responses[i].data));
      } else {
        queue[i].resolve(responses[i]);
      }
    }
  });
}
function dispatchQueue(client, options) {
  const queue = client._queue;
  const maxBatchSize = options.maxBatchSize || 0;
  client._queue = [];
  if (maxBatchSize > 0 && maxBatchSize < queue.length) {
    for (let i = 0; i < queue.length / maxBatchSize; i++) {
      dispatchQueueBatch(
        client,
        queue.slice(i * maxBatchSize, (i + 1) * maxBatchSize)
      );
    }
  } else {
    dispatchQueueBatch(client, queue);
  }
}
var QueryBatcher = class _QueryBatcher {
  fetcher;
  _options;
  _queue;
  constructor(fetcher, { batchInterval = 6, shouldBatch = true, maxBatchSize = 0 } = {}) {
    this.fetcher = fetcher;
    this._options = {
      batchInterval,
      shouldBatch,
      maxBatchSize
    };
    this._queue = [];
  }
  /**
   * Fetch will send a graphql request and return the parsed json.
   * @param {string}      query          - the graphql query.
   * @param {Variables}   variables      - any variables you wish to inject as key/value pairs.
   * @param {[string]}    operationName  - the graphql operationName.
   * @param {Options}     overrides      - the client options overrides.
   *
   * @return {promise} resolves to parsed json of server response
   *
   * @example
   * client.fetch(`
   *    query getHuman($id: ID!) {
   *      human(id: $id) {
   *        name
   *        height
   *      }
   *    }
   * `, { id: "1001" }, 'getHuman')
   *    .then(human => {
   *      // do something with human
   *      console.log(human);
   *    });
   */
  fetch(query, variables, operationName, overrides = {}) {
    const request = {
      query
    };
    const options = Object.assign({}, this._options, overrides);
    if (variables) {
      request.variables = variables;
    }
    if (operationName) {
      request.operationName = operationName;
    }
    const promise = new Promise((resolve, reject) => {
      this._queue.push({
        request,
        resolve,
        reject
      });
      if (this._queue.length === 1) {
        if (options.shouldBatch) {
          setTimeout(() => dispatchQueue(this, options), options.batchInterval);
        } else {
          dispatchQueue(this, options);
        }
      }
    });
    return promise;
  }
  /**
   * Fetch will send a graphql request and return the parsed json.
   * @param {string}      query          - the graphql query.
   * @param {Variables}   variables      - any variables you wish to inject as key/value pairs.
   * @param {[string]}    operationName  - the graphql operationName.
   * @param {Options}     overrides      - the client options overrides.
   *
   * @return {Promise<Array<Result>>} resolves to parsed json of server response
   *
   * @example
   * client.forceFetch(`
   *    query getHuman($id: ID!) {
   *      human(id: $id) {
   *        name
   *        height
   *      }
   *    }
   * `, { id: "1001" }, 'getHuman')
   *    .then(human => {
   *      // do something with human
   *      console.log(human);
   *    });
   */
  forceFetch(query, variables, operationName, overrides = {}) {
    const request = {
      query
    };
    const options = Object.assign({}, this._options, overrides, {
      shouldBatch: false
    });
    if (variables) {
      request.variables = variables;
    }
    if (operationName) {
      request.operationName = operationName;
    }
    const promise = new Promise((resolve, reject) => {
      const client = new _QueryBatcher(this.fetcher, this._options);
      client._queue = [
        {
          request,
          resolve,
          reject
        }
      ];
      dispatchQueue(client, options);
    });
    return promise;
  }
};

// generated/runtime/fetcher.ts
var DEFAULT_BATCH_OPTIONS = {
  maxBatchSize: 10,
  batchInterval: 40
};
var createFetcher = ({
  url,
  headers = {},
  fetcher,
  fetch: _fetch,
  batch = false,
  ...rest
}) => {
  if (!url && !fetcher) {
    throw new Error("url or fetcher is required");
  }
  if (!fetcher) {
    fetcher = async (body) => {
      let headersObject = typeof headers == "function" ? await headers() : headers;
      headersObject = headersObject || {};
      if (typeof fetch === "undefined" && !_fetch) {
        throw new Error(
          "Global `fetch` function is not available, pass a fetch polyfill to Genql `createClient`"
        );
      }
      const fetchImpl = _fetch || fetch;
      const res = await fetchImpl(url, {
        headers: {
          "Content-Type": "application/json",
          ...headersObject
        },
        method: "POST",
        body: JSON.stringify(body),
        ...rest
      });
      if (!res.ok) {
        throw new Error(`${res.statusText}: ${await res.text()}`);
      }
      const json = await res.json();
      return json;
    };
  }
  if (!batch) {
    return async (body) => {
      var _a;
      const json = await fetcher(body);
      if (Array.isArray(json)) {
        return json.map((json2) => {
          var _a2;
          if ((_a2 = json2 == null ? void 0 : json2.errors) == null ? void 0 : _a2.length) {
            throw new GenqlError(json2.errors || [], json2.data);
          }
          return json2.data;
        });
      } else {
        if ((_a = json == null ? void 0 : json.errors) == null ? void 0 : _a.length) {
          throw new GenqlError(json.errors || [], json.data);
        }
        return json.data;
      }
    };
  }
  const batcher = new QueryBatcher(
    async (batchedQuery) => {
      const json = await fetcher(batchedQuery);
      return json;
    },
    batch === true ? DEFAULT_BATCH_OPTIONS : batch
  );
  return async ({ query, variables }) => {
    const json = await batcher.fetch(query, variables);
    if (json == null ? void 0 : json.data) {
      return json.data;
    }
    throw new Error(
      "Genql batch fetcher returned unexpected result " + JSON.stringify(json)
    );
  };
};

// generated/runtime/generateGraphqlOperation.ts
var parseRequest = (request, ctx, path) => {
  if (typeof request === "object" && "__args" in request) {
    const args = request.__args;
    const fields = { ...request };
    delete fields.__args;
    const argNames = Object.keys(args);
    if (argNames.length === 0) {
      return parseRequest(fields, ctx, path);
    }
    const field = getFieldFromPath(ctx.root, path);
    const argStrings = argNames.map((argName) => {
      ctx.varCounter++;
      const varName = `v${ctx.varCounter}`;
      const typing = field.args && field.args[argName];
      if (!typing) {
        throw new Error(
          `no typing defined for argument \`${argName}\` in path \`${path.join(".")}\``
        );
      }
      ctx.variables[varName] = {
        value: args[argName],
        typing
      };
      return `${argName}:$${varName}`;
    });
    return `(${argStrings})${parseRequest(fields, ctx, path)}`;
  } else if (typeof request === "object" && Object.keys(request).length > 0) {
    const fields = request;
    const fieldNames = Object.keys(fields).filter((k) => Boolean(fields[k]));
    if (fieldNames.length === 0) {
      throw new Error(`field selection should not be empty: ${path.join(".")}`);
    }
    const type = path.length > 0 ? getFieldFromPath(ctx.root, path).type : ctx.root;
    const scalarFields = type.scalar;
    let scalarFieldsFragment;
    if (fieldNames.includes("__scalar")) {
      const falsyFieldNames = new Set(
        Object.keys(fields).filter((k) => !Boolean(fields[k]))
      );
      if (scalarFields == null ? void 0 : scalarFields.length) {
        ctx.fragmentCounter++;
        scalarFieldsFragment = `f${ctx.fragmentCounter}`;
        ctx.fragments.push(
          `fragment ${scalarFieldsFragment} on ${type.name}{${scalarFields.filter((f) => !falsyFieldNames.has(f)).join(",")}}`
        );
      }
    }
    const fieldsSelection = fieldNames.filter((f) => !["__scalar", "__name"].includes(f)).map((f) => {
      const parsed = parseRequest(fields[f], ctx, [...path, f]);
      if (f.startsWith("on_")) {
        ctx.fragmentCounter++;
        const implementationFragment = `f${ctx.fragmentCounter}`;
        const typeMatch = f.match(/^on_(.+)/);
        if (!typeMatch || !typeMatch[1]) throw new Error("match failed");
        ctx.fragments.push(
          `fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`
        );
        return `...${implementationFragment}`;
      } else {
        return `${f}${parsed}`;
      }
    }).concat(scalarFieldsFragment ? [`...${scalarFieldsFragment}`] : []).join(",");
    return `{${fieldsSelection}}`;
  } else {
    return "";
  }
};
var generateGraphqlOperation = (operation, root, fields) => {
  const ctx = {
    root,
    varCounter: 0,
    variables: {},
    fragmentCounter: 0,
    fragments: []
  };
  const result = parseRequest(fields, ctx, []);
  const varNames = Object.keys(ctx.variables);
  const varsString = varNames.length > 0 ? `(${varNames.map((v) => {
    const variableType = ctx.variables[v].typing[1];
    return `$${v}:${variableType}`;
  })})` : "";
  const operationName = (fields == null ? void 0 : fields.__name) || "";
  return {
    query: [
      `${operation} ${operationName}${varsString}${result}`,
      ...ctx.fragments
    ].join(","),
    variables: Object.keys(ctx.variables).reduce(
      (r, v) => {
        r[v] = ctx.variables[v].value;
        return r;
      },
      {}
    ),
    ...operationName ? { operationName: operationName.toString() } : {}
  };
};
var getFieldFromPath = (root, path) => {
  let current;
  if (!root) throw new Error("root type is not provided");
  if (path.length === 0) throw new Error(`path is empty`);
  path.forEach((f) => {
    const type = current ? current.type : root;
    if (!type.fields)
      throw new Error(`type \`${type.name}\` does not have fields`);
    const possibleTypes = Object.keys(type.fields).filter((i) => i.startsWith("on_")).reduce(
      (types, fieldName) => {
        const field2 = type.fields && type.fields[fieldName];
        if (field2) types.push(field2.type);
        return types;
      },
      [type]
    );
    let field = null;
    possibleTypes.forEach((type2) => {
      const found = type2.fields && type2.fields[f];
      if (found) field = found;
    });
    if (!field)
      throw new Error(`type \`${type.name}\` does not have a field \`${f}\``);
    current = field;
  });
  return current;
};

// generated/runtime/createClient.ts
var createClient = ({
  queryRoot,
  mutationRoot,
  subscriptionRoot,
  ...options
}) => {
  const fetcher = createFetcher(options);
  const client = {};
  if (queryRoot) {
    client.query = (request) => {
      if (!queryRoot) throw new Error("queryRoot argument is missing");
      const resultPromise = fetcher(
        generateGraphqlOperation("query", queryRoot, request)
      );
      return resultPromise;
    };
  }
  if (mutationRoot) {
    client.mutation = (request) => {
      if (!mutationRoot) throw new Error("mutationRoot argument is missing");
      const resultPromise = fetcher(
        generateGraphqlOperation("mutation", mutationRoot, request)
      );
      return resultPromise;
    };
  }
  return client;
};

// generated/runtime/linkTypeMap.ts
var linkTypeMap = (typeMap2) => {
  const indexToName = Object.assign(
    {},
    ...Object.keys(typeMap2.types).map((k, i) => ({ [i]: k }))
  );
  const intermediaryTypeMap = Object.assign(
    {},
    ...Object.keys(typeMap2.types || {}).map((k) => {
      const type = typeMap2.types[k];
      const fields = type || {};
      return {
        [k]: {
          name: k,
          // type scalar properties
          scalar: Object.keys(fields).filter((f) => {
            const [type2] = fields[f] || [];
            return type2 && typeMap2.scalars.includes(type2);
          }),
          // fields with corresponding `type` and `args`
          fields: Object.assign(
            {},
            ...Object.keys(fields).map((f) => {
              const [typeIndex, args] = fields[f] || [];
              if (typeIndex == null) {
                return {};
              }
              return {
                [f]: {
                  // replace index with type name
                  type: indexToName[typeIndex],
                  args: Object.assign(
                    {},
                    ...Object.keys(args || {}).map((k2) => {
                      if (!args || !args[k2]) {
                        return;
                      }
                      const [argTypeName, argTypeString] = args[k2];
                      return {
                        [k2]: [
                          indexToName[argTypeName],
                          argTypeString || indexToName[argTypeName]
                        ]
                      };
                    })
                  )
                }
              };
            })
          )
        }
      };
    })
  );
  const res = resolveConcreteTypes(intermediaryTypeMap);
  return res;
};
var resolveConcreteTypes = (linkedTypeMap) => {
  Object.keys(linkedTypeMap).forEach((typeNameFromKey) => {
    const type = linkedTypeMap[typeNameFromKey];
    if (!type.fields) {
      return;
    }
    const fields = type.fields;
    Object.keys(fields).forEach((f) => {
      const field = fields[f];
      if (field.args) {
        const args = field.args;
        Object.keys(args).forEach((key) => {
          const arg = args[key];
          if (arg) {
            const [typeName2] = arg;
            if (typeof typeName2 === "string") {
              if (!linkedTypeMap[typeName2]) {
                linkedTypeMap[typeName2] = { name: typeName2 };
              }
              arg[0] = linkedTypeMap[typeName2];
            }
          }
        });
      }
      const typeName = field.type;
      if (typeof typeName === "string") {
        if (!linkedTypeMap[typeName]) {
          linkedTypeMap[typeName] = { name: typeName };
        }
        field.type = linkedTypeMap[typeName];
      }
    });
  });
  return linkedTypeMap;
};

// generated/types.ts
var types_default = {
  scalars: [
    0,
    2,
    3,
    5,
    13,
    26,
    34,
    44,
    53,
    61,
    76,
    87,
    99,
    111,
    120,
    124,
    126,
    127,
    134,
    143,
    147,
    154,
    166,
    170,
    172,
    182,
    196,
    200,
    202,
    209,
    219,
    227,
    232,
    240,
    253,
    261
  ],
  types: {
    Boolean: {},
    Boolean_comparison_exp: {
      _eq: [0],
      _gt: [0],
      _gte: [0],
      _in: [0],
      _is_null: [0],
      _lt: [0],
      _lte: [0],
      _neq: [0],
      _nin: [0],
      __typename: [5]
    },
    Float: {},
    Int: {},
    Int_comparison_exp: {
      _eq: [3],
      _gt: [3],
      _gte: [3],
      _in: [3],
      _is_null: [0],
      _lt: [3],
      _lte: [3],
      _neq: [3],
      _nin: [3],
      __typename: [5]
    },
    String: {},
    String_comparison_exp: {
      _eq: [5],
      _gt: [5],
      _gte: [5],
      _ilike: [5],
      _in: [5],
      _iregex: [5],
      _is_null: [0],
      _like: [5],
      _lt: [5],
      _lte: [5],
      _neq: [5],
      _nilike: [5],
      _nin: [5],
      _niregex: [5],
      _nlike: [5],
      _nregex: [5],
      _nsimilar: [5],
      _regex: [5],
      _similar: [5],
      __typename: [5]
    },
    actions: {
      account_disk_deltas: [
        127,
        {
          path: [5]
        }
      ],
      account_ram_deltas: [
        127,
        {
          path: [5]
        }
      ],
      action: [5],
      action_ordinal: [3],
      authorization: [
        127,
        {
          path: [5]
        }
      ],
      chain: [5],
      console: [5],
      context_free: [0],
      contract: [5],
      data: [
        127,
        {
          path: [5]
        }
      ],
      global_sequence: [5],
      receipt: [
        127,
        {
          path: [5]
        }
      ],
      receiver: [5],
      transaction: [204],
      transaction_id: [5],
      __typename: [5]
    },
    actions_aggregate: {
      aggregate: [9],
      nodes: [7],
      __typename: [5]
    },
    actions_aggregate_fields: {
      avg: [11],
      count: [
        3,
        {
          columns: [26, "[actions_select_column!]"],
          distinct: [0]
        }
      ],
      max: [19],
      min: [20],
      stddev: [28],
      stddev_pop: [29],
      stddev_samp: [30],
      sum: [33],
      var_pop: [36],
      var_samp: [37],
      variance: [38],
      __typename: [5]
    },
    actions_append_input: {
      account_disk_deltas: [127],
      account_ram_deltas: [127],
      authorization: [127],
      data: [127],
      receipt: [127],
      __typename: [5]
    },
    actions_avg_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    actions_bool_exp: {
      _and: [12],
      _not: [12],
      _or: [12],
      account_disk_deltas: [129],
      account_ram_deltas: [129],
      action: [6],
      action_ordinal: [4],
      authorization: [129],
      chain: [6],
      console: [6],
      context_free: [1],
      contract: [6],
      data: [129],
      global_sequence: [6],
      receipt: [129],
      receiver: [6],
      transaction: [208],
      transaction_id: [6],
      __typename: [5]
    },
    actions_constraint: {},
    actions_delete_at_path_input: {
      account_disk_deltas: [5],
      account_ram_deltas: [5],
      authorization: [5],
      data: [5],
      receipt: [5],
      __typename: [5]
    },
    actions_delete_elem_input: {
      account_disk_deltas: [3],
      account_ram_deltas: [3],
      authorization: [3],
      data: [3],
      receipt: [3],
      __typename: [5]
    },
    actions_delete_key_input: {
      account_disk_deltas: [5],
      account_ram_deltas: [5],
      authorization: [5],
      data: [5],
      receipt: [5],
      __typename: [5]
    },
    actions_inc_input: {
      action_ordinal: [3],
      __typename: [5]
    },
    actions_insert_input: {
      account_disk_deltas: [127],
      account_ram_deltas: [127],
      action: [5],
      action_ordinal: [3],
      authorization: [127],
      chain: [5],
      console: [5],
      context_free: [0],
      contract: [5],
      data: [127],
      global_sequence: [5],
      receipt: [127],
      receiver: [5],
      transaction: [215],
      transaction_id: [5],
      __typename: [5]
    },
    actions_max_fields: {
      action: [5],
      action_ordinal: [3],
      chain: [5],
      console: [5],
      contract: [5],
      global_sequence: [5],
      receiver: [5],
      transaction_id: [5],
      __typename: [5]
    },
    actions_min_fields: {
      action: [5],
      action_ordinal: [3],
      chain: [5],
      console: [5],
      contract: [5],
      global_sequence: [5],
      receiver: [5],
      transaction_id: [5],
      __typename: [5]
    },
    actions_mutation_response: {
      affected_rows: [3],
      returning: [7],
      __typename: [5]
    },
    actions_on_conflict: {
      constraint: [13],
      update_columns: [34],
      where: [12],
      __typename: [5]
    },
    actions_order_by: {
      account_disk_deltas: [172],
      account_ram_deltas: [172],
      action: [172],
      action_ordinal: [172],
      authorization: [172],
      chain: [172],
      console: [172],
      context_free: [172],
      contract: [172],
      data: [172],
      global_sequence: [172],
      receipt: [172],
      receiver: [172],
      transaction: [217],
      transaction_id: [172],
      __typename: [5]
    },
    actions_pk_columns_input: {
      chain: [5],
      global_sequence: [5],
      __typename: [5]
    },
    actions_prepend_input: {
      account_disk_deltas: [127],
      account_ram_deltas: [127],
      authorization: [127],
      data: [127],
      receipt: [127],
      __typename: [5]
    },
    actions_select_column: {},
    actions_set_input: {
      account_disk_deltas: [127],
      account_ram_deltas: [127],
      action: [5],
      action_ordinal: [3],
      authorization: [127],
      chain: [5],
      console: [5],
      context_free: [0],
      contract: [5],
      data: [127],
      global_sequence: [5],
      receipt: [127],
      receiver: [5],
      transaction_id: [5],
      __typename: [5]
    },
    actions_stddev_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    actions_stddev_pop_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    actions_stddev_samp_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    actions_stream_cursor_input: {
      initial_value: [32],
      ordering: [126],
      __typename: [5]
    },
    actions_stream_cursor_value_input: {
      account_disk_deltas: [127],
      account_ram_deltas: [127],
      action: [5],
      action_ordinal: [3],
      authorization: [127],
      chain: [5],
      console: [5],
      context_free: [0],
      contract: [5],
      data: [127],
      global_sequence: [5],
      receipt: [127],
      receiver: [5],
      transaction_id: [5],
      __typename: [5]
    },
    actions_sum_fields: {
      action_ordinal: [3],
      __typename: [5]
    },
    actions_update_column: {},
    actions_updates: {
      _append: [10],
      _delete_at_path: [14],
      _delete_elem: [15],
      _delete_key: [16],
      _inc: [17],
      _prepend: [25],
      _set: [27],
      where: [12],
      __typename: [5]
    },
    actions_var_pop_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    actions_var_samp_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    actions_variance_fields: {
      action_ordinal: [2],
      __typename: [5]
    },
    api_users: {
      account: [5],
      api_key: [5],
      created_at: [202],
      domain_names: [5],
      id: [3],
      updated_at: [202],
      __typename: [5]
    },
    api_users_aggregate: {
      aggregate: [41],
      nodes: [39],
      __typename: [5]
    },
    api_users_aggregate_fields: {
      avg: [42],
      count: [
        3,
        {
          columns: [53, "[api_users_select_column!]"],
          distinct: [0]
        }
      ],
      max: [47],
      min: [48],
      stddev: [55],
      stddev_pop: [56],
      stddev_samp: [57],
      sum: [60],
      var_pop: [63],
      var_samp: [64],
      variance: [65],
      __typename: [5]
    },
    api_users_avg_fields: {
      id: [2],
      __typename: [5]
    },
    api_users_bool_exp: {
      _and: [43],
      _not: [43],
      _or: [43],
      account: [6],
      api_key: [6],
      created_at: [203],
      domain_names: [6],
      id: [4],
      updated_at: [203],
      __typename: [5]
    },
    api_users_constraint: {},
    api_users_inc_input: {
      id: [3],
      __typename: [5]
    },
    api_users_insert_input: {
      account: [5],
      api_key: [5],
      created_at: [202],
      domain_names: [5],
      id: [3],
      updated_at: [202],
      __typename: [5]
    },
    api_users_max_fields: {
      account: [5],
      api_key: [5],
      created_at: [202],
      domain_names: [5],
      id: [3],
      updated_at: [202],
      __typename: [5]
    },
    api_users_min_fields: {
      account: [5],
      api_key: [5],
      created_at: [202],
      domain_names: [5],
      id: [3],
      updated_at: [202],
      __typename: [5]
    },
    api_users_mutation_response: {
      affected_rows: [3],
      returning: [39],
      __typename: [5]
    },
    api_users_on_conflict: {
      constraint: [44],
      update_columns: [61],
      where: [43],
      __typename: [5]
    },
    api_users_order_by: {
      account: [172],
      api_key: [172],
      created_at: [172],
      domain_names: [172],
      id: [172],
      updated_at: [172],
      __typename: [5]
    },
    api_users_pk_columns_input: {
      id: [3],
      __typename: [5]
    },
    api_users_select_column: {},
    api_users_set_input: {
      account: [5],
      api_key: [5],
      created_at: [202],
      domain_names: [5],
      id: [3],
      updated_at: [202],
      __typename: [5]
    },
    api_users_stddev_fields: {
      id: [2],
      __typename: [5]
    },
    api_users_stddev_pop_fields: {
      id: [2],
      __typename: [5]
    },
    api_users_stddev_samp_fields: {
      id: [2],
      __typename: [5]
    },
    api_users_stream_cursor_input: {
      initial_value: [59],
      ordering: [126],
      __typename: [5]
    },
    api_users_stream_cursor_value_input: {
      account: [5],
      api_key: [5],
      created_at: [202],
      domain_names: [5],
      id: [3],
      updated_at: [202],
      __typename: [5]
    },
    api_users_sum_fields: {
      id: [3],
      __typename: [5]
    },
    api_users_update_column: {},
    api_users_updates: {
      _inc: [45],
      _set: [54],
      where: [43],
      __typename: [5]
    },
    api_users_var_pop_fields: {
      id: [2],
      __typename: [5]
    },
    api_users_var_samp_fields: {
      id: [2],
      __typename: [5]
    },
    api_users_variance_fields: {
      id: [2],
      __typename: [5]
    },
    blocks: {
      block_id: [5],
      block_num: [3],
      chain: [5],
      chian: [107],
      producer: [5],
      timestamp: [202],
      __typename: [5]
    },
    blocks_aggregate: {
      aggregate: [70],
      nodes: [66],
      __typename: [5]
    },
    blocks_aggregate_bool_exp: {
      count: [69],
      __typename: [5]
    },
    blocks_aggregate_bool_exp_count: {
      arguments: [87],
      distinct: [0],
      filter: [75],
      predicate: [4],
      __typename: [5]
    },
    blocks_aggregate_fields: {
      avg: [73],
      count: [
        3,
        {
          columns: [87, "[blocks_select_column!]"],
          distinct: [0]
        }
      ],
      max: [79],
      min: [81],
      stddev: [89],
      stddev_pop: [91],
      stddev_samp: [93],
      sum: [97],
      var_pop: [101],
      var_samp: [103],
      variance: [105],
      __typename: [5]
    },
    blocks_aggregate_order_by: {
      avg: [74],
      count: [172],
      max: [80],
      min: [82],
      stddev: [90],
      stddev_pop: [92],
      stddev_samp: [94],
      sum: [98],
      var_pop: [102],
      var_samp: [104],
      variance: [106],
      __typename: [5]
    },
    blocks_arr_rel_insert_input: {
      data: [78],
      on_conflict: [84],
      __typename: [5]
    },
    blocks_avg_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_avg_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_bool_exp: {
      _and: [75],
      _not: [75],
      _or: [75],
      block_id: [6],
      block_num: [4],
      chain: [6],
      chian: [110],
      producer: [6],
      timestamp: [203],
      __typename: [5]
    },
    blocks_constraint: {},
    blocks_inc_input: {
      block_num: [3],
      __typename: [5]
    },
    blocks_insert_input: {
      block_id: [5],
      block_num: [3],
      chain: [5],
      chian: [116],
      producer: [5],
      timestamp: [202],
      __typename: [5]
    },
    blocks_max_fields: {
      block_id: [5],
      block_num: [3],
      chain: [5],
      producer: [5],
      timestamp: [202],
      __typename: [5]
    },
    blocks_max_order_by: {
      block_id: [172],
      block_num: [172],
      chain: [172],
      producer: [172],
      timestamp: [172],
      __typename: [5]
    },
    blocks_min_fields: {
      block_id: [5],
      block_num: [3],
      chain: [5],
      producer: [5],
      timestamp: [202],
      __typename: [5]
    },
    blocks_min_order_by: {
      block_id: [172],
      block_num: [172],
      chain: [172],
      producer: [172],
      timestamp: [172],
      __typename: [5]
    },
    blocks_mutation_response: {
      affected_rows: [3],
      returning: [66],
      __typename: [5]
    },
    blocks_on_conflict: {
      constraint: [76],
      update_columns: [99],
      where: [75],
      __typename: [5]
    },
    blocks_order_by: {
      block_id: [172],
      block_num: [172],
      chain: [172],
      chian: [118],
      producer: [172],
      timestamp: [172],
      __typename: [5]
    },
    blocks_pk_columns_input: {
      block_num: [3],
      chain: [5],
      __typename: [5]
    },
    blocks_select_column: {},
    blocks_set_input: {
      block_id: [5],
      block_num: [3],
      chain: [5],
      producer: [5],
      timestamp: [202],
      __typename: [5]
    },
    blocks_stddev_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_stddev_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_stddev_pop_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_stddev_pop_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_stddev_samp_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_stddev_samp_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_stream_cursor_input: {
      initial_value: [96],
      ordering: [126],
      __typename: [5]
    },
    blocks_stream_cursor_value_input: {
      block_id: [5],
      block_num: [3],
      chain: [5],
      producer: [5],
      timestamp: [202],
      __typename: [5]
    },
    blocks_sum_fields: {
      block_num: [3],
      __typename: [5]
    },
    blocks_sum_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_update_column: {},
    blocks_updates: {
      _inc: [77],
      _set: [88],
      where: [75],
      __typename: [5]
    },
    blocks_var_pop_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_var_pop_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_var_samp_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_var_samp_order_by: {
      block_num: [172],
      __typename: [5]
    },
    blocks_variance_fields: {
      block_num: [2],
      __typename: [5]
    },
    blocks_variance_order_by: {
      block_num: [172],
      __typename: [5]
    },
    chains: {
      blocks: [
        66,
        {
          distinct_on: [87, "[blocks_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [85, "[blocks_order_by!]"],
          where: [75]
        }
      ],
      blocks_aggregate: [
        67,
        {
          distinct_on: [87, "[blocks_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [85, "[blocks_order_by!]"],
          where: [75]
        }
      ],
      chain_id: [5],
      chain_name: [5],
      rpc_endpoint: [5],
      table_rows: [
        173,
        {
          distinct_on: [196, "[table_rows_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [193, "[table_rows_order_by!]"],
          where: [181]
        }
      ],
      table_rows_aggregate: [
        174,
        {
          distinct_on: [196, "[table_rows_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [193, "[table_rows_order_by!]"],
          where: [181]
        }
      ],
      __typename: [5]
    },
    chains_aggregate: {
      aggregate: [109],
      nodes: [107],
      __typename: [5]
    },
    chains_aggregate_fields: {
      count: [
        3,
        {
          columns: [120, "[chains_select_column!]"],
          distinct: [0]
        }
      ],
      max: [113],
      min: [114],
      __typename: [5]
    },
    chains_bool_exp: {
      _and: [110],
      _not: [110],
      _or: [110],
      blocks: [75],
      blocks_aggregate: [68],
      chain_id: [6],
      chain_name: [6],
      rpc_endpoint: [6],
      table_rows: [181],
      table_rows_aggregate: [175],
      __typename: [5]
    },
    chains_constraint: {},
    chains_insert_input: {
      blocks: [72],
      chain_id: [5],
      chain_name: [5],
      rpc_endpoint: [5],
      table_rows: [180],
      __typename: [5]
    },
    chains_max_fields: {
      chain_id: [5],
      chain_name: [5],
      rpc_endpoint: [5],
      __typename: [5]
    },
    chains_min_fields: {
      chain_id: [5],
      chain_name: [5],
      rpc_endpoint: [5],
      __typename: [5]
    },
    chains_mutation_response: {
      affected_rows: [3],
      returning: [107],
      __typename: [5]
    },
    chains_obj_rel_insert_input: {
      data: [112],
      on_conflict: [117],
      __typename: [5]
    },
    chains_on_conflict: {
      constraint: [111],
      update_columns: [124],
      where: [110],
      __typename: [5]
    },
    chains_order_by: {
      blocks_aggregate: [71],
      chain_id: [172],
      chain_name: [172],
      rpc_endpoint: [172],
      table_rows_aggregate: [178],
      __typename: [5]
    },
    chains_pk_columns_input: {
      chain_name: [5],
      __typename: [5]
    },
    chains_select_column: {},
    chains_set_input: {
      chain_id: [5],
      chain_name: [5],
      rpc_endpoint: [5],
      __typename: [5]
    },
    chains_stream_cursor_input: {
      initial_value: [123],
      ordering: [126],
      __typename: [5]
    },
    chains_stream_cursor_value_input: {
      chain_id: [5],
      chain_name: [5],
      rpc_endpoint: [5],
      __typename: [5]
    },
    chains_update_column: {},
    chains_updates: {
      _set: [121],
      where: [110],
      __typename: [5]
    },
    cursor_ordering: {},
    jsonb: {},
    jsonb_cast_exp: {
      String: [6],
      __typename: [5]
    },
    jsonb_comparison_exp: {
      _cast: [128],
      _contained_in: [127],
      _contains: [127],
      _eq: [127],
      _gt: [127],
      _gte: [127],
      _has_key: [5],
      _has_keys_all: [5],
      _has_keys_any: [5],
      _in: [127],
      _is_null: [0],
      _lt: [127],
      _lte: [127],
      _neq: [127],
      _nin: [127],
      __typename: [5]
    },
    manifests: {
      app_id: [232],
      app_name: [5],
      description: [5],
      url: [5],
      __typename: [5]
    },
    manifests_aggregate: {
      aggregate: [132],
      nodes: [130],
      __typename: [5]
    },
    manifests_aggregate_fields: {
      count: [
        3,
        {
          columns: [143, "[manifests_select_column!]"],
          distinct: [0]
        }
      ],
      max: [136],
      min: [137],
      __typename: [5]
    },
    manifests_bool_exp: {
      _and: [133],
      _not: [133],
      _or: [133],
      app_id: [233],
      app_name: [6],
      description: [6],
      url: [6],
      __typename: [5]
    },
    manifests_constraint: {},
    manifests_insert_input: {
      app_id: [232],
      app_name: [5],
      description: [5],
      url: [5],
      __typename: [5]
    },
    manifests_max_fields: {
      app_id: [232],
      app_name: [5],
      description: [5],
      url: [5],
      __typename: [5]
    },
    manifests_min_fields: {
      app_id: [232],
      app_name: [5],
      description: [5],
      url: [5],
      __typename: [5]
    },
    manifests_mutation_response: {
      affected_rows: [3],
      returning: [130],
      __typename: [5]
    },
    manifests_obj_rel_insert_input: {
      data: [135],
      on_conflict: [140],
      __typename: [5]
    },
    manifests_on_conflict: {
      constraint: [134],
      update_columns: [147],
      where: [133],
      __typename: [5]
    },
    manifests_order_by: {
      app_id: [172],
      app_name: [172],
      description: [172],
      url: [172],
      __typename: [5]
    },
    manifests_pk_columns_input: {
      app_id: [232],
      __typename: [5]
    },
    manifests_select_column: {},
    manifests_set_input: {
      app_id: [232],
      app_name: [5],
      description: [5],
      url: [5],
      __typename: [5]
    },
    manifests_stream_cursor_input: {
      initial_value: [146],
      ordering: [126],
      __typename: [5]
    },
    manifests_stream_cursor_value_input: {
      app_id: [232],
      app_name: [5],
      description: [5],
      url: [5],
      __typename: [5]
    },
    manifests_update_column: {},
    manifests_updates: {
      _set: [144],
      where: [133],
      __typename: [5]
    },
    mappings: {
      abi: [
        127,
        {
          path: [5]
        }
      ],
      chain: [5],
      contract: [5],
      contract_type: [5],
      tables: [
        127,
        {
          path: [5]
        }
      ],
      __typename: [5]
    },
    mappings_aggregate: {
      aggregate: [151],
      nodes: [149],
      __typename: [5]
    },
    mappings_aggregate_fields: {
      count: [
        3,
        {
          columns: [166, "[mappings_select_column!]"],
          distinct: [0]
        }
      ],
      max: [159],
      min: [160],
      __typename: [5]
    },
    mappings_append_input: {
      abi: [127],
      tables: [127],
      __typename: [5]
    },
    mappings_bool_exp: {
      _and: [153],
      _not: [153],
      _or: [153],
      abi: [129],
      chain: [6],
      contract: [6],
      contract_type: [6],
      tables: [129],
      __typename: [5]
    },
    mappings_constraint: {},
    mappings_delete_at_path_input: {
      abi: [5],
      tables: [5],
      __typename: [5]
    },
    mappings_delete_elem_input: {
      abi: [3],
      tables: [3],
      __typename: [5]
    },
    mappings_delete_key_input: {
      abi: [5],
      tables: [5],
      __typename: [5]
    },
    mappings_insert_input: {
      abi: [127],
      chain: [5],
      contract: [5],
      contract_type: [5],
      tables: [127],
      __typename: [5]
    },
    mappings_max_fields: {
      chain: [5],
      contract: [5],
      contract_type: [5],
      __typename: [5]
    },
    mappings_min_fields: {
      chain: [5],
      contract: [5],
      contract_type: [5],
      __typename: [5]
    },
    mappings_mutation_response: {
      affected_rows: [3],
      returning: [149],
      __typename: [5]
    },
    mappings_on_conflict: {
      constraint: [154],
      update_columns: [170],
      where: [153],
      __typename: [5]
    },
    mappings_order_by: {
      abi: [172],
      chain: [172],
      contract: [172],
      contract_type: [172],
      tables: [172],
      __typename: [5]
    },
    mappings_pk_columns_input: {
      chain: [5],
      contract: [5],
      __typename: [5]
    },
    mappings_prepend_input: {
      abi: [127],
      tables: [127],
      __typename: [5]
    },
    mappings_select_column: {},
    mappings_set_input: {
      abi: [127],
      chain: [5],
      contract: [5],
      contract_type: [5],
      tables: [127],
      __typename: [5]
    },
    mappings_stream_cursor_input: {
      initial_value: [169],
      ordering: [126],
      __typename: [5]
    },
    mappings_stream_cursor_value_input: {
      abi: [127],
      chain: [5],
      contract: [5],
      contract_type: [5],
      tables: [127],
      __typename: [5]
    },
    mappings_update_column: {},
    mappings_updates: {
      _append: [152],
      _delete_at_path: [155],
      _delete_elem: [156],
      _delete_key: [157],
      _prepend: [165],
      _set: [167],
      where: [153],
      __typename: [5]
    },
    order_by: {},
    table_rows: {
      chain: [5],
      contract: [5],
      data: [
        127,
        {
          path: [5]
        }
      ],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_aggregate: {
      aggregate: [177],
      nodes: [173],
      __typename: [5]
    },
    table_rows_aggregate_bool_exp: {
      count: [176],
      __typename: [5]
    },
    table_rows_aggregate_bool_exp_count: {
      arguments: [196],
      distinct: [0],
      filter: [181],
      predicate: [4],
      __typename: [5]
    },
    table_rows_aggregate_fields: {
      count: [
        3,
        {
          columns: [196, "[table_rows_select_column!]"],
          distinct: [0]
        }
      ],
      max: [187],
      min: [189],
      __typename: [5]
    },
    table_rows_aggregate_order_by: {
      count: [172],
      max: [188],
      min: [190],
      __typename: [5]
    },
    table_rows_append_input: {
      data: [127],
      __typename: [5]
    },
    table_rows_arr_rel_insert_input: {
      data: [186],
      on_conflict: [192],
      __typename: [5]
    },
    table_rows_bool_exp: {
      _and: [181],
      _not: [181],
      _or: [181],
      chain: [6],
      contract: [6],
      data: [129],
      primary_key: [6],
      scope: [6],
      table: [6],
      __typename: [5]
    },
    table_rows_constraint: {},
    table_rows_delete_at_path_input: {
      data: [5],
      __typename: [5]
    },
    table_rows_delete_elem_input: {
      data: [3],
      __typename: [5]
    },
    table_rows_delete_key_input: {
      data: [5],
      __typename: [5]
    },
    table_rows_insert_input: {
      chain: [5],
      contract: [5],
      data: [127],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_max_fields: {
      chain: [5],
      contract: [5],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_max_order_by: {
      chain: [172],
      contract: [172],
      primary_key: [172],
      scope: [172],
      table: [172],
      __typename: [5]
    },
    table_rows_min_fields: {
      chain: [5],
      contract: [5],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_min_order_by: {
      chain: [172],
      contract: [172],
      primary_key: [172],
      scope: [172],
      table: [172],
      __typename: [5]
    },
    table_rows_mutation_response: {
      affected_rows: [3],
      returning: [173],
      __typename: [5]
    },
    table_rows_on_conflict: {
      constraint: [182],
      update_columns: [200],
      where: [181],
      __typename: [5]
    },
    table_rows_order_by: {
      chain: [172],
      contract: [172],
      data: [172],
      primary_key: [172],
      scope: [172],
      table: [172],
      __typename: [5]
    },
    table_rows_pk_columns_input: {
      chain: [5],
      contract: [5],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_prepend_input: {
      data: [127],
      __typename: [5]
    },
    table_rows_select_column: {},
    table_rows_set_input: {
      chain: [5],
      contract: [5],
      data: [127],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_stream_cursor_input: {
      initial_value: [199],
      ordering: [126],
      __typename: [5]
    },
    table_rows_stream_cursor_value_input: {
      chain: [5],
      contract: [5],
      data: [127],
      primary_key: [5],
      scope: [5],
      table: [5],
      __typename: [5]
    },
    table_rows_update_column: {},
    table_rows_updates: {
      _append: [179],
      _delete_at_path: [183],
      _delete_elem: [184],
      _delete_key: [185],
      _prepend: [195],
      _set: [197],
      where: [181],
      __typename: [5]
    },
    timestamptz: {},
    timestamptz_comparison_exp: {
      _eq: [202],
      _gt: [202],
      _gte: [202],
      _in: [202],
      _is_null: [0],
      _lt: [202],
      _lte: [202],
      _neq: [202],
      _nin: [202],
      __typename: [5]
    },
    transactions: {
      block_num: [3],
      chain: [5],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_aggregate: {
      aggregate: [206],
      nodes: [204],
      __typename: [5]
    },
    transactions_aggregate_fields: {
      avg: [207],
      count: [
        3,
        {
          columns: [219, "[transactions_select_column!]"],
          distinct: [0]
        }
      ],
      max: [212],
      min: [213],
      stddev: [221],
      stddev_pop: [222],
      stddev_samp: [223],
      sum: [226],
      var_pop: [229],
      var_samp: [230],
      variance: [231],
      __typename: [5]
    },
    transactions_avg_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    transactions_bool_exp: {
      _and: [208],
      _not: [208],
      _or: [208],
      block_num: [4],
      chain: [6],
      cpu_usage_us: [4],
      net_usage: [4],
      net_usage_words: [4],
      transaction_id: [6],
      __typename: [5]
    },
    transactions_constraint: {},
    transactions_inc_input: {
      block_num: [3],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      __typename: [5]
    },
    transactions_insert_input: {
      block_num: [3],
      chain: [5],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_max_fields: {
      block_num: [3],
      chain: [5],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_min_fields: {
      block_num: [3],
      chain: [5],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_mutation_response: {
      affected_rows: [3],
      returning: [204],
      __typename: [5]
    },
    transactions_obj_rel_insert_input: {
      data: [211],
      on_conflict: [216],
      __typename: [5]
    },
    transactions_on_conflict: {
      constraint: [209],
      update_columns: [227],
      where: [208],
      __typename: [5]
    },
    transactions_order_by: {
      block_num: [172],
      chain: [172],
      cpu_usage_us: [172],
      net_usage: [172],
      net_usage_words: [172],
      transaction_id: [172],
      __typename: [5]
    },
    transactions_pk_columns_input: {
      chain: [5],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_select_column: {},
    transactions_set_input: {
      block_num: [3],
      chain: [5],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_stddev_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    transactions_stddev_pop_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    transactions_stddev_samp_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    transactions_stream_cursor_input: {
      initial_value: [225],
      ordering: [126],
      __typename: [5]
    },
    transactions_stream_cursor_value_input: {
      block_num: [3],
      chain: [5],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      transaction_id: [5],
      __typename: [5]
    },
    transactions_sum_fields: {
      block_num: [3],
      cpu_usage_us: [3],
      net_usage: [3],
      net_usage_words: [3],
      __typename: [5]
    },
    transactions_update_column: {},
    transactions_updates: {
      _inc: [210],
      _set: [220],
      where: [208],
      __typename: [5]
    },
    transactions_var_pop_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    transactions_var_samp_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    transactions_variance_fields: {
      block_num: [2],
      cpu_usage_us: [2],
      net_usage: [2],
      net_usage_words: [2],
      __typename: [5]
    },
    uuid: {},
    uuid_comparison_exp: {
      _eq: [232],
      _gt: [232],
      _gte: [232],
      _in: [232],
      _is_null: [0],
      _lt: [232],
      _lte: [232],
      _neq: [232],
      _nin: [232],
      __typename: [5]
    },
    whitelists: {
      actions: [
        127,
        {
          path: [5]
        }
      ],
      app_id: [232],
      chain: [5],
      contract: [5],
      history_ready: [0],
      manifest: [130],
      start_block: [3],
      tables: [
        127,
        {
          path: [5]
        }
      ],
      __typename: [5]
    },
    whitelists_aggregate: {
      aggregate: [236],
      nodes: [234],
      __typename: [5]
    },
    whitelists_aggregate_fields: {
      avg: [238],
      count: [
        3,
        {
          columns: [253, "[whitelists_select_column!]"],
          distinct: [0]
        }
      ],
      max: [246],
      min: [247],
      stddev: [255],
      stddev_pop: [256],
      stddev_samp: [257],
      sum: [260],
      var_pop: [263],
      var_samp: [264],
      variance: [265],
      __typename: [5]
    },
    whitelists_append_input: {
      actions: [127],
      tables: [127],
      __typename: [5]
    },
    whitelists_avg_fields: {
      start_block: [2],
      __typename: [5]
    },
    whitelists_bool_exp: {
      _and: [239],
      _not: [239],
      _or: [239],
      actions: [129],
      app_id: [233],
      chain: [6],
      contract: [6],
      history_ready: [1],
      manifest: [133],
      start_block: [4],
      tables: [129],
      __typename: [5]
    },
    whitelists_constraint: {},
    whitelists_delete_at_path_input: {
      actions: [5],
      tables: [5],
      __typename: [5]
    },
    whitelists_delete_elem_input: {
      actions: [3],
      tables: [3],
      __typename: [5]
    },
    whitelists_delete_key_input: {
      actions: [5],
      tables: [5],
      __typename: [5]
    },
    whitelists_inc_input: {
      start_block: [3],
      __typename: [5]
    },
    whitelists_insert_input: {
      actions: [127],
      app_id: [232],
      chain: [5],
      contract: [5],
      history_ready: [0],
      manifest: [139],
      start_block: [3],
      tables: [127],
      __typename: [5]
    },
    whitelists_max_fields: {
      app_id: [232],
      chain: [5],
      contract: [5],
      start_block: [3],
      __typename: [5]
    },
    whitelists_min_fields: {
      app_id: [232],
      chain: [5],
      contract: [5],
      start_block: [3],
      __typename: [5]
    },
    whitelists_mutation_response: {
      affected_rows: [3],
      returning: [234],
      __typename: [5]
    },
    whitelists_on_conflict: {
      constraint: [240],
      update_columns: [261],
      where: [239],
      __typename: [5]
    },
    whitelists_order_by: {
      actions: [172],
      app_id: [172],
      chain: [172],
      contract: [172],
      history_ready: [172],
      manifest: [141],
      start_block: [172],
      tables: [172],
      __typename: [5]
    },
    whitelists_pk_columns_input: {
      app_id: [232],
      chain: [5],
      contract: [5],
      __typename: [5]
    },
    whitelists_prepend_input: {
      actions: [127],
      tables: [127],
      __typename: [5]
    },
    whitelists_select_column: {},
    whitelists_set_input: {
      actions: [127],
      app_id: [232],
      chain: [5],
      contract: [5],
      history_ready: [0],
      start_block: [3],
      tables: [127],
      __typename: [5]
    },
    whitelists_stddev_fields: {
      start_block: [2],
      __typename: [5]
    },
    whitelists_stddev_pop_fields: {
      start_block: [2],
      __typename: [5]
    },
    whitelists_stddev_samp_fields: {
      start_block: [2],
      __typename: [5]
    },
    whitelists_stream_cursor_input: {
      initial_value: [259],
      ordering: [126],
      __typename: [5]
    },
    whitelists_stream_cursor_value_input: {
      actions: [127],
      app_id: [232],
      chain: [5],
      contract: [5],
      history_ready: [0],
      start_block: [3],
      tables: [127],
      __typename: [5]
    },
    whitelists_sum_fields: {
      start_block: [3],
      __typename: [5]
    },
    whitelists_update_column: {},
    whitelists_updates: {
      _append: [237],
      _delete_at_path: [241],
      _delete_elem: [242],
      _delete_key: [243],
      _inc: [244],
      _prepend: [252],
      _set: [254],
      where: [239],
      __typename: [5]
    },
    whitelists_var_pop_fields: {
      start_block: [2],
      __typename: [5]
    },
    whitelists_var_samp_fields: {
      start_block: [2],
      __typename: [5]
    },
    whitelists_variance_fields: {
      start_block: [2],
      __typename: [5]
    },
    Query: {
      actions: [
        7,
        {
          distinct_on: [26, "[actions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [23, "[actions_order_by!]"],
          where: [12]
        }
      ],
      actions_aggregate: [
        8,
        {
          distinct_on: [26, "[actions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [23, "[actions_order_by!]"],
          where: [12]
        }
      ],
      actions_by_pk: [
        7,
        {
          chain: [5, "String!"],
          global_sequence: [5, "String!"]
        }
      ],
      api_users: [
        39,
        {
          distinct_on: [53, "[api_users_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [51, "[api_users_order_by!]"],
          where: [43]
        }
      ],
      api_users_aggregate: [
        40,
        {
          distinct_on: [53, "[api_users_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [51, "[api_users_order_by!]"],
          where: [43]
        }
      ],
      api_users_by_pk: [
        39,
        {
          id: [3, "Int!"]
        }
      ],
      blocks: [
        66,
        {
          distinct_on: [87, "[blocks_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [85, "[blocks_order_by!]"],
          where: [75]
        }
      ],
      blocks_aggregate: [
        67,
        {
          distinct_on: [87, "[blocks_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [85, "[blocks_order_by!]"],
          where: [75]
        }
      ],
      blocks_by_pk: [
        66,
        {
          block_num: [3, "Int!"],
          chain: [5, "String!"]
        }
      ],
      chains: [
        107,
        {
          distinct_on: [120, "[chains_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [118, "[chains_order_by!]"],
          where: [110]
        }
      ],
      chains_aggregate: [
        108,
        {
          distinct_on: [120, "[chains_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [118, "[chains_order_by!]"],
          where: [110]
        }
      ],
      chains_by_pk: [
        107,
        {
          chain_name: [5, "String!"]
        }
      ],
      manifests: [
        130,
        {
          distinct_on: [143, "[manifests_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [141, "[manifests_order_by!]"],
          where: [133]
        }
      ],
      manifests_aggregate: [
        131,
        {
          distinct_on: [143, "[manifests_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [141, "[manifests_order_by!]"],
          where: [133]
        }
      ],
      manifests_by_pk: [
        130,
        {
          app_id: [232, "uuid!"]
        }
      ],
      mappings: [
        149,
        {
          distinct_on: [166, "[mappings_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [163, "[mappings_order_by!]"],
          where: [153]
        }
      ],
      mappings_aggregate: [
        150,
        {
          distinct_on: [166, "[mappings_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [163, "[mappings_order_by!]"],
          where: [153]
        }
      ],
      mappings_by_pk: [
        149,
        {
          chain: [5, "String!"],
          contract: [5, "String!"]
        }
      ],
      table_rows: [
        173,
        {
          distinct_on: [196, "[table_rows_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [193, "[table_rows_order_by!]"],
          where: [181]
        }
      ],
      table_rows_aggregate: [
        174,
        {
          distinct_on: [196, "[table_rows_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [193, "[table_rows_order_by!]"],
          where: [181]
        }
      ],
      table_rows_by_pk: [
        173,
        {
          chain: [5, "String!"],
          contract: [5, "String!"],
          primary_key: [5, "String!"],
          scope: [5, "String!"],
          table: [5, "String!"]
        }
      ],
      transactions: [
        204,
        {
          distinct_on: [219, "[transactions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [217, "[transactions_order_by!]"],
          where: [208]
        }
      ],
      transactions_aggregate: [
        205,
        {
          distinct_on: [219, "[transactions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [217, "[transactions_order_by!]"],
          where: [208]
        }
      ],
      transactions_by_pk: [
        204,
        {
          chain: [5, "String!"],
          transaction_id: [5, "String!"]
        }
      ],
      whitelists: [
        234,
        {
          distinct_on: [253, "[whitelists_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [250, "[whitelists_order_by!]"],
          where: [239]
        }
      ],
      whitelists_aggregate: [
        235,
        {
          distinct_on: [253, "[whitelists_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [250, "[whitelists_order_by!]"],
          where: [239]
        }
      ],
      whitelists_by_pk: [
        234,
        {
          app_id: [232, "uuid!"],
          chain: [5, "String!"],
          contract: [5, "String!"]
        }
      ],
      __typename: [5]
    },
    Mutation: {
      delete_actions: [
        21,
        {
          where: [12, "actions_bool_exp!"]
        }
      ],
      delete_actions_by_pk: [
        7,
        {
          chain: [5, "String!"],
          global_sequence: [5, "String!"]
        }
      ],
      delete_api_users: [
        49,
        {
          where: [43, "api_users_bool_exp!"]
        }
      ],
      delete_api_users_by_pk: [
        39,
        {
          id: [3, "Int!"]
        }
      ],
      delete_blocks: [
        83,
        {
          where: [75, "blocks_bool_exp!"]
        }
      ],
      delete_blocks_by_pk: [
        66,
        {
          block_num: [3, "Int!"],
          chain: [5, "String!"]
        }
      ],
      delete_chains: [
        115,
        {
          where: [110, "chains_bool_exp!"]
        }
      ],
      delete_chains_by_pk: [
        107,
        {
          chain_name: [5, "String!"]
        }
      ],
      delete_manifests: [
        138,
        {
          where: [133, "manifests_bool_exp!"]
        }
      ],
      delete_manifests_by_pk: [
        130,
        {
          app_id: [232, "uuid!"]
        }
      ],
      delete_mappings: [
        161,
        {
          where: [153, "mappings_bool_exp!"]
        }
      ],
      delete_mappings_by_pk: [
        149,
        {
          chain: [5, "String!"],
          contract: [5, "String!"]
        }
      ],
      delete_table_rows: [
        191,
        {
          where: [181, "table_rows_bool_exp!"]
        }
      ],
      delete_table_rows_by_pk: [
        173,
        {
          chain: [5, "String!"],
          contract: [5, "String!"],
          primary_key: [5, "String!"],
          scope: [5, "String!"],
          table: [5, "String!"]
        }
      ],
      delete_transactions: [
        214,
        {
          where: [208, "transactions_bool_exp!"]
        }
      ],
      delete_transactions_by_pk: [
        204,
        {
          chain: [5, "String!"],
          transaction_id: [5, "String!"]
        }
      ],
      delete_whitelists: [
        248,
        {
          where: [239, "whitelists_bool_exp!"]
        }
      ],
      delete_whitelists_by_pk: [
        234,
        {
          app_id: [232, "uuid!"],
          chain: [5, "String!"],
          contract: [5, "String!"]
        }
      ],
      insert_actions: [
        21,
        {
          objects: [18, "[actions_insert_input!]!"],
          on_conflict: [22]
        }
      ],
      insert_actions_one: [
        7,
        {
          object: [18, "actions_insert_input!"],
          on_conflict: [22]
        }
      ],
      insert_api_users: [
        49,
        {
          objects: [46, "[api_users_insert_input!]!"],
          on_conflict: [50]
        }
      ],
      insert_api_users_one: [
        39,
        {
          object: [46, "api_users_insert_input!"],
          on_conflict: [50]
        }
      ],
      insert_blocks: [
        83,
        {
          objects: [78, "[blocks_insert_input!]!"],
          on_conflict: [84]
        }
      ],
      insert_blocks_one: [
        66,
        {
          object: [78, "blocks_insert_input!"],
          on_conflict: [84]
        }
      ],
      insert_chains: [
        115,
        {
          objects: [112, "[chains_insert_input!]!"],
          on_conflict: [117]
        }
      ],
      insert_chains_one: [
        107,
        {
          object: [112, "chains_insert_input!"],
          on_conflict: [117]
        }
      ],
      insert_manifests: [
        138,
        {
          objects: [135, "[manifests_insert_input!]!"],
          on_conflict: [140]
        }
      ],
      insert_manifests_one: [
        130,
        {
          object: [135, "manifests_insert_input!"],
          on_conflict: [140]
        }
      ],
      insert_mappings: [
        161,
        {
          objects: [158, "[mappings_insert_input!]!"],
          on_conflict: [162]
        }
      ],
      insert_mappings_one: [
        149,
        {
          object: [158, "mappings_insert_input!"],
          on_conflict: [162]
        }
      ],
      insert_table_rows: [
        191,
        {
          objects: [186, "[table_rows_insert_input!]!"],
          on_conflict: [192]
        }
      ],
      insert_table_rows_one: [
        173,
        {
          object: [186, "table_rows_insert_input!"],
          on_conflict: [192]
        }
      ],
      insert_transactions: [
        214,
        {
          objects: [211, "[transactions_insert_input!]!"],
          on_conflict: [216]
        }
      ],
      insert_transactions_one: [
        204,
        {
          object: [211, "transactions_insert_input!"],
          on_conflict: [216]
        }
      ],
      insert_whitelists: [
        248,
        {
          objects: [245, "[whitelists_insert_input!]!"],
          on_conflict: [249]
        }
      ],
      insert_whitelists_one: [
        234,
        {
          object: [245, "whitelists_insert_input!"],
          on_conflict: [249]
        }
      ],
      update_actions: [
        21,
        {
          _append: [10],
          _delete_at_path: [14],
          _delete_elem: [15],
          _delete_key: [16],
          _inc: [17],
          _prepend: [25],
          _set: [27],
          where: [12, "actions_bool_exp!"]
        }
      ],
      update_actions_by_pk: [
        7,
        {
          _append: [10],
          _delete_at_path: [14],
          _delete_elem: [15],
          _delete_key: [16],
          _inc: [17],
          _prepend: [25],
          _set: [27],
          pk_columns: [24, "actions_pk_columns_input!"]
        }
      ],
      update_actions_many: [
        21,
        {
          updates: [35, "[actions_updates!]!"]
        }
      ],
      update_api_users: [
        49,
        {
          _inc: [45],
          _set: [54],
          where: [43, "api_users_bool_exp!"]
        }
      ],
      update_api_users_by_pk: [
        39,
        {
          _inc: [45],
          _set: [54],
          pk_columns: [52, "api_users_pk_columns_input!"]
        }
      ],
      update_api_users_many: [
        49,
        {
          updates: [62, "[api_users_updates!]!"]
        }
      ],
      update_blocks: [
        83,
        {
          _inc: [77],
          _set: [88],
          where: [75, "blocks_bool_exp!"]
        }
      ],
      update_blocks_by_pk: [
        66,
        {
          _inc: [77],
          _set: [88],
          pk_columns: [86, "blocks_pk_columns_input!"]
        }
      ],
      update_blocks_many: [
        83,
        {
          updates: [100, "[blocks_updates!]!"]
        }
      ],
      update_chains: [
        115,
        {
          _set: [121],
          where: [110, "chains_bool_exp!"]
        }
      ],
      update_chains_by_pk: [
        107,
        {
          _set: [121],
          pk_columns: [119, "chains_pk_columns_input!"]
        }
      ],
      update_chains_many: [
        115,
        {
          updates: [125, "[chains_updates!]!"]
        }
      ],
      update_manifests: [
        138,
        {
          _set: [144],
          where: [133, "manifests_bool_exp!"]
        }
      ],
      update_manifests_by_pk: [
        130,
        {
          _set: [144],
          pk_columns: [142, "manifests_pk_columns_input!"]
        }
      ],
      update_manifests_many: [
        138,
        {
          updates: [148, "[manifests_updates!]!"]
        }
      ],
      update_mappings: [
        161,
        {
          _append: [152],
          _delete_at_path: [155],
          _delete_elem: [156],
          _delete_key: [157],
          _prepend: [165],
          _set: [167],
          where: [153, "mappings_bool_exp!"]
        }
      ],
      update_mappings_by_pk: [
        149,
        {
          _append: [152],
          _delete_at_path: [155],
          _delete_elem: [156],
          _delete_key: [157],
          _prepend: [165],
          _set: [167],
          pk_columns: [164, "mappings_pk_columns_input!"]
        }
      ],
      update_mappings_many: [
        161,
        {
          updates: [171, "[mappings_updates!]!"]
        }
      ],
      update_table_rows: [
        191,
        {
          _append: [179],
          _delete_at_path: [183],
          _delete_elem: [184],
          _delete_key: [185],
          _prepend: [195],
          _set: [197],
          where: [181, "table_rows_bool_exp!"]
        }
      ],
      update_table_rows_by_pk: [
        173,
        {
          _append: [179],
          _delete_at_path: [183],
          _delete_elem: [184],
          _delete_key: [185],
          _prepend: [195],
          _set: [197],
          pk_columns: [194, "table_rows_pk_columns_input!"]
        }
      ],
      update_table_rows_many: [
        191,
        {
          updates: [201, "[table_rows_updates!]!"]
        }
      ],
      update_transactions: [
        214,
        {
          _inc: [210],
          _set: [220],
          where: [208, "transactions_bool_exp!"]
        }
      ],
      update_transactions_by_pk: [
        204,
        {
          _inc: [210],
          _set: [220],
          pk_columns: [218, "transactions_pk_columns_input!"]
        }
      ],
      update_transactions_many: [
        214,
        {
          updates: [228, "[transactions_updates!]!"]
        }
      ],
      update_whitelists: [
        248,
        {
          _append: [237],
          _delete_at_path: [241],
          _delete_elem: [242],
          _delete_key: [243],
          _inc: [244],
          _prepend: [252],
          _set: [254],
          where: [239, "whitelists_bool_exp!"]
        }
      ],
      update_whitelists_by_pk: [
        234,
        {
          _append: [237],
          _delete_at_path: [241],
          _delete_elem: [242],
          _delete_key: [243],
          _inc: [244],
          _prepend: [252],
          _set: [254],
          pk_columns: [251, "whitelists_pk_columns_input!"]
        }
      ],
      update_whitelists_many: [
        248,
        {
          updates: [262, "[whitelists_updates!]!"]
        }
      ],
      __typename: [5]
    },
    Subscription: {
      actions: [
        7,
        {
          distinct_on: [26, "[actions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [23, "[actions_order_by!]"],
          where: [12]
        }
      ],
      actions_aggregate: [
        8,
        {
          distinct_on: [26, "[actions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [23, "[actions_order_by!]"],
          where: [12]
        }
      ],
      actions_by_pk: [
        7,
        {
          chain: [5, "String!"],
          global_sequence: [5, "String!"]
        }
      ],
      actions_stream: [
        7,
        {
          batch_size: [3, "Int!"],
          cursor: [31, "[actions_stream_cursor_input]!"],
          where: [12]
        }
      ],
      api_users: [
        39,
        {
          distinct_on: [53, "[api_users_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [51, "[api_users_order_by!]"],
          where: [43]
        }
      ],
      api_users_aggregate: [
        40,
        {
          distinct_on: [53, "[api_users_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [51, "[api_users_order_by!]"],
          where: [43]
        }
      ],
      api_users_by_pk: [
        39,
        {
          id: [3, "Int!"]
        }
      ],
      api_users_stream: [
        39,
        {
          batch_size: [3, "Int!"],
          cursor: [58, "[api_users_stream_cursor_input]!"],
          where: [43]
        }
      ],
      blocks: [
        66,
        {
          distinct_on: [87, "[blocks_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [85, "[blocks_order_by!]"],
          where: [75]
        }
      ],
      blocks_aggregate: [
        67,
        {
          distinct_on: [87, "[blocks_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [85, "[blocks_order_by!]"],
          where: [75]
        }
      ],
      blocks_by_pk: [
        66,
        {
          block_num: [3, "Int!"],
          chain: [5, "String!"]
        }
      ],
      blocks_stream: [
        66,
        {
          batch_size: [3, "Int!"],
          cursor: [95, "[blocks_stream_cursor_input]!"],
          where: [75]
        }
      ],
      chains: [
        107,
        {
          distinct_on: [120, "[chains_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [118, "[chains_order_by!]"],
          where: [110]
        }
      ],
      chains_aggregate: [
        108,
        {
          distinct_on: [120, "[chains_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [118, "[chains_order_by!]"],
          where: [110]
        }
      ],
      chains_by_pk: [
        107,
        {
          chain_name: [5, "String!"]
        }
      ],
      chains_stream: [
        107,
        {
          batch_size: [3, "Int!"],
          cursor: [122, "[chains_stream_cursor_input]!"],
          where: [110]
        }
      ],
      manifests: [
        130,
        {
          distinct_on: [143, "[manifests_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [141, "[manifests_order_by!]"],
          where: [133]
        }
      ],
      manifests_aggregate: [
        131,
        {
          distinct_on: [143, "[manifests_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [141, "[manifests_order_by!]"],
          where: [133]
        }
      ],
      manifests_by_pk: [
        130,
        {
          app_id: [232, "uuid!"]
        }
      ],
      manifests_stream: [
        130,
        {
          batch_size: [3, "Int!"],
          cursor: [145, "[manifests_stream_cursor_input]!"],
          where: [133]
        }
      ],
      mappings: [
        149,
        {
          distinct_on: [166, "[mappings_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [163, "[mappings_order_by!]"],
          where: [153]
        }
      ],
      mappings_aggregate: [
        150,
        {
          distinct_on: [166, "[mappings_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [163, "[mappings_order_by!]"],
          where: [153]
        }
      ],
      mappings_by_pk: [
        149,
        {
          chain: [5, "String!"],
          contract: [5, "String!"]
        }
      ],
      mappings_stream: [
        149,
        {
          batch_size: [3, "Int!"],
          cursor: [168, "[mappings_stream_cursor_input]!"],
          where: [153]
        }
      ],
      table_rows: [
        173,
        {
          distinct_on: [196, "[table_rows_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [193, "[table_rows_order_by!]"],
          where: [181]
        }
      ],
      table_rows_aggregate: [
        174,
        {
          distinct_on: [196, "[table_rows_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [193, "[table_rows_order_by!]"],
          where: [181]
        }
      ],
      table_rows_by_pk: [
        173,
        {
          chain: [5, "String!"],
          contract: [5, "String!"],
          primary_key: [5, "String!"],
          scope: [5, "String!"],
          table: [5, "String!"]
        }
      ],
      table_rows_stream: [
        173,
        {
          batch_size: [3, "Int!"],
          cursor: [198, "[table_rows_stream_cursor_input]!"],
          where: [181]
        }
      ],
      transactions: [
        204,
        {
          distinct_on: [219, "[transactions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [217, "[transactions_order_by!]"],
          where: [208]
        }
      ],
      transactions_aggregate: [
        205,
        {
          distinct_on: [219, "[transactions_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [217, "[transactions_order_by!]"],
          where: [208]
        }
      ],
      transactions_by_pk: [
        204,
        {
          chain: [5, "String!"],
          transaction_id: [5, "String!"]
        }
      ],
      transactions_stream: [
        204,
        {
          batch_size: [3, "Int!"],
          cursor: [224, "[transactions_stream_cursor_input]!"],
          where: [208]
        }
      ],
      whitelists: [
        234,
        {
          distinct_on: [253, "[whitelists_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [250, "[whitelists_order_by!]"],
          where: [239]
        }
      ],
      whitelists_aggregate: [
        235,
        {
          distinct_on: [253, "[whitelists_select_column!]"],
          limit: [3],
          offset: [3],
          order_by: [250, "[whitelists_order_by!]"],
          where: [239]
        }
      ],
      whitelists_by_pk: [
        234,
        {
          app_id: [232, "uuid!"],
          chain: [5, "String!"],
          contract: [5, "String!"]
        }
      ],
      whitelists_stream: [
        234,
        {
          batch_size: [3, "Int!"],
          cursor: [258, "[whitelists_stream_cursor_input]!"],
          where: [239]
        }
      ],
      __typename: [5]
    }
  }
};

// generated/schema.ts
var actions_possibleTypes = ["actions"];
var isactions = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename)) throw new Error('__typename is missing in "isactions"');
  return actions_possibleTypes.includes(obj.__typename);
};
var actions_aggregate_possibleTypes = ["actions_aggregate"];
var isactions_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_aggregate"');
  return actions_aggregate_possibleTypes.includes(obj.__typename);
};
var actions_aggregate_fields_possibleTypes = [
  "actions_aggregate_fields"
];
var isactions_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_aggregate_fields"');
  return actions_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var actions_avg_fields_possibleTypes = ["actions_avg_fields"];
var isactions_avg_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_avg_fields"');
  return actions_avg_fields_possibleTypes.includes(obj.__typename);
};
var actions_max_fields_possibleTypes = ["actions_max_fields"];
var isactions_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_max_fields"');
  return actions_max_fields_possibleTypes.includes(obj.__typename);
};
var actions_min_fields_possibleTypes = ["actions_min_fields"];
var isactions_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_min_fields"');
  return actions_min_fields_possibleTypes.includes(obj.__typename);
};
var actions_mutation_response_possibleTypes = [
  "actions_mutation_response"
];
var isactions_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_mutation_response"');
  return actions_mutation_response_possibleTypes.includes(obj.__typename);
};
var actions_stddev_fields_possibleTypes = ["actions_stddev_fields"];
var isactions_stddev_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_stddev_fields"');
  return actions_stddev_fields_possibleTypes.includes(obj.__typename);
};
var actions_stddev_pop_fields_possibleTypes = [
  "actions_stddev_pop_fields"
];
var isactions_stddev_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_stddev_pop_fields"');
  return actions_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
var actions_stddev_samp_fields_possibleTypes = [
  "actions_stddev_samp_fields"
];
var isactions_stddev_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_stddev_samp_fields"');
  return actions_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
var actions_sum_fields_possibleTypes = ["actions_sum_fields"];
var isactions_sum_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_sum_fields"');
  return actions_sum_fields_possibleTypes.includes(obj.__typename);
};
var actions_var_pop_fields_possibleTypes = [
  "actions_var_pop_fields"
];
var isactions_var_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_var_pop_fields"');
  return actions_var_pop_fields_possibleTypes.includes(obj.__typename);
};
var actions_var_samp_fields_possibleTypes = [
  "actions_var_samp_fields"
];
var isactions_var_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_var_samp_fields"');
  return actions_var_samp_fields_possibleTypes.includes(obj.__typename);
};
var actions_variance_fields_possibleTypes = [
  "actions_variance_fields"
];
var isactions_variance_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isactions_variance_fields"');
  return actions_variance_fields_possibleTypes.includes(obj.__typename);
};
var api_users_possibleTypes = ["api_users"];
var isapi_users = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users"');
  return api_users_possibleTypes.includes(obj.__typename);
};
var api_users_aggregate_possibleTypes = ["api_users_aggregate"];
var isapi_users_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_aggregate"');
  return api_users_aggregate_possibleTypes.includes(obj.__typename);
};
var api_users_aggregate_fields_possibleTypes = [
  "api_users_aggregate_fields"
];
var isapi_users_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_aggregate_fields"');
  return api_users_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var api_users_avg_fields_possibleTypes = ["api_users_avg_fields"];
var isapi_users_avg_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_avg_fields"');
  return api_users_avg_fields_possibleTypes.includes(obj.__typename);
};
var api_users_max_fields_possibleTypes = ["api_users_max_fields"];
var isapi_users_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_max_fields"');
  return api_users_max_fields_possibleTypes.includes(obj.__typename);
};
var api_users_min_fields_possibleTypes = ["api_users_min_fields"];
var isapi_users_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_min_fields"');
  return api_users_min_fields_possibleTypes.includes(obj.__typename);
};
var api_users_mutation_response_possibleTypes = [
  "api_users_mutation_response"
];
var isapi_users_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_mutation_response"');
  return api_users_mutation_response_possibleTypes.includes(obj.__typename);
};
var api_users_stddev_fields_possibleTypes = [
  "api_users_stddev_fields"
];
var isapi_users_stddev_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_stddev_fields"');
  return api_users_stddev_fields_possibleTypes.includes(obj.__typename);
};
var api_users_stddev_pop_fields_possibleTypes = [
  "api_users_stddev_pop_fields"
];
var isapi_users_stddev_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_stddev_pop_fields"');
  return api_users_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
var api_users_stddev_samp_fields_possibleTypes = [
  "api_users_stddev_samp_fields"
];
var isapi_users_stddev_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_stddev_samp_fields"');
  return api_users_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
var api_users_sum_fields_possibleTypes = ["api_users_sum_fields"];
var isapi_users_sum_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_sum_fields"');
  return api_users_sum_fields_possibleTypes.includes(obj.__typename);
};
var api_users_var_pop_fields_possibleTypes = [
  "api_users_var_pop_fields"
];
var isapi_users_var_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_var_pop_fields"');
  return api_users_var_pop_fields_possibleTypes.includes(obj.__typename);
};
var api_users_var_samp_fields_possibleTypes = [
  "api_users_var_samp_fields"
];
var isapi_users_var_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_var_samp_fields"');
  return api_users_var_samp_fields_possibleTypes.includes(obj.__typename);
};
var api_users_variance_fields_possibleTypes = [
  "api_users_variance_fields"
];
var isapi_users_variance_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isapi_users_variance_fields"');
  return api_users_variance_fields_possibleTypes.includes(obj.__typename);
};
var blocks_possibleTypes = ["blocks"];
var isblocks = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename)) throw new Error('__typename is missing in "isblocks"');
  return blocks_possibleTypes.includes(obj.__typename);
};
var blocks_aggregate_possibleTypes = ["blocks_aggregate"];
var isblocks_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_aggregate"');
  return blocks_aggregate_possibleTypes.includes(obj.__typename);
};
var blocks_aggregate_fields_possibleTypes = [
  "blocks_aggregate_fields"
];
var isblocks_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_aggregate_fields"');
  return blocks_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var blocks_avg_fields_possibleTypes = ["blocks_avg_fields"];
var isblocks_avg_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_avg_fields"');
  return blocks_avg_fields_possibleTypes.includes(obj.__typename);
};
var blocks_max_fields_possibleTypes = ["blocks_max_fields"];
var isblocks_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_max_fields"');
  return blocks_max_fields_possibleTypes.includes(obj.__typename);
};
var blocks_min_fields_possibleTypes = ["blocks_min_fields"];
var isblocks_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_min_fields"');
  return blocks_min_fields_possibleTypes.includes(obj.__typename);
};
var blocks_mutation_response_possibleTypes = [
  "blocks_mutation_response"
];
var isblocks_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_mutation_response"');
  return blocks_mutation_response_possibleTypes.includes(obj.__typename);
};
var blocks_stddev_fields_possibleTypes = ["blocks_stddev_fields"];
var isblocks_stddev_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_stddev_fields"');
  return blocks_stddev_fields_possibleTypes.includes(obj.__typename);
};
var blocks_stddev_pop_fields_possibleTypes = [
  "blocks_stddev_pop_fields"
];
var isblocks_stddev_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_stddev_pop_fields"');
  return blocks_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
var blocks_stddev_samp_fields_possibleTypes = [
  "blocks_stddev_samp_fields"
];
var isblocks_stddev_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_stddev_samp_fields"');
  return blocks_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
var blocks_sum_fields_possibleTypes = ["blocks_sum_fields"];
var isblocks_sum_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_sum_fields"');
  return blocks_sum_fields_possibleTypes.includes(obj.__typename);
};
var blocks_var_pop_fields_possibleTypes = ["blocks_var_pop_fields"];
var isblocks_var_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_var_pop_fields"');
  return blocks_var_pop_fields_possibleTypes.includes(obj.__typename);
};
var blocks_var_samp_fields_possibleTypes = [
  "blocks_var_samp_fields"
];
var isblocks_var_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_var_samp_fields"');
  return blocks_var_samp_fields_possibleTypes.includes(obj.__typename);
};
var blocks_variance_fields_possibleTypes = [
  "blocks_variance_fields"
];
var isblocks_variance_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isblocks_variance_fields"');
  return blocks_variance_fields_possibleTypes.includes(obj.__typename);
};
var chains_possibleTypes = ["chains"];
var ischains = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename)) throw new Error('__typename is missing in "ischains"');
  return chains_possibleTypes.includes(obj.__typename);
};
var chains_aggregate_possibleTypes = ["chains_aggregate"];
var ischains_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ischains_aggregate"');
  return chains_aggregate_possibleTypes.includes(obj.__typename);
};
var chains_aggregate_fields_possibleTypes = [
  "chains_aggregate_fields"
];
var ischains_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ischains_aggregate_fields"');
  return chains_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var chains_max_fields_possibleTypes = ["chains_max_fields"];
var ischains_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ischains_max_fields"');
  return chains_max_fields_possibleTypes.includes(obj.__typename);
};
var chains_min_fields_possibleTypes = ["chains_min_fields"];
var ischains_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ischains_min_fields"');
  return chains_min_fields_possibleTypes.includes(obj.__typename);
};
var chains_mutation_response_possibleTypes = [
  "chains_mutation_response"
];
var ischains_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ischains_mutation_response"');
  return chains_mutation_response_possibleTypes.includes(obj.__typename);
};
var manifests_possibleTypes = ["manifests"];
var ismanifests = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismanifests"');
  return manifests_possibleTypes.includes(obj.__typename);
};
var manifests_aggregate_possibleTypes = ["manifests_aggregate"];
var ismanifests_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismanifests_aggregate"');
  return manifests_aggregate_possibleTypes.includes(obj.__typename);
};
var manifests_aggregate_fields_possibleTypes = [
  "manifests_aggregate_fields"
];
var ismanifests_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismanifests_aggregate_fields"');
  return manifests_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var manifests_max_fields_possibleTypes = ["manifests_max_fields"];
var ismanifests_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismanifests_max_fields"');
  return manifests_max_fields_possibleTypes.includes(obj.__typename);
};
var manifests_min_fields_possibleTypes = ["manifests_min_fields"];
var ismanifests_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismanifests_min_fields"');
  return manifests_min_fields_possibleTypes.includes(obj.__typename);
};
var manifests_mutation_response_possibleTypes = [
  "manifests_mutation_response"
];
var ismanifests_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismanifests_mutation_response"');
  return manifests_mutation_response_possibleTypes.includes(obj.__typename);
};
var mappings_possibleTypes = ["mappings"];
var ismappings = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename)) throw new Error('__typename is missing in "ismappings"');
  return mappings_possibleTypes.includes(obj.__typename);
};
var mappings_aggregate_possibleTypes = ["mappings_aggregate"];
var ismappings_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismappings_aggregate"');
  return mappings_aggregate_possibleTypes.includes(obj.__typename);
};
var mappings_aggregate_fields_possibleTypes = [
  "mappings_aggregate_fields"
];
var ismappings_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismappings_aggregate_fields"');
  return mappings_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var mappings_max_fields_possibleTypes = ["mappings_max_fields"];
var ismappings_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismappings_max_fields"');
  return mappings_max_fields_possibleTypes.includes(obj.__typename);
};
var mappings_min_fields_possibleTypes = ["mappings_min_fields"];
var ismappings_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismappings_min_fields"');
  return mappings_min_fields_possibleTypes.includes(obj.__typename);
};
var mappings_mutation_response_possibleTypes = [
  "mappings_mutation_response"
];
var ismappings_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismappings_mutation_response"');
  return mappings_mutation_response_possibleTypes.includes(obj.__typename);
};
var mutation_root_possibleTypes = ["mutation_root"];
var ismutation_root = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "ismutation_root"');
  return mutation_root_possibleTypes.includes(obj.__typename);
};
var query_root_possibleTypes = ["query_root"];
var isquery_root = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "isquery_root"');
  return query_root_possibleTypes.includes(obj.__typename);
};
var subscription_root_possibleTypes = ["subscription_root"];
var issubscription_root = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "issubscription_root"');
  return subscription_root_possibleTypes.includes(obj.__typename);
};
var table_rows_possibleTypes = ["table_rows"];
var istable_rows = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istable_rows"');
  return table_rows_possibleTypes.includes(obj.__typename);
};
var table_rows_aggregate_possibleTypes = ["table_rows_aggregate"];
var istable_rows_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istable_rows_aggregate"');
  return table_rows_aggregate_possibleTypes.includes(obj.__typename);
};
var table_rows_aggregate_fields_possibleTypes = [
  "table_rows_aggregate_fields"
];
var istable_rows_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istable_rows_aggregate_fields"');
  return table_rows_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var table_rows_max_fields_possibleTypes = ["table_rows_max_fields"];
var istable_rows_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istable_rows_max_fields"');
  return table_rows_max_fields_possibleTypes.includes(obj.__typename);
};
var table_rows_min_fields_possibleTypes = ["table_rows_min_fields"];
var istable_rows_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istable_rows_min_fields"');
  return table_rows_min_fields_possibleTypes.includes(obj.__typename);
};
var table_rows_mutation_response_possibleTypes = [
  "table_rows_mutation_response"
];
var istable_rows_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istable_rows_mutation_response"');
  return table_rows_mutation_response_possibleTypes.includes(obj.__typename);
};
var transactions_possibleTypes = ["transactions"];
var istransactions = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions"');
  return transactions_possibleTypes.includes(obj.__typename);
};
var transactions_aggregate_possibleTypes = [
  "transactions_aggregate"
];
var istransactions_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_aggregate"');
  return transactions_aggregate_possibleTypes.includes(obj.__typename);
};
var transactions_aggregate_fields_possibleTypes = [
  "transactions_aggregate_fields"
];
var istransactions_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error(
      '__typename is missing in "istransactions_aggregate_fields"'
    );
  return transactions_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var transactions_avg_fields_possibleTypes = [
  "transactions_avg_fields"
];
var istransactions_avg_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_avg_fields"');
  return transactions_avg_fields_possibleTypes.includes(obj.__typename);
};
var transactions_max_fields_possibleTypes = [
  "transactions_max_fields"
];
var istransactions_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_max_fields"');
  return transactions_max_fields_possibleTypes.includes(obj.__typename);
};
var transactions_min_fields_possibleTypes = [
  "transactions_min_fields"
];
var istransactions_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_min_fields"');
  return transactions_min_fields_possibleTypes.includes(obj.__typename);
};
var transactions_mutation_response_possibleTypes = [
  "transactions_mutation_response"
];
var istransactions_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error(
      '__typename is missing in "istransactions_mutation_response"'
    );
  return transactions_mutation_response_possibleTypes.includes(obj.__typename);
};
var transactions_stddev_fields_possibleTypes = [
  "transactions_stddev_fields"
];
var istransactions_stddev_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_stddev_fields"');
  return transactions_stddev_fields_possibleTypes.includes(obj.__typename);
};
var transactions_stddev_pop_fields_possibleTypes = [
  "transactions_stddev_pop_fields"
];
var istransactions_stddev_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error(
      '__typename is missing in "istransactions_stddev_pop_fields"'
    );
  return transactions_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
var transactions_stddev_samp_fields_possibleTypes = [
  "transactions_stddev_samp_fields"
];
var istransactions_stddev_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error(
      '__typename is missing in "istransactions_stddev_samp_fields"'
    );
  return transactions_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
var transactions_sum_fields_possibleTypes = [
  "transactions_sum_fields"
];
var istransactions_sum_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_sum_fields"');
  return transactions_sum_fields_possibleTypes.includes(obj.__typename);
};
var transactions_var_pop_fields_possibleTypes = [
  "transactions_var_pop_fields"
];
var istransactions_var_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_var_pop_fields"');
  return transactions_var_pop_fields_possibleTypes.includes(obj.__typename);
};
var transactions_var_samp_fields_possibleTypes = [
  "transactions_var_samp_fields"
];
var istransactions_var_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_var_samp_fields"');
  return transactions_var_samp_fields_possibleTypes.includes(obj.__typename);
};
var transactions_variance_fields_possibleTypes = [
  "transactions_variance_fields"
];
var istransactions_variance_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "istransactions_variance_fields"');
  return transactions_variance_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_possibleTypes = ["whitelists"];
var iswhitelists = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists"');
  return whitelists_possibleTypes.includes(obj.__typename);
};
var whitelists_aggregate_possibleTypes = ["whitelists_aggregate"];
var iswhitelists_aggregate = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_aggregate"');
  return whitelists_aggregate_possibleTypes.includes(obj.__typename);
};
var whitelists_aggregate_fields_possibleTypes = [
  "whitelists_aggregate_fields"
];
var iswhitelists_aggregate_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_aggregate_fields"');
  return whitelists_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_avg_fields_possibleTypes = ["whitelists_avg_fields"];
var iswhitelists_avg_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_avg_fields"');
  return whitelists_avg_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_max_fields_possibleTypes = ["whitelists_max_fields"];
var iswhitelists_max_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_max_fields"');
  return whitelists_max_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_min_fields_possibleTypes = ["whitelists_min_fields"];
var iswhitelists_min_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_min_fields"');
  return whitelists_min_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_mutation_response_possibleTypes = [
  "whitelists_mutation_response"
];
var iswhitelists_mutation_response = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_mutation_response"');
  return whitelists_mutation_response_possibleTypes.includes(obj.__typename);
};
var whitelists_stddev_fields_possibleTypes = [
  "whitelists_stddev_fields"
];
var iswhitelists_stddev_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_stddev_fields"');
  return whitelists_stddev_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_stddev_pop_fields_possibleTypes = [
  "whitelists_stddev_pop_fields"
];
var iswhitelists_stddev_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_stddev_pop_fields"');
  return whitelists_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_stddev_samp_fields_possibleTypes = [
  "whitelists_stddev_samp_fields"
];
var iswhitelists_stddev_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error(
      '__typename is missing in "iswhitelists_stddev_samp_fields"'
    );
  return whitelists_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_sum_fields_possibleTypes = ["whitelists_sum_fields"];
var iswhitelists_sum_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_sum_fields"');
  return whitelists_sum_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_var_pop_fields_possibleTypes = [
  "whitelists_var_pop_fields"
];
var iswhitelists_var_pop_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_var_pop_fields"');
  return whitelists_var_pop_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_var_samp_fields_possibleTypes = [
  "whitelists_var_samp_fields"
];
var iswhitelists_var_samp_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_var_samp_fields"');
  return whitelists_var_samp_fields_possibleTypes.includes(obj.__typename);
};
var whitelists_variance_fields_possibleTypes = [
  "whitelists_variance_fields"
];
var iswhitelists_variance_fields = (obj) => {
  if (!(obj == null ? void 0 : obj.__typename))
    throw new Error('__typename is missing in "iswhitelists_variance_fields"');
  return whitelists_variance_fields_possibleTypes.includes(obj.__typename);
};
var enumActionsConstraint = {
  actions_pkey: "actions_pkey"
};
var enumActionsSelectColumn = {
  account_disk_deltas: "account_disk_deltas",
  account_ram_deltas: "account_ram_deltas",
  action: "action",
  action_ordinal: "action_ordinal",
  authorization: "authorization",
  chain: "chain",
  console: "console",
  context_free: "context_free",
  contract: "contract",
  data: "data",
  global_sequence: "global_sequence",
  receipt: "receipt",
  receiver: "receiver",
  transaction_id: "transaction_id"
};
var enumActionsUpdateColumn = {
  account_disk_deltas: "account_disk_deltas",
  account_ram_deltas: "account_ram_deltas",
  action: "action",
  action_ordinal: "action_ordinal",
  authorization: "authorization",
  chain: "chain",
  console: "console",
  context_free: "context_free",
  contract: "contract",
  data: "data",
  global_sequence: "global_sequence",
  receipt: "receipt",
  receiver: "receiver",
  transaction_id: "transaction_id"
};
var enumApiUsersConstraint = {
  api_users_api_key_key: "api_users_api_key_key",
  api_users_pkey: "api_users_pkey"
};
var enumApiUsersSelectColumn = {
  account: "account",
  api_key: "api_key",
  created_at: "created_at",
  domain_names: "domain_names",
  id: "id",
  updated_at: "updated_at"
};
var enumApiUsersUpdateColumn = {
  account: "account",
  api_key: "api_key",
  created_at: "created_at",
  domain_names: "domain_names",
  id: "id",
  updated_at: "updated_at"
};
var enumBlocksConstraint = {
  blocks_block_id_key: "blocks_block_id_key",
  blocks_pkey: "blocks_pkey"
};
var enumBlocksSelectColumn = {
  block_id: "block_id",
  block_num: "block_num",
  chain: "chain",
  producer: "producer",
  timestamp: "timestamp"
};
var enumBlocksUpdateColumn = {
  block_id: "block_id",
  block_num: "block_num",
  chain: "chain",
  producer: "producer",
  timestamp: "timestamp"
};
var enumChainsConstraint = {
  chains_pkey: "chains_pkey"
};
var enumChainsSelectColumn = {
  chain_id: "chain_id",
  chain_name: "chain_name",
  rpc_endpoint: "rpc_endpoint"
};
var enumChainsUpdateColumn = {
  chain_id: "chain_id",
  chain_name: "chain_name",
  rpc_endpoint: "rpc_endpoint"
};
var enumCursorOrdering = {
  ASC: "ASC",
  DESC: "DESC"
};
var enumManifestsConstraint = {
  manifests_pkey: "manifests_pkey"
};
var enumManifestsSelectColumn = {
  app_id: "app_id",
  app_name: "app_name",
  description: "description",
  url: "url"
};
var enumManifestsUpdateColumn = {
  app_id: "app_id",
  app_name: "app_name",
  description: "description",
  url: "url"
};
var enumMappingsConstraint = {
  mappings_pkey: "mappings_pkey"
};
var enumMappingsSelectColumn = {
  abi: "abi",
  chain: "chain",
  contract: "contract",
  contract_type: "contract_type",
  tables: "tables"
};
var enumMappingsUpdateColumn = {
  abi: "abi",
  chain: "chain",
  contract: "contract",
  contract_type: "contract_type",
  tables: "tables"
};
var enumOrderBy = {
  asc: "asc",
  asc_nulls_first: "asc_nulls_first",
  asc_nulls_last: "asc_nulls_last",
  desc: "desc",
  desc_nulls_first: "desc_nulls_first",
  desc_nulls_last: "desc_nulls_last"
};
var enumTableRowsConstraint = {
  tables_pkey: "tables_pkey"
};
var enumTableRowsSelectColumn = {
  chain: "chain",
  contract: "contract",
  data: "data",
  primary_key: "primary_key",
  scope: "scope",
  table: "table"
};
var enumTableRowsUpdateColumn = {
  chain: "chain",
  contract: "contract",
  data: "data",
  primary_key: "primary_key",
  scope: "scope",
  table: "table"
};
var enumTransactionsConstraint = {
  transactions_pkey: "transactions_pkey"
};
var enumTransactionsSelectColumn = {
  block_num: "block_num",
  chain: "chain",
  cpu_usage_us: "cpu_usage_us",
  net_usage: "net_usage",
  net_usage_words: "net_usage_words",
  transaction_id: "transaction_id"
};
var enumTransactionsUpdateColumn = {
  block_num: "block_num",
  chain: "chain",
  cpu_usage_us: "cpu_usage_us",
  net_usage: "net_usage",
  net_usage_words: "net_usage_words",
  transaction_id: "transaction_id"
};
var enumWhitelistsConstraint = {
  whitelists_pkey: "whitelists_pkey"
};
var enumWhitelistsSelectColumn = {
  actions: "actions",
  app_id: "app_id",
  chain: "chain",
  contract: "contract",
  history_ready: "history_ready",
  start_block: "start_block",
  tables: "tables"
};
var enumWhitelistsUpdateColumn = {
  actions: "actions",
  app_id: "app_id",
  chain: "chain",
  contract: "contract",
  history_ready: "history_ready",
  start_block: "start_block",
  tables: "tables"
};

// generated/index.ts
var typeMap = linkTypeMap(types_default);
var createClient2 = (options) => createClient({
  url: "https://chaingraph-hasura-37160526315.us-central1.run.app/v1/graphql",
  ...options,
  queryRoot: typeMap.Query,
  mutationRoot: typeMap.Mutation,
  subscriptionRoot: typeMap.Subscription
});
var everything = {
  __scalar: true
};
var generateQueryOp = (fields) => generateGraphqlOperation("query", typeMap.Query, fields);
var generateMutationOp = (fields) => generateGraphqlOperation("mutation", typeMap.Mutation, fields);
var generateSubscriptionOp = (fields) => generateGraphqlOperation("subscription", typeMap.Subscription, fields);

// src/client/index.ts
function createChaingraphClient({
  config,
  options = {}
} = {}) {
  const envConfig2 = (0, import_config.loadEnvConfig)(process.env.NEXT_PUBLIC_APP_ENV || "prod");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-chaingraph-api-key": envConfig2.chaingraph.key
  };
  let subscribe;
  if ("webSocketImpl" in options) {
    const { subscribe: subscriptions } = (0, import_graphql_ws.createClient)({
      url: envConfig2.chaingraph.url.replace("https", "wss"),
      ...options,
      connectionParams: () => {
        return {
          headers
        };
      }
    });
    subscribe = subscriptions;
  }
  const client = createClient2({
    fetcher: async (operation) => {
      let fetchResponse;
      try {
        fetchResponse = fetch(envConfig2.chaingraph.url, {
          method: "POST",
          headers,
          body: JSON.stringify(operation),
          ...config
        }).then((response) => response.json());
      } catch (error) {
        console.error("Error in graphql fetcher", error);
      }
      return fetchResponse;
    }
  });
  return {
    subscribe,
    ...client
  };
}

// src/services/chaingraph.service.ts
var import_config2 = require("@repo/config");
var chaingraph = createChaingraphClient();
var envConfig = (0, import_config2.loadEnvConfig)(process.env.NEXT_PUBLIC_APP_ENV || "dev");
async function checkIfAccountIsRegistered(account) {
  const result = await chaingraph.query({
    table_rows: {
      __args: {
        where: {
          chain: {
            _eq: "eos"
          },
          contract: {
            _eq: envConfig.bitcash.accounts
          },
          table: {
            _eq: "accountsv2"
          },
          primary_key: {
            _eq: account
          }
        }
      },
      primary_key: true
    }
  });
  return Boolean(result.table_rows.length);
}
async function checkAccountReferral(account) {
  try {
    const { table_rows } = await chaingraph.query({
      table_rows: {
        __args: {
          where: {
            chain: {
              _eq: "eos"
            },
            contract: {
              _eq: envConfig.bitcash.accounts
            },
            table: {
              _eq: "accountsv2"
            },
            data: {
              _contains: {
                // ? Use 'andler.bk' or 'andlerdev.bk' for testing
                referrer: account
              }
            }
          }
        },
        data: true
      }
    });
    if (!table_rows.length) {
      throw new Error("Bitcash account not found");
    }
    return {
      referrals: table_rows.map((row) => row.data),
      error: null
    };
  } catch (error) {
    console.log("[ERROR] [checkAccountReferral]", error);
    return {
      error,
      referrals: null
    };
  }
}
var chaingraphService = {
  checkIfAccountIsRegistered,
  checkAccountReferral
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenqlError,
  chaingraphService,
  createChaingraphClient,
  createClient,
  enumActionsConstraint,
  enumActionsSelectColumn,
  enumActionsUpdateColumn,
  enumApiUsersConstraint,
  enumApiUsersSelectColumn,
  enumApiUsersUpdateColumn,
  enumBlocksConstraint,
  enumBlocksSelectColumn,
  enumBlocksUpdateColumn,
  enumChainsConstraint,
  enumChainsSelectColumn,
  enumChainsUpdateColumn,
  enumCursorOrdering,
  enumManifestsConstraint,
  enumManifestsSelectColumn,
  enumManifestsUpdateColumn,
  enumMappingsConstraint,
  enumMappingsSelectColumn,
  enumMappingsUpdateColumn,
  enumOrderBy,
  enumTableRowsConstraint,
  enumTableRowsSelectColumn,
  enumTableRowsUpdateColumn,
  enumTransactionsConstraint,
  enumTransactionsSelectColumn,
  enumTransactionsUpdateColumn,
  enumWhitelistsConstraint,
  enumWhitelistsSelectColumn,
  enumWhitelistsUpdateColumn,
  everything,
  generateMutationOp,
  generateQueryOp,
  generateSubscriptionOp,
  isactions,
  isactions_aggregate,
  isactions_aggregate_fields,
  isactions_avg_fields,
  isactions_max_fields,
  isactions_min_fields,
  isactions_mutation_response,
  isactions_stddev_fields,
  isactions_stddev_pop_fields,
  isactions_stddev_samp_fields,
  isactions_sum_fields,
  isactions_var_pop_fields,
  isactions_var_samp_fields,
  isactions_variance_fields,
  isapi_users,
  isapi_users_aggregate,
  isapi_users_aggregate_fields,
  isapi_users_avg_fields,
  isapi_users_max_fields,
  isapi_users_min_fields,
  isapi_users_mutation_response,
  isapi_users_stddev_fields,
  isapi_users_stddev_pop_fields,
  isapi_users_stddev_samp_fields,
  isapi_users_sum_fields,
  isapi_users_var_pop_fields,
  isapi_users_var_samp_fields,
  isapi_users_variance_fields,
  isblocks,
  isblocks_aggregate,
  isblocks_aggregate_fields,
  isblocks_avg_fields,
  isblocks_max_fields,
  isblocks_min_fields,
  isblocks_mutation_response,
  isblocks_stddev_fields,
  isblocks_stddev_pop_fields,
  isblocks_stddev_samp_fields,
  isblocks_sum_fields,
  isblocks_var_pop_fields,
  isblocks_var_samp_fields,
  isblocks_variance_fields,
  ischains,
  ischains_aggregate,
  ischains_aggregate_fields,
  ischains_max_fields,
  ischains_min_fields,
  ischains_mutation_response,
  ismanifests,
  ismanifests_aggregate,
  ismanifests_aggregate_fields,
  ismanifests_max_fields,
  ismanifests_min_fields,
  ismanifests_mutation_response,
  ismappings,
  ismappings_aggregate,
  ismappings_aggregate_fields,
  ismappings_max_fields,
  ismappings_min_fields,
  ismappings_mutation_response,
  ismutation_root,
  isquery_root,
  issubscription_root,
  istable_rows,
  istable_rows_aggregate,
  istable_rows_aggregate_fields,
  istable_rows_max_fields,
  istable_rows_min_fields,
  istable_rows_mutation_response,
  istransactions,
  istransactions_aggregate,
  istransactions_aggregate_fields,
  istransactions_avg_fields,
  istransactions_max_fields,
  istransactions_min_fields,
  istransactions_mutation_response,
  istransactions_stddev_fields,
  istransactions_stddev_pop_fields,
  istransactions_stddev_samp_fields,
  istransactions_sum_fields,
  istransactions_var_pop_fields,
  istransactions_var_samp_fields,
  istransactions_variance_fields,
  iswhitelists,
  iswhitelists_aggregate,
  iswhitelists_aggregate_fields,
  iswhitelists_avg_fields,
  iswhitelists_max_fields,
  iswhitelists_min_fields,
  iswhitelists_mutation_response,
  iswhitelists_stddev_fields,
  iswhitelists_stddev_pop_fields,
  iswhitelists_stddev_samp_fields,
  iswhitelists_sum_fields,
  iswhitelists_var_pop_fields,
  iswhitelists_var_samp_fields,
  iswhitelists_variance_fields
});
