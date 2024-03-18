# Greengage FE Queries

This repository is a collection of shared GraphQL queries that can be used across front-end platforms. It is built using [urql](https://formidable.com/open-source/urql/) for GraphQL queries, [TypeScript](https://www.typescriptlang.org/) for typing, and [Next.js](https://nextjs.org/) for server-side rendering, providing a useful playground for testing purposes.

## Getting Started

First, create a `.env.local` file and paste all necessary env variables in there. Check the `.env.example` file as a starting point.

Add the GraphQL extensions from the GraphQL Foundation to VSCode. This will give you syntax highlighting and autocompletion for GraphQL queries.

Then, install the dependencies by running `npm install`.

After that is done you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. This is meant for testing your queries before bundling and publishing.

When writing queries pls make sure to either have the dev server running or run the `gql:watch` script. Only when either of the two is running the automatic code generation will work.

For the production build use `gql:generate`.

## Usage in other projects

To use this package in other projects follow the steps below to make the project work in your Next.js application. You can see an example also inside the pages folder inside `_app.tsx`, `index.tsx`, `lib/urql`.

### Codegen setup

- Install the necessary dev dependencies to be able to write queries and generate types:

```bash
npm install -D @graphql-codegen/cli @graphql-codegen/typed-document-node @graphql-codegen/typescript @graphql-codegen/typescript-operations @next/env @parcel/watcher
```

- Create a `.graphqlrc.js` file inside the root of your project and paste the following content inside. Replace the url and apiToken with the correct values. Also adapt the gqlPath to your needs. This is the path where the generated types will be saved and where you have to place your graphql files.

```js
const { loadEnvConfig } = require('@next/env');

// Specific to Next.js - used for loading env variables
loadEnvConfig(process.cwd());

// loadEnvConfig needs to be called before this import
const { graphqlrc } = require('@sushidev-team/greengage-fe-queries');

module.exports = graphqlrc({
  url: process.env.NEXT_PUBLIC_CMS_API_URL,
  apiToken: process.env.NEXT_PUBLIC_CMS_API_TOKEN,
  gqlPath: '<Path_to_your_graphql_folder>',
});
```

- Add scripts to your package.json to trigger code generation. You might also want to extend the dev and build script of your project. Use `gql:generate` for the build script and use `gql:watch` for the dev script with any cli tool made for running multiple scripts simultaneously (e.g. `concurrently`).

```json
{
  "scripts": {
    "gql:generate": "graphql-codegen --config .graphqlrc.js",
    "gql:watch": "npm run gql:generate -- --watch"
  }
}
```

Example of your build and dev scripts:

```json
{
  "scripts": {
    "build": "npm run gql:generate && next build",
    "dev": "concurrently --names \"next,gql\" --prefix-colors \"bgBlue.bold,bgMagenta.bold\" \"next dev\" \"npm run gql:watch\""
  }
}
```

### Urql Boilerplate

- Make sure you have the `NEXT_PUBLIC_CMS_API_URL` env set.
- Paste the following content into `lib/urql.ts` or any other file you want to use for your urql setup.

```ts
import {
  createUseQueryHook,
  createSsrQuery,
  createSsrCache,
  createUseMutationHook,
  createUsePaginatedQueryHook,
  createCustomClient,
  createSsrMutation,
} from '@sushidev-team/greengage-fe-queries';

const url = process.env.NEXT_PUBLIC_CMS_API_URL ?? '';
const apiToken = process.env.NEXT_PUBLIC_CMS_API_TOKEN ?? '';

let ssrCache = createSsrCache();
let client = createCustomClient({ url, apiToken, ssrCache, includeAuthExchange });
let ssrQuery = createSsrQuery(client);
let ssrMutation = createSsrMutation(client);

const useQuery = createUseQueryHook();
const useMutation = createUseMutationHook();
const usePaginatedQuery = createUsePaginatedQueryHook();

function clearCache() {
  ssrCache = createSsrCache();
  client = createCustomClient({ url, apiToken, ssrCache, includeAuthExchange });
  ssrQuery = createSsrQuery(client);
  ssrMutation = createSsrMutation(client);
}

export { client, ssrCache, clearCache, ssrQuery, ssrMutation, useQuery, useMutation, usePaginatedQuery };
```

- Add the necessary boiler plate code inside `_app.tsx`:

```tsx
import { AppProps } from 'next/app';
import React from 'react';
import { UrqlProvider, restoreSsrCache } from '@sushidev-team/greengage-fe-queries';
import { client, ssrCache } from 'lib/urql';

export default function MyApp({ pageProps }: AppProps) {
  restoreSsrCache({ pageProps, ssrCache });

  return (
    <UrqlProvider value={client}>
      /** children **/
    </UrqlProvider>
  );
}
```

- Use the useQuery/usePaginatedQuery/useMutation hook and ssrQuery/ssrMutation function, generated in your urql file, inside your components and pages. For a detailed explanation check out the `Learn More` section down below. This package uses `urql` under the hood so you can also check out their docs for more information. ALWAYS use the hooks and functions provided by this package or the ones generated inside your urql file. DO NOT use the hooks and functions provided by `urql` directly.

## Learn More

### How to use urql/graphql

1. Create a new `.graphql` file inside your graphql/queries folder.
2. Write your query as you would inside the graphql playground.
3. Either run `npm run dev`, `npm run gql:watch` or `npm run gql:generate` to automatically generate the typed documents and types inside of the `generated.ts` file.
4. !!! Do not modify any data inside `generated.ts`. Your changes will be lost as this file gets generated by graphql codegen. !!!
5. Import your typed documents and types from `generated.ts`.
6. Use your typed documents to make requests. Below you can find usage examples.

### Things to watch out for when writing queries

1. If you are using Fragments, just place them anywhere inside the queries directory. Graphql code generator will automatically pick them up and generate the necessary types.
2. The document cache has a quirk regarding cache invalidation. Make sure you are familiar with it. Check the [urql docs](https://formidable.com/open-source/urql/docs/basics/document-caching/#document-cache-gotchas) to learn more.
3. If you are querying a field that is a paginated field always include `first` and `page` as arguments.

### Clearing the cache

A relative new addition to this package is the ability to clear urql's cache both server and client side.
On the server you still need to clear the cache once per route/page before making requests. Otherwise the application will just grow in memory usage.
Now it's also possible to clear the cache client side. The reason why you would want to do this is eg. when auth state changes. If you don't clear the cache the application will still use the old auth state and not the new one which can be a security risk and also lead to unexpected behavior.

### Paginating a query

When you want to paginate a query simply use the `usePaginatedQuery` hook instead of `useQuery`. Also check that the API actually allows your query to be paginated. The `usePaginatedQuery` hook takes the same arguments as `useQuery`. When providing the variables for the paginated query also include the page variable with the value from which the pagination should start (in most cases that will be 1). Nothing else needs to be done - the hook takes care of the rest. The only difference is that the `usePaginatedQuery` hook returns an object with the following additional properties (all other properties are still the same as the ones returned by `useQuery` - notice that data is now an array):

```ts
{
  data: Data[];
  currentPage: number | null; // currentPage is null until the first query returned data
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  fetchSpecificPage: (page: number) => void;
}
```

Also a quick note on the returned data. The data is always an array which simply contains all the responses from the API for all the fetched pages. So if you want to use the data you should flatten the array. You can use flatMap Array method for that or write your own logic. Check the example below for more information.

#### Example

```tsx
const [{ fetching, stale, data, fetchNextPage }] = usePaginatedQuery({
  query: GetEntitiesDocument,
  variables,
});
const entities = entitiesData?.flatMap((data) => data?.entities?.data);
```

### `useQuery` example usage

```tsx
const [{ data, fetching, error }] = useQuery({
  query: GetMoviePersonsDocument,
  variables: {},
  pause: true / false, // optional
});
```

### `useMutation` example usage

```tsx
const [result, executeMutation] = useMutation(SubscribeToNewsletterDocument);

// Variant 1
// Use an async function to trigger the mutation
const subscribeToNewsletter = async () => {
  // The returned object is pretty much the same as the result object above returned from the useMutation hook
  // The operationContext is optional and contains settings for the mutation (check the urql docs to learn more)
  const { data, error } = await executeMutation(variables, operationContext);
  if (data) {
    // do something with the data
  }
  if (error) {
    // do something with the error
  }
};

// Variant 2
// Use a regular function with the .then syntax to trigger the mutation
const subscribeToNewsletter = () => {
  executeMutation(variables, operationContext).then(({ data, error }) => {
    if (data) {
      // do something with the data
    }
    if (error) {
      // do something with the error
    }
  });
};

// Variant 3
// Trigger the mutation just like a regular function call and use the result object returned from the useMutation hook to further process the result of the mutation
const subscribeToNewsletter = () => executeMutation(variables, operationContext);

if (result.data) {
  // do something with the data
}

if (result.error) {
  // do something with the error
}
```

### `ssrQuery` example usage

```tsx
export async function getStaticProps() {
  // This function call has to be the first thing inside getStaticProps or getServerSideProps! Don't forget to include it!
  clearCache();

  await ssrQuery({
    query: GetMoviePersonsDocument,
    variables: {},
  });

  /**
   * Optionally you can also use the data returned from the query. But then double check if you really need the urqlState prop below. Otherwise you will just include the same data twice.
   * const { data } = await ssrQuery({...})
   */

  return {
    props: {
      // Don't forget this!
      urqlState: ssrCache.extractData(),
    },
  };
}
```

### `ssrMutation` example usage

```tsx
const { data } = await ssrMutation({
  query: CustomerLoginDocument,
  variables: { username: 'test', password: 'test' },
});
```
