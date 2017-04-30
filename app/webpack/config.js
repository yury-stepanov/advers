const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function createConfig({ distFolder, srcFolder, rootFolder }) {
  return {
    // folder for root source files
    context: resolve(rootFolder, srcFolder),
    // where to put our bundled code
    output: {
      filename: 'bundle.js',
      path: resolve(rootFolder, distFolder),
      publicPath: '/'
    },
    module: {
      rules: [
        // transpile `.js` files with babel
        // presets are in separate .babelrc file
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: resolve(rootFolder, srcFolder)
        },
      ]
    },
    // with that we are sayning to webpack to look into 2 folders for modules
    // 1) our `srcFolder`
    // 2) `node_modules`
    resolve: {
      modules: [
        resolve(rootFolder, srcFolder),
        resolve(rootFolder, 'node_modules')
      ]
    },
    plugins: [
      // index.html will be created using 'template/index.html'
      // with all necessary <script> tags
      new HtmlWebpackPlugin({
        template: resolve(rootFolder, 'template/index.html')
      }),
      // clean build folder before each build
      new CleanWebpackPlugin(distFolder)
    ]
  }
}
