module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next/core-web-vitals'],
  plugins: [],
  settings: {},
  ignorePatterns: ['public/*', 'dist/*', 'src/graphql/**/generated.ts'],
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    // config files
    {
      files: ['.eslintrc.js', '.prettierrc.js', '**/*.config.js'],
      env: {
        node: true,
      },
    },
    // tests
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
};
