const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    node: {__dirname: false},
    module: {
        rules: [
          { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
          { test: /\.css$/, use: 'null-loader' },
        ],
    },

}