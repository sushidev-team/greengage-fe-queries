import type { AppProps } from 'next/app';
import isEqual from 'lodash/isEqual';
import { useRef, useState } from 'react';
import { devtoolsExchange } from '@urql/devtools';
import type {
  AnyVariables,
  DocumentInput,
  OperationContext,
  UseQueryArgs,
  UseQueryResponse,
  Client,
  SSRExchange,
  UseMutationResponse,
  UseQueryExecute,
  UseQueryState,
  OperationResult,
  Exchange,
} from 'urql';
import {
  Provider as UrqlProvider,
  createClient,
  cacheExchange,
  fetchExchange,
  ssrExchange,
  useQuery as useUrqlQuery,
  useMutation as useUrqlMutation,
} from 'urql';

/**
 * Cache
 */

function createSsrCache() {
  return ssrExchange({ isClient: typeof window !== 'undefined' });
}

function restoreSsrCache({ pageProps, ssrCache }: { pageProps: AppProps['pageProps']; ssrCache: SSRExchange }) {
  pageProps.urqlState && ssrCache.restoreData(pageProps.urqlState);
}

/**
 * Client
 */

function createCustomClient({
  url,
  apiToken,
  ssrCache,
  exchanges,
  includeCredentials,
}: {
  url: string;
  ssrCache: SSRExchange;
  apiToken?: string;
  exchanges?: Exchange[];
  includeCredentials?: boolean;
}) {
  return createClient({
    url,
    exchanges: [devtoolsExchange, cacheExchange, ssrCache, ...(exchanges ? exchanges : []), fetchExchange].filter(
      // Filter out undefined or null values
      <T>(val: T): val is NonNullable<T> => val !== null && val !== undefined,
    ),
    fetchOptions: () => ({
      headers: apiToken ? { authorization: `Bearer ${apiToken}` } : undefined,
      credentials: includeCredentials ? 'include' : undefined,
    }),
  });
}

/**
 * Hooks
 */

function createUseQueryHook() {
  return function useQuery<Data, Variables extends AnyVariables>(
    options: UseQueryArgs<Variables, Data>,
  ): UseQueryResponse<Data, Variables> {
    return useUrqlQuery<Data, Variables>(options);
  };
}

type PaginatedQueryState<Data, Variables extends AnyVariables> = Omit<UseQueryState<Data, Variables>, 'data'> & {
  data: UseQueryState<Data, Variables>['data'][];
  currentPage: number | null;
  /**
   * Unfortunately we do not have a `hasMorePages` property, so we have to rely on the user to check if there are more pages.
   * You can check the last result inside the data array to see if it's empty or not.
   * If it's empty, there are no more pages.
   */
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  fetchSpecificPage: (page: number) => void;
};

function createUsePaginatedQueryHook(offsetArgument = 'page') {
  return function usePaginatedQuery<Data, Variables extends AnyVariables>(
    options: {
      variables: Variables;
    } & UseQueryArgs<Variables, Data>,
  ): [PaginatedQueryState<Data, Variables>, UseQueryExecute] {
    const [page, setPage] = useState(options?.variables?.[offsetArgument] ?? 1);
    const [response, fetchQuery] = useUrqlQuery<Data, Variables>({
      ...options,
      variables: { ...options.variables, [offsetArgument]: page },
    });

    const fetchNextPage = () => setPage(page + 1);
    const fetchPreviousPage = () => setPage(page - 1);
    const fetchSpecificPage = (page: number) => setPage(page);

    const initialResponse = {
      data: [],
      stale: false,
      fetching: true,
      currentPage: null,
      fetchNextPage,
      fetchPreviousPage,
      fetchSpecificPage,
    };

    const results = useRef<PaginatedQueryState<Data, Variables>>(initialResponse);
    const variables = useRef<Variables>(options.variables);

    if (!isEqual(variables.current, options.variables)) {
      variables.current = options.variables;
      results.current = initialResponse;
    }

    if (response?.data && !response?.fetching && !response?.stale && page !== results.current?.currentPage) {
      results.current = {
        ...response,
        currentPage: page,
        data: [...results.current.data, response?.data],
        fetchNextPage,
        fetchPreviousPage,
        fetchSpecificPage,
      };

      return [results.current, fetchQuery];
    }

    results.current = {
      ...response,
      data: results.current.data,
      currentPage: results.current.currentPage,
      fetchNextPage,
      fetchPreviousPage,
      fetchSpecificPage,
    };

    return [results.current, fetchQuery];
  };
}

function createUseMutationHook() {
  return function useMutation<Data, Variables extends AnyVariables>(
    query: DocumentInput<Data, Variables>,
  ): UseMutationResponse<Data, Variables> {
    return useUrqlMutation<Data, Variables>(query);
  };
}

/**
 * SSR Functions
 */

function createSsrQuery(client: Client) {
  return async function ssrQuery<Data, Variables extends AnyVariables>(options: {
    query: DocumentInput<Data, Variables>;
    variables: Variables;
    context?: Partial<OperationContext>;
  }): Promise<OperationResult<Data, Variables>> {
    const context: Partial<OperationContext> = {
      requestPolicy: 'network-only',
      ...(options.context ?? {}),
    };

    return await client.query<Data, Variables>(options.query, options.variables, context).toPromise();
  };
}

function createSsrMutation(client: Client) {
  return async function ssrMutation<Data, Variables extends AnyVariables>(options: {
    query: DocumentInput<Data, Variables>;
    variables: Variables;
    context?: Partial<OperationContext>;
  }): Promise<OperationResult<Data, Variables>> {
    const context: Partial<OperationContext> = {
      requestPolicy: 'network-only',
      ...(options.context ?? {}),
    };

    return await client.mutation<Data, Variables>(options.query, options.variables, context).toPromise();
  };
}

export {
  UrqlProvider,
  createSsrCache,
  restoreSsrCache,
  createCustomClient,
  createUseQueryHook,
  createUseMutationHook,
  createUsePaginatedQueryHook,
  createSsrQuery,
  createSsrMutation,
};
