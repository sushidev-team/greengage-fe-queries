/**
 * Generates a configuration object for GraphQL.
 *
 * @param {Object} options - The options for the GraphQL configuration.
 * @param {string} options.url - The URL of the GraphQL server.
 * @param {string} options.apiToken - The API token for authorization.
 * @param {string} options.gqlPath - The path where GraphQL documents are located.
 * @param {string} [options.outputPath] - The path where the generated files will be placed. If not provided, gqlPath will be used.
 */
function graphqlrc({ url, apiToken, gqlPath, outputPath }) {
  return {
    schema: { [url]: { headers: { authorization: `Bearer ${apiToken}` } } },
    documents: [`${gqlPath}/**/*.graphql`, './node_modules/@sushidev-team/greengage-fe-queries/**/*.graphql'],
    extensions: {
      codegen: {
        ignoreNoDocuments: true,
        generates: {
          [`${outputPath || gqlPath}/generated.ts`]: {
            plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
          },
        },
      },
    },
  };
}

module.exports = { graphqlrc };
