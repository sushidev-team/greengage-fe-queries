function graphqlrc({ url, apiToken, gqlPath, generateSchema = true }) {
  return {
    schema: { [url]: { headers: { authorization: apiToken } } },
    documents: `${gqlPath}/**/*.graphql`,
    extensions: {
      codegen: {
        ignoreNoDocuments: true,
        generates: {
          [`${gqlPath}/generated.ts`]: {
            plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
          },
          ...(generateSchema && {
            [`${gqlPath}/schema/introspection.json`]: {
              plugins: ['introspection'],
              config: {
                minify: true,
              },
            },
          }),
        },
      },
    },
  };
}

module.exports = { graphqlrc };
