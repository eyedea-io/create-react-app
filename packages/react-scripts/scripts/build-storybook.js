'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const storybook = require('@storybook/react/standalone');
const paths = require('../config/paths');

storybook({
  mode: 'static',
  configDir: paths.storybookConfig,
  outputDir: paths.storybookOutput,
});
