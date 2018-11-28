/**
 * @Description:
 * @Author: CHEHSHUANG
 * @Date: 2018/11/28
 */
const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: [path.resolve(SRC_PATH, 'main.js')]
    },
    output: {
        path: BUILD_PATH,
        filename: "js/[name].[hash:5].js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /.\css$/,
                use: [
                    MiniCssExtractPlugin.loader,"css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./templates/index.html",//指向可以自定义
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    externals: {//react已单独引入，所以不将react打包进去目标文件
        "react": 'React',
        'react-dom': 'ReactDOM'
    }
}
