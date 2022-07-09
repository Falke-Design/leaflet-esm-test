const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './js/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
