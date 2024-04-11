const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles:['./src/**']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
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
//   resolve: {
//     fallback: {
//       util: require.resolve("tty/")
//     }
// }

  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
