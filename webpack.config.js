const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'assets/src/js/index'),
    output: {
        path: path.join(__dirname, 'assets/dist'),
        filename: '[name].js'
    },
    mode: "development",

    // Configurations with webpack 5
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new CleanWebpackPlugin(),
        new BundleTracker({
            path: __dirname,
            filename: 'webpack-stats.json'
        }),
    ],
}
