const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../workspaces'),
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loaders: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: './fonts/',
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve = Object.assign(config.resolve, {
    alias: {
      '@app': resolve('../workspaces/app'),
      'react-dom': resolve('../node_modules/@hot-loader/react-dom'),
    },
  });

  return config;
};
