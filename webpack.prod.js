const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'static/js/[name].[contenthash].js'
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
        FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        FIREBASE_DATABASE_URL: JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        FIREBASE_STORAGE_BUCKET: JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        )
      }
    }),
    new Dotenv({
      path: './.env.production'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      // Controls if and in what ways the output should be minified
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      templateParameters: {
        PUBLIC_URL: '',
        title: 'Flashcard App'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css'
    }),
    new CopyPlugin([
      {
        from: 'public/',
        to: '.',
        ignore: ['service-worker.js']
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
});
