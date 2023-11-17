const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  passWithNoTests: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\@graphql/(.*)': '<rootDir>/lib/graphql/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
