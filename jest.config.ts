import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-syntax-highlighter|react-markdown|unified|remark-parse|remark-rehype|rehype-parse|rehype-stringify|rehype-raw|remark-gfm)/)",
  ],
};

export default createJestConfig(config);
