/* eslint-env node */
const config = require("./webpack.common");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

config.mode = "production";

config.optimization.minimizer = [
  new UglifyJsPlugin({
    extractComments: true,
  }),
];

config.output.filename = "dist/[name].min.js";

module.exports = config;
