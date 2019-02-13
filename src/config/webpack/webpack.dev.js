/* eslint-env node */
const webpack = require("webpack");

const config = require("./webpack.common");

config.devtool = "source-map";
config.mode = "development";
config.output.filename = "dist/[name].js";

Object.keys(config.entry)
  .forEach((key) => {
    config.entry[key] = [config.entry[key], "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"];
  });

// eslint-disable-line no-underscore-dangle, camelcase, max-len

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
