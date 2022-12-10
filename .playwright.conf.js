const path = require("path");

module.exports = {
  browserContext: "chromium",
  concurrency: 1,
  fileExtensions: [
    "js",
    "mjs",
    "cjs",
    "ts",
    "tsx",
  ],
  launch: {
    headless: false,
    slowMo: 25,
  },
  tests: `${path.join(process.cwd(), "tests")}/**/*.spec.js`,
};
``
