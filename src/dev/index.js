/* eslint-disable no-process-env */
/* eslint-env node */

const path = require("path");
const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

(function createEnv (require) {
  // Step 1: Create & configure a webpack compiler
  const webpack = require("webpack");
  const bundlerConfig = require("../config")("webpack");

  const compiler = webpack(bundlerConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    logLevel: "warn",
    publicPath: bundlerConfig.output.publicPath,
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  const TEN_THOUSAND = 10000;
  app.use(require("webpack-hot-middleware")(compiler, {
    heartbeat: TEN_THOUSAND,
    log: console.log, // eslint-disable-line no-console, max-len
    path: "/__webpack_hmr",
  }));
}(require));

if (require.main === module) {
  const server = http.createServer(app);
  const defaultPort = 3000;
  const PORT = process.env.PORT || defaultPort;
  server.listen(PORT, () => {
    console.log("Listening on %j", server.address()); // eslint-disable-line no-console, max-len
  });
}
