module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'airbnb', // Airbnb's ESLint rules
    'airbnb/hooks', // Airbnb's React Hooks rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'plugin:react/recommended', // React-specific linting rules
    'plugin:prettier/recommended', // Enable Prettier and display Prettier errors as ESLint errors
    'plugin:jest/recommended', // Jest-specific linting rules for tests
  ],
  plugins: [
    'react', // React specific linting rules
    '@typescript-eslint', // TypeScript specific linting rules
    'prettier', // Prettier plugin
    'jest', // Jest plugin for linting test files
    'import', // Import order linting
    'jsx-a11y', // Accessibility plugin (optional)
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
    'jest/globals': true, // Jest global variables for tests
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Extensions ESLint should check for imports
      },
    },
  },
  rules: {
    // React & JSX Rules
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // Allow JSX in TSX files
    'react/prop-types': 'off', // Disable prop-types since we're using TypeScript for types

    // TypeScript Rules
    'import/extensions': 'off', // Disable import extensions requirement for TypeScript
    '@typescript-eslint/no-unused-vars': ['warn'], // Warn on unused variables in TypeScript
    'no-unused-vars': 'off', // Turn off ESLint's base rule in favor of TypeScript's
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return types for all functions

    // Prettier Rules
    'prettier/prettier': 'error', // Show Prettier issues as errors

    // Console warnings
    'no-console': 'warn', // Warn about `console.log` but don’t error

    // Allow require in certain files
    'import/no-commonjs': 'off', // Allow require() globally (you can also scope it)

    // Import Rules
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],

    // Jest Rules
    'jest/no-disabled-tests': 'warn', // Warn about disabled tests (i.e., it.skip)
    'jest/no-focused-tests': 'error', // Disallow focused tests (i.e., it.only)
    'jest/no-identical-title': 'error', // Disallow identical test titles

    // Accessibility (Optional, only if using jsx-a11y)
    'jsx-a11y/anchor-is-valid': 'warn', // Warn if anchor tags are invalid
  },
  overrides: [
    {
      // Override to allow require() in Webpack config and similar files
      files: ['webpack.config.js', '**/*.config.js'],
      rules: {
        'import/no-commonjs': 'off', // Allow require() in config files
      },
    },
  ],
};
