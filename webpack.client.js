const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    return {
        target: 'web',
        entry: './src/client.js',
        output: {
            path: path.resolve(__dirname, 'dist/public'),
            filename: 'client.js',
        },
        devtool: isProd ? false : 'source-map',
        module: {
            rules: [
                { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
                { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            ],
        },
        plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
    };
};