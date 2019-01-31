'use strict';

import _ from 'lodash';
import webpack from 'webpack';
import gitRevision from 'git-revision';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import args from 'node-args';

// 获取当前环境
let ENV = args.env || 'development';
let TARGET = `${__dirname}/dest`;
let port = 3000;

let config = {
    mode: ENV,
    entry: {
        vendor: ['@babel/polyfill']
    },
    output: {
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].js',
        path: TARGET,
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue']
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].[contenthash:8].css' // use contenthash *
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            // 通过 vue-loader 和vue-template-compiler来加载并编译.vue文件
            // npm install --save-dev vue-loader vue-template-compiler
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', {
                loader: 'less-loader',
                options: {
                    strictMath: true,
                }
            }],
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: port,
        open: true,
        openPage: 'app',
        proxy: {
            '/app': { target: `http://localhost:${port}`, pathRewrite: { '$': '.html' } },
            '/': { target: `http://localhost:${port}`, pathRewrite: { '$': 'app.html' } }
        },
        lazy: false,
        compress: true, // 启用gzip压缩
        headers: {
            'X-Frame-Options': 'SAMEORIGIN',
            'X-XSS-Protection': '1; mode=block',
        },
        disableHostCheck: true,
        useLocalIp: true,
    },
};

function addEntry () {
    // 生成多个入口文件
    let pages = require('./page.js');
    _.map(pages, page => {
        config.entry[page.name] = `./${page.name}.js`;
        let plugin = new HtmlWebpackPlugin({
            title: page.title, // 用于生成的HTML文件的标题
            filename: `${page.name}.html`, // 生成的HTML文件的名字，默认就是index.html
            template: 'template.ejs', // 有时候，插件自动生成的html文件，并不是我们需要结构，我们需要给它指定一个模板，让插件根据我们给的模板生成html
            inject: 'body', // 有四个选项值 true|body|head|false。true|body:script标签位于html文件的 body 底部；head:插入的js文件位于head标签内；false:不插入生成的js文件，只生成一个纯html
            // minify: {"removeComments": true, "collapseWhitespace": true},//压缩
            // minify: false,//不压缩
            favicon: 'assets/img/favicon.ico', // 给定的图标路径，可将其添加到输出html中。
            // excludeChunks: [],//排除特定块
            chunks: ['manifest', 'vendor', page.name], // 限定特定的块
            chunksSortMode: 'none',
            banner: {// 打包分支、时间、tag标
                branch: gitRevision('branch'),
                tag: gitRevision('tag'),
                // date: moment().format('YYMMDD_HHmmss'),
            },
        });
        config.plugins.push(plugin);
    });
}
addEntry();
export default config;