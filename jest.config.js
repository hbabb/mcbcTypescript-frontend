export default {
  preset: 'ts-jest', // Use ts-jest for handling TypeScript
  testEnvironment: 'jsdom', // Use jsdom as the test environment for React
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.app.json', // Path to your TypeScript configuration file
    },
  },
  roots: ['<rootDir>/src/tests'], // Specify the root directories for Jest to look for tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using babel-jest
    '^.+\\.svg$': 'jest-svg-transformer', // Transform SVG files using jest-transform-svg for
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Recognize these file extensions
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'], // Path to setup file for Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Optional: Map @ to your src directory for module resolution
  },
}
