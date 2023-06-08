const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'development',
    devServer: {
        static: {
          directory: './dist', // Заменить 'contentBase' на 'static.directory'
        },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к вашему шаблону index.html
    }),
  ],
};