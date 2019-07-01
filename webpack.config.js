const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader",
            options: {
              strictMath: true,
              noIeCompat: true,
            },
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 3001,
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
