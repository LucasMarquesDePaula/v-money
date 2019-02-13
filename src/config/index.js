/* eslint-env node */
/* eslint-disable no-process-env, global-require */
const env = process.env.NODE_ENV === "production" ? "prod" : "dev";
module.exports = (name) => require(`./${name}/${name}.${env}.js`);
