
var webpack = require("webpack");
var path = require("path");
// var glob = require('glob-all');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _root = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        'polyfills': './src/main/angular/polyfills.ts',
        'vendor': './src/main/angular/vendor.ts',
        'app': './src/main/angular/app.ts'
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "src/main/webapp/public")
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.pug', '.json', '.styl']
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.join(__dirname,'node_modules/rxjs'),
                    path.join(__dirname,'node_modules/@angular'),
                    path.join(__dirname,'node_modules/@ngrx'),
                    path.join(__dirname,'node_modules/@angular2-material')
                ]
            }

        ],
        loaders: [
            {
                include: /\.json/,
                loader: "json"
            },
            {
                include: /\.pug/,
                loader: 'pug-html-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/main/html/index.html'
        })
    ]
};