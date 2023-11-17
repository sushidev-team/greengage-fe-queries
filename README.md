# Greengage FE Queries

This repository is a collection of shared GraphQL queries that can be used across front-end platforms. It is built using [urql](https://formidable.com/open-source/urql/) for GraphQL queries, [TypeScript](https://www.typescriptlang.org/) for typing, and [Next.js](https://nextjs.org/) for server-side rendering, providing a useful playground for testing purposes.

## Getting Started

First, create a `.env.local` file and _paste_ all necessary env variables in there. Check the `.env.example` file as a starting point and ask your team for the necessary content.

Add the GraphQL extensions from the GraphQL Foundation to your VSCode. This will give you syntax highlighting and autocompletion for GraphQL queries.

After that create a `.npmrc` file and paste the necessary content in there (again ask a team member for the content). This file is necessary to install private packages from the registry.

Then, install the dependencies by running `npm install`.

After that is done you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. This is meant for testing your queries before bundling and publishing.

When writing queries pls make sure to either have the dev server running or run the `gql:watch` script. Only when either of the two is running the automatic code generation will work.

For the production build use `gql:generate`.

## Usage in other projects

To use this package in other projects follow the steps below to make the project work in your Next.js application. You can see an example also inside the pages folder inside `_app.tsx`, `index.tsx`, `lib/urql`. If you don't need to write your own queries then just skip the `Codegen setup` and move on to `Urql Boilerplate and usage`.

### Codegen setup

- Install the necessary dev dependencies to be able to write your own queries and generate types:

```bash
npm install -D @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typed-document-node @graphql-codegen/typescript @graphql-codegen/typescript-operations @next/env
```

- Create a `.graphqlrc.js` file inside the root of your project and paste the following content inside. Replace the url and apiToken with the correct values. Also adapt the gqlPath to your needs. This is the path where the generated types will be saved and where you have to place your graphql files. You can also add a `generateSchema` key with false to the graphqlrc function if you don't want to generate the introspection schema.

```js
const { loadEnvConfig } = require('@next/env');

// Specific to Next.js - used for loading env variables
loadEnvConfig(process.cwd());

// loadEnvConfig needs to be called before this import
const { graphqlrc } = require('@sushidev-team/greengage-fe-queries');

module.exports = graphqlrc({
  url: process.env.NEXT_PUBLIC_CMS_API_URL,
  apiToken: process.env.CMS_API_TOKEN,
  gqlPath: '<Path_to_your_graphql_folder>',
});
```

- Add scripts to your package.json to trigger the code generation. You might also want to extend the dev and build script of your project. Use `gql:generate` for the build script and use `gql:watch` for the dev script with any cli tool made for running multiple scripts simultaneously (e.g. `concurrently`).

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

- Paste the following content into `lib/urql.ts` or any other file you want to use for your urql setup. Replace the url and apiToken with the correct values. Also replace the schema import with the correct path to your schema file.

```ts
import {
  createCustomClient,
  createUseQueryHook,
  createUsePaginatedQueryHook,
  createUseMutationHook,
  createSsrQuery,
  createSsrCache,
  createGraphCache,
} from '@sushidev-team/greengage-fe-queries';
import schema from '<Path_to_your_schema_file>';

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
      <Component {...pageProps} />
    </UrqlProvider>
  );
}
```

- Use the useQuery/useMutation hook and ssrQuery function, generated in your urql file, inside your components and pages. For a detailed explanation check out the `Learn More` section down below. This package uses `urql` under the hood so you can also check out their docs for more information. ALWAYS use the hooks and functions provided by this package or the ones generated inside your urql file. DO NOT use the hooks and functions provided by `urql` directly.

## Learn More

### How to use urql/graphql

1. Create a new `.graphql` file inside your graphql/queries folder.
2. Write your query as you would inside the graphql playground.
3. Either run `npm run dev`, `npm run gql:watch` or `npm run gql:generate` to automatically generate the typed documents and types inside of the `generated.ts` file.
4. !!! Do not modify any `generated.ts` file. Your changes will be lost as this file gets generated by graphql codegen. !!!
5. Import your typed documents and types from `generated.ts`.
6. Use your typed documents with the `useQuery/useMutation` hook or use `ssrQuery` for server side rendering. Below you can find usage examples.

### Things to watch out for when writing queries

1. If you are using Fragments, just place them anywhere inside the queries directory.
2. The `GraphCache` can be easily extended. Check the createGraphCache function to learn more. The most important things are the keys and resolvers. The keys are necessary for eg. fields that don't have a typename. The resolvers are mainly used for pagination in this implementation but can also be used for other things (check the urql docs to learn more about [keys](https://formidable.com/open-source/urql/docs/graphcache/normalized-caching/#custom-keys-and-non-keyable-entities) and [resolvers](https://formidable.com/open-source/urql/docs/graphcache/local-resolvers/)).
3. Always include id and \_\_typename in your queries. If the field doesn't have an id (like paginated queries) then go to your `urql.ts` file and extend the customKeys object inside the `createGraphCache` by using the typename as key and returning `() => null` as value.
4. If you are querying a field that is a paginated field always include `first` and `page` as arguments (if your offset and limitArgument is called differently just remember to pass the correct name to the pagination function and include the arguments in your query variables). You can check which fields are paginated by going to the graphCache and checking the `resolvers` object inside the `createGraphCache`.

### Paginating a query

When you want to paginate a query simply use the `usePaginatedQuery` hook instead of `useQuery`. Also check that the API actually allows your query to be paginated. The `usePaginatedQuery` hook takes the same arguments as `useQuery`. When providing the variables for the paginated query also include the page variable with the value from which the pagination should start (in most cases that will be 1). Nothing else needs to be done - the hook takes care of the rest. The only difference is that the `usePaginatedQuery` hook returns an object with the following additional properties (all other properties are still the same as the ones returned by `useQuery` - notice that data is now an array):

```ts
{
  data: Data[];
  currentPage: number | null; // currentPage is null until the first query returned data
  hasMorePages: boolean;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  fetchSpecificPage: (page: number) => void;
}
```

Also a quick note on the returned data. The data is always an array which simply contains all the responses from the API for all the fetched pages. So if you want to use the data you should flatten the array. You can use lodash's flatten function for that or write your own logic. Check the example below for more information.

By default the offsetArgument is called `page` if however that is not true for your query you can pass the name of the offsetArgument as the first argument to the `createUsePaginatedQueryHook` function. The second argument is for the `hasMorePagesArgument`. The hook uses this to search the result of the last query executed to search for the flag if more pages are present. If your query returns a different flag for this you can pass the name of the flag as the second argument to the `createUsePaginatedQueryHook` function.

#### Example

```tsx
import { flatten } from 'lodash';

const [{ fetching, stale, data, hasMorePages, fetchNextPage }] = usePaginatedQuery({
  query: GetEntitiesDocument,
  variables,
});
// For ease of use I recommend flattening the data array like so (you could also use your own logic to flatten the array e.g. Array.reduce):
const entities = flatten(entitiesData?.map((data) => data?.entities?.data));
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
  clearSsrCache();

  await ssrQuery({
    query: GetMoviePersonsDocument,
    variables: {},
  });

  /**
   * optionally you can also use the data returned from the query:
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
