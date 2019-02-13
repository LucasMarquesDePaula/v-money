/* eslint-env node */

const config = require("../config");
const webpack = require("webpack");

module.exports = () => new Promise((resolve, reject) => {
  const bundlerConfig = config("webpack");
  const bundler = webpack(bundlerConfig);

  bundler.run((err, stats) => {
    if (err) {
      reject(err);
    } else if (stats.hasErrors()) {
      reject(new Error(stats.toString({
        colors: true,
        verbose: true,
      })));
    } else {
      resolve(stats);
    }
  });
});

if (require.main === module) {
  
  module.exports()
    .then((stats) => {
      console.log(stats.toString({
        colors: true,
        verbose: true,
      }));

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
    })
    .catch((err) => console.error(err));
}