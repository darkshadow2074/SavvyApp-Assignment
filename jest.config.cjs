module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/src/**/*.test.(js|jsx)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
};

module.exports = {
  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"],
};
