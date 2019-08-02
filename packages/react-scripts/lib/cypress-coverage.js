'use strict';

const coverage = require('@cypress/code-coverage/task');
const spawn = require('react-dev-utils/crossSpawn');
const { join } = require('path');
const { existsSync, readFileSync, writeFileSync } = require('fs-extra');

module.exports = {
  ...coverage,
  coverageReport() {
    const outputFolder = '.nyc_output';
    const coverageFolder = join(process.cwd(), outputFolder);
    const nycFilename = join(coverageFolder, 'out.json');

    if (!existsSync(nycFilename)) {
      console.warn('Cannot find coverage file %s', nycFilename);
      console.warn('Skipping coverage report');
      return null;
    }

    if (process.platform === 'win32') {
      const file = JSON.parse(readFileSync(nycFilename));
      const mappedFile = Object.keys(file).reduce((all, path) => {
        return Object.assign({}, all, {
          [path.replace(/^(\/mnt\/c)/, 'C:')]: {
            ...file[path],
            path: path.replace(/^(\/mnt\/c)/, 'C:'),
          },
        });
      }, {});

      writeFileSync(nycFilename, JSON.stringify(mappedFile, null, 2));
    }

    return spawn.sync(
      './node_modules/.bin/nyc',
      [
        'report',
        '--extension',
        'ts',
        '--extension',
        'tsx',
        '--all',
        '--reporter',
        'html',
      ],
      {
        stdio: 'inherit',
      }
    );
  },
};
