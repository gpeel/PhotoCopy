const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  watch: true,
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    // copy content of src/asset into {output} which is ./dist
    new CopyWebpackPlugin([{ from: 'src/asset' }]
    )
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
};
