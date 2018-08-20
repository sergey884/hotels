const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = (env, options) => ({
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  devtool: options.mode === 'production' ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2017', 'stage-0', 'react'],
            plugins: [
              'transform-runtime',
              'transform-class-properties',
              'transform-decorators-legacy',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hotels',
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});
