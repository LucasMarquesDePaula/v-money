/* eslint-env node */
const rules = require("./rules");

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "eslint:all",
  ],
  parser: "babel-eslint",
  root: true,
  rules,
};
