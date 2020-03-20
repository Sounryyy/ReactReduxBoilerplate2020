const HtmlWebPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.(css)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },

            {
                test: /\.(s[ca]ss)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },

            {
                test: /\.(jpeg|jpg|png|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],

    devServer: {
        open: true
    }
};