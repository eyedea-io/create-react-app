'use strict';
const webpack = require('webpack');

const env = [
  'SENTRY_DSN',
  'RELEASE',
  'SENTRY_ENV',
  'NODE_ENV',
  'PUBLIC_URL',
  'SYNCANO_PROJECT_INSTANCE',
];

module.exports = config => {
  config.plugins.push(new webpack.DefinePlugin(env.reduce(envReducer, {})));

  return config;
};

function envReducer(all, item) {
  return {
    ...all,
    [`process.env.${item}`]: JSON.stringify(process.env[item]),
  };
}
