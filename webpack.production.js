const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const webpack = require('webpack');
const basePath = __dirname;

webpack.logLevel = 'NONE';

module.exports = {
  context: path.join(basePath, '.'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@root': path.resolve(__dirname, '')
    }
  },
  entry: {
    app: './src/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-router',
    ]
  },
  output: {
    path: path.join(basePath, './docs'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {

          } }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      warnings: false
    }),
    new CleanWebpackPlugin(['docs'], {
      verbose:  true,
      dry:      false
    }),
    new CnameWebpackPlugin({
      domain: 'chequer.io',
    }),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: './src/index.html', //Name of template in ./src
      favicon: './src/assets/favicon.ico',
      hash: true
    }),
    new HtmlWebpackPlugin({
      chunks: [],
      filename: '404.html',
      template: './src/404.html',
      hash: false,
    }),
      new HtmlWebpackPlugin({
          chunks: [],
          filename: 'robots.txt',
          template: './src/robots.txt',
          hash: false,
      }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ]
};