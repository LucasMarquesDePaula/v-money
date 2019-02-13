/* eslint-env node */
const path = require("path");
const config = require("..");

const context = path.resolve(__dirname, "..", "..", "..");

module.exports = {
  context,
  entry: {
    "v-money": "./src/main/index.js",
  },
  externals: {
    jquery: "jQuery",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.(js)$/u,
        use: [
          {
            loader: "babel-loader",
            options: config("babel"),
          },
        ],
      },
    ],
  },
  optimization: {
    noEmitOnErrors: true,
  },
  output: {
    library: "VMoney",
    libraryExport: "default",
    libraryTarget: "umd",
    path: context,
    publicPath: "/",
  },
  plugins: [],
};
