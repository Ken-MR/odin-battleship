const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/page-control.js',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/'),
      clean: true,
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      ],
  },
};