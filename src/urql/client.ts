import { devtoolsExchange } from '@urql/devtools';
import { isEqual } from 'lodash';
import type { AppProps } from 'next/app';
import { useRef, useState } from 'react';
import type {
  AnyVariables,
  DocumentInput,
  Exchange,
  OperationContext,
  UseQueryArgs,
  UseQueryResponse,
  Client,
  SSRExchange,
  UseMutationResponse,
  UseQueryExecute,
  UseQueryState,
} from 'urql';
import {
  Provider as UrqlProvider,
  createClient,
  fetchExchange,
  ssrExchange,
  useQuery as useUrqlQuery,
  useMutation as useUrqlMutation,
} from 'urql';

function createSsrCache() {
  return ssrExchange({ isClient: typeof window !== 'undefined' });
}

function restoreSsrCache({ pageProps, ssrCache }: { pageProps: AppProps['pageProps']; ssrCache: SSRExchange }) {
  pageProps.urqlState && ssrCache.restoreData(pageProps.urqlState);
}

function createCustomClient({
  url,
  apiToken,
  graphCache,
  ssrCache,
}: {
  url: string;
  apiToken: string;
  graphCache: Exchange;
  ssrCache: SSRExchange;
}) {
  return createClient({
    url,
    exchanges: [devtoolsExchange, graphCache, ssrCache, fetchExchange],
    fetchOptions: () => ({
      headers: { authorization: apiToken },
    }),
  });
}

function createUseQueryHook() {
  return function useQuery<Data, Variables extends AnyVariables>(
    options: {
      variables: Variables;
    } & UseQueryArgs<Variables, Data>,
  ): UseQueryResponse<Data, Variables> {
    return useUrqlQuery<Data, Variables>({ ...options });
  };
}

type PaginatedQueryState<Data, Variables extends AnyVariables> = Omit<UseQueryState<Data, Variables>, 'data'> & {
  data: UseQueryState<Data, Variables>['data'][];
  currentPage: number | null;
  hasMorePages: boolean;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  fetchSpecificPage: (page: number) => void;
};

function createUsePaginatedQueryHook(offsetArgument = 'page', hasMorePagesArgument = 'hasMorePages') {
  const findHasMorePagesValue = (obj: object): boolean => {
    let hasMorePagesValue = false;

    const iterate = (obj: object) => {
      for (const key in obj) {
        if (key === 'data') break;
        if (hasMorePagesValue) break;

        const value = obj[key as keyof typeof obj];

        if (key === hasMorePagesArgument) {
          hasMorePagesValue = value as boolean;
          break;
        }

        if (typeof value === 'object') iterate(value);
      }
    };
    iterate(obj);

    return hasMorePagesValue;
  };

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
      hasMorePages: false,
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
        hasMorePages: findHasMorePagesValue(response?.data as object),
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
      hasMorePages: results.current.hasMorePages,
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

function createSsrQuery(client: Client) {
  return async function ssrQuery<Data, Variables extends AnyVariables>(options: {
    query: DocumentInput<Data, Variables>;
    variables: Variables;
    context?: Partial<OperationContext>;
  }) {
    const context: Partial<OperationContext> = {
      ...(options.context ?? {}),
      requestPolicy: options.context?.requestPolicy ? options.context?.requestPolicy : 'network-only',
    };

    return await client.query<Data, Variables>(options.query, options.variables, context).toPromise();
  };
}

export {
  UrqlProvider,
  createSsrCache,
  restoreSsrCache,
  createCustomClient,
  createUseQueryHook,
  createUsePaginatedQueryHook,
  createUseMutationHook,
  createSsrQuery,
};
