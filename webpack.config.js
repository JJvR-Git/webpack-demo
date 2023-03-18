const path = require('path');

const { resourceLimits } = require('worker_threads');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};