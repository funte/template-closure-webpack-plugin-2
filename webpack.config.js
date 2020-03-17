const path = require('path');
const HtmlPlugin = require("html-webpack-plugin");
const ClosurePlugin = require('closure-webpack-plugin');
const GCCDepsPlugin =  require('google-closure-deps-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    index: 'index.html',
    host: '127.0.0.1',
    port: 8080
  },
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: "html-loader"
      }]
    }]
  },
  plugins: [
    new GCCDepsPlugin({
      output: '.tmp/deps.js',
      source: {
        roots: ['src/lib'],
      },
      goog: 'node_modules/google-closure-library/closure/goog/base.js',
      python: 'python'
    }),
    new HtmlPlugin({
      chunks: ['bundle'],
      template: 'src/index.ejs',
      filename: 'index.html', // 默认值.
      title: 'webpack-tutorial'
    }),
    new ClosurePlugin.LibraryPlugin({
      closureLibraryBase: require.resolve(
        'google-closure-library/closure/goog/base'
      ),
      deps: [
        require.resolve('google-closure-library/closure/goog/deps'),
        '.tmp/deps.js',
      ],
    })
  ]
};