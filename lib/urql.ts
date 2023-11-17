import {
  createCustomClient,
  createUseQueryHook,
  createUsePaginatedQueryHook,
  createUseMutationHook,
  createSsrQuery,
  createSsrCache,
} from '../src/urql/client';
import { createGraphCache } from '../src/urql/graphCache';
import schema from '../src/graphql/schema/introspection.json';

const url = process.env.NEXT_PUBLIC_CMS_API_URL ?? '';
const apiToken = process.env.NEXT_PUBLIC_CMS_API_TOKEN ?? '';

const graphCache = createGraphCache({ schema });
let ssrCache = createSsrCache();

let client = createCustomClient({ url, apiToken, graphCache, ssrCache });
let ssrQuery = createSsrQuery(client);
const useQuery = createUseQueryHook();
const usePaginatedQuery = createUsePaginatedQueryHook();
const useMutation = createUseMutationHook();

function clearSsrCache() {
  ssrCache = createSsrCache();
  client = createCustomClient({ url, apiToken, graphCache, ssrCache });
  ssrQuery = createSsrQuery(client);
}

export { ssrCache, clearSsrCache, client, ssrQuery, useQuery, usePaginatedQuery, useMutation };
