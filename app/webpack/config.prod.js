const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const { resolve } = require('path')
const createBaseConfig = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = function createConfig({ srcFolder, rootFolder }) {
  return webpackMerge(createBaseConfig.apply(null, arguments), {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: resolve(rootFolder, srcFolder),
          use: ExtractTextPlugin.extract({
            fallback: { loader: 'style-loader', options: { sourceMap: true } },
            use: [
              { loader: 'css-loader', options: { sourceMap: true } },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    autoprefixer({ browsers: ['last 2 versions'] })
                  ]
                }
              }
            ],
            publicPath: '/'
          })
        }
      ]
    },
    entry: './index.js',
    devtool: 'hidden-source-map',
    plugins: [
      new ExtractTextPlugin({ filename: 'style.css' }),
      // we will not emmit code in case of build step failed
      new webpack.NoEmitOnErrorsPlugin(),
      // turing production mode `On` in react
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      // minimize our code
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ]
  })
}
