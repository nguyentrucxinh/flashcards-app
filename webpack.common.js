const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    // Make sure react-hot-loader is required before react and react-dom
    'react-hot-loader/patch',
    './src/index.js'
  ],
  optimization: {
    splitChunks: {
      // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
      chunks: 'all'
    }
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    historyApiFallback: true,
    // https://webpack.js.org/configuration/dev-server/#devservercontentbase
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        HELLO: JSON.stringify('Define variable from webpack'),
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
    // https://webpack.js.org/plugins/progress-plugin/
    new webpack.ProgressPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  }
};
