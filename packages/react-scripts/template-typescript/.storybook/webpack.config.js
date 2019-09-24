const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const webpack = require('webpack');

module.exports = props => {
  const config = require('smashing-scripts/config/storybook/webpack')(props);

  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@app': resolve('../workspaces/app'),
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.SYNCANO_PROJECT_INSTANCE': JSON.stringify(
        process.env.SYNCANO_PROJECT_INSTANCE
      ),
    })
  );

  return config;
};
