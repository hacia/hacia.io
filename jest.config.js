module.exports = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'jsdom', // Simulate a browser environment for React components
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // File extensions Jest will look for
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Jest setup file for custom configuration
  collectCoverage: true, // Enable code coverage collection
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Specify which files to collect coverage from
    '!src/**/*.d.ts', // Exclude TypeScript declaration files
  ],
  coverageDirectory: 'coverage', // Output directory for code coverage results
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // Output formats for coverage reports
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore tests in these directories
};
