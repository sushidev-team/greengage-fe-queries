const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const { graphqlrc } = require('./src/graphql/graphqlrc');

module.exports = graphqlrc({
  url: process.env.NEXT_PUBLIC_CMS_API_URL,
  apiToken: process.env.CMS_API_TOKEN,
  gqlPath: 'src/graphql',
});
