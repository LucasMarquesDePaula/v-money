/* eslint-env node */
/* eslint-disable no-magic-numbers */
module.exports = {
  "array-bracket-newline": ["error", "consistent"],
  "array-element-newline": ["error", "consistent"],
  "capitalized-comments": 0,
  "class-methods-use-this": 0,
  "comma-dangle": ["error", "always-multiline"],
  "dot-location": ["error", "property"],
  "dot-notation": ["error"],
  "func-names": ["error", "as-needed"],
  "func-style": ["error", "declaration", {
    allowArrowFunctions: true,
  }],
  "id-length": ["error", {
    exceptions: ["_", "$", "i"],
  }],
  "indent": ["error", 2],
  "line-comment-position": 0,
  "max-classes-per-file": ["error", 5],
  "max-len": ["error", {
    code: 120,
  }],
  "max-params": ["error", 4],
  "multiline-comment-style": 0,
  "multiline-ternary": ["error", "always-multiline"],
  "newline-per-chained-call": ["error"],
  "no-console": 0,
  "no-inline-comments": 0,
  "no-magic-numbers": ["error", {
    ignore: [-1, 0, 1],
  }],
  "no-multiple-empty-lines": ["error", {
    max: 2,
    maxBOF: 0,
    maxEOF: 0,
  }],
  "no-plusplus": 0,
  "no-sync": ["error", {
    allowAtRootLevel: true,
  }],
  "no-ternary": 0,
  "no-trailing-spaces": ["error", {
    ignoreComments: false,
    skipBlankLines: false,
  }],
  "no-undefined": 0,
  "no-use-before-define": ["error", {
    classes: false,
    functions: false,
    variables: true,
  }],
  "no-warning-comments": "warn",
  "object-curly-newline": ["error", {
    ExportDeclaration: "never",
    ImportDeclaration: "never",
    ObjectExpression: {
      consistent: true,
      multiline: true,
    },
    ObjectPattern: {
      consistent: true,
      multiline: true,
    },
  }],
  "object-curly-spacing": ["error", "always"],
  "object-property-newline": ["error", {
    allowAllPropertiesOnSameLine: true,
  }],
  "one-var": ["error", "never"],
  "padded-blocks": ["error", {
    blocks: "never",
    classes: "always",
    switches: "never",
  }],
  "quote-props": ["error", "consistent-as-needed"],
  "require-jsdoc": 0,
  "sort-keys": ["error", "asc", {
    caseSensitive: true,
    natural: false,
  }],
};
