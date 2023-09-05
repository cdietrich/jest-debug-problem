
const baseDir = "<rootDir>/src"
const baseTestDir = "<rootDir>/test/"
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
      `${baseDir}/**/*.ts`
  ],
  testMatch: [
      `${baseTestDir}/**/*.test.ts`
  ]
}