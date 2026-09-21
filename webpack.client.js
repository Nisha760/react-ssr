const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'client.js'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
}