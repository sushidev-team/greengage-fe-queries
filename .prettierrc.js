module.exports = {
  plugins: [],
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  overrides: [
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
      },
    },
  ],
};
