const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const basePath = __dirname;

webpack.logLevel = 'NONE';

module.exports = {
  context: path.join(basePath, '.'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@root': path.resolve(__dirname, ''),
    },
  },
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.join(basePath, './docs'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {},
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      warnings: false,
    }),
    new CleanWebpackPlugin(['docs'], {
      verbose: true,
      dry: false,
    }),
    new CnameWebpackPlugin({
      domain: 'www.chequer.io',
    }),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: './src/index.html', //Name of template in ./src
      favicon: './src/assets/favicon.ico',
      hash: true,
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
  ],
};
