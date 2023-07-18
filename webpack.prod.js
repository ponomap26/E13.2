const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    stats:{
        children:false
    },
    devServer: {
        static: {
            directory: '/dist'
        },
        port: 3001,
        // contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        open: true
    },
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.js$/,
                use: 'eslint-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),

        new TerserWebpackPlugin(),
        new CssMinimizerPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()]
    },
    devtool: 'inline-source-map'
};