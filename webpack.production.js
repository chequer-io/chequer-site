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
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['src', 'node_modules'],
  },
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.join(basePath, './docs'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
  devtool: 'source-map',
  plugins: [
    // async import
    new webpack.NormalModuleReplacementPlugin(
      /^pages$/,
      'pages/index.async.js',
    ),
    // chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      warnings: false,
      drop_console: true,
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
