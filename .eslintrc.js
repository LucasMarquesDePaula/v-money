/* eslint-env node */
const config = JSON.parse(JSON.stringify(require("./src/config/eslint/eslint.dev")));

config.env.browser = true;

module.exports = config;
