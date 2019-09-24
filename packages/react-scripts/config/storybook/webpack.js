'use strict';

const path = require('path');
const paths = require('../paths');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: paths.workspaces,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              require.resolve('babel-preset-react-app'),
              {
                flow: false,
                typescript: true,
              },
            ],
          ],
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent:
                      '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
          ],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve = Object.assign(config.resolve, {
    alias: {
      react: path.resolve(path.join(paths.appNodeModules, 'react')),
      'react-dom': path.resolve(
        path.join(paths.appNodeModules, './@hot-loader/react-dom')
      ),
    },
  });

  return config;
};
