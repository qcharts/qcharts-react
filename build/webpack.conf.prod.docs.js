const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.conf.common')

module.exports = merge(common, {
  entry: {
    main: path.resolve(__dirname, '../site/'),
    'qcharts-react': './src'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../docs'),
    filename: '[name].js',
    library: 'QchartsReact',
    libraryExport: 'default',
    libraryTarget: 'umd',
    chunkFilename: '[name].js?v=[hash:7]'
  },
  module: {
    rules: [
      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/img/[name].[ext]?[hash]'
        }
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/fonts/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../site/index.html'),
      filename: 'index.html'
    })
  ]
})
