const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    testMatch: ["**/src/**/*.spec.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    globals: {
      "ts-jest": {
        diagnostics: true,
      },
    },
  };
};
