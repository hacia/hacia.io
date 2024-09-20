module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'airbnb', // Airbnb's ESLint rules (optional)
    'airbnb/hooks', // Airbnb's React Hooks rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'plugin:react/recommended', // React-specific linting rules
    'plugin:prettier/recommended', // Enable Prettier and display Prettier errors as ESLint errors
  ],
  plugins: [
    'react', // React specific linting rules
    '@typescript-eslint', // TypeScript specific linting rules
    'prettier', // Prettier plugin
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  env: {
    browser: true, // Browser global variables like `window` and `document`
    es6: true, // Enables ES6 features
    node: true, // Node.js global variables and Node.js scoping
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // Allow JSX in TSX files
    'import/extensions': 'off', // Disable import extensions requirement for TypeScript
    'prettier/prettier': 'error', // Make Prettier issues show as ESLint errors
    'no-console': 'warn', // Warn about `console.log` but don’t error
    'no-unused-vars': 'off', // Disable ESLint's built-in `no-unused-vars` rule
    '@typescript-eslint/no-unused-vars': ['warn'], // Use TypeScript-specific unused vars rule
    'react/prop-types': 'off', // Disable prop-types since we're using TypeScript for types
  },
};
