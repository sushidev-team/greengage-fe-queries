import {
  createCustomClient,
  createUseQueryHook,
  createUsePaginatedQueryHook,
  createUseMutationHook,
  createSsrQuery,
  createSsrCache,
} from '../src/urql/client';

const url = process.env.NEXT_PUBLIC_CMS_API_URL ?? '';
const apiToken = process.env.NEXT_PUBLIC_CMS_API_TOKEN ?? '';

let ssrCache = createSsrCache();
let client = createCustomClient({ url, apiToken, ssrCache });
let ssrQuery = createSsrQuery(client);
const useQuery = createUseQueryHook();
const usePaginatedQuery = createUsePaginatedQueryHook();
const useMutation = createUseMutationHook();

function clearSsrCache() {
  ssrCache = createSsrCache();
  client = createCustomClient({ url, apiToken, ssrCache });
  ssrQuery = createSsrQuery(client);
}

export { ssrCache, clearSsrCache, client, ssrQuery, useQuery, usePaginatedQuery, useMutation };
