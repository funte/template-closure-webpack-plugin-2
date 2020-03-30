const path = require('path');
const HtmlPlugin = require("html-webpack-plugin");
const GCLibraryPlugin = require('google-closure-library-webpack-plugin');

const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = [
  {
    mode: MODE,
    devtool: 'cheap-module-source-map',
    entry: {
      'goog-require-example': './src/goog-require-example/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      library: 'App',
      libraryTarget: 'umd',
      globalObject: 'this',
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
      new GCLibraryPlugin({
        sources: ['src/goog-require-example']
      }),
      new HtmlPlugin({
        chunks: ['goog-require-example'],
        template: 'src/index.ejs',
        filename: 'google-require-example.html',
        title: 'goog.require example'
      })
    ]
  },

  {
    mode: MODE,
    devtool: 'cheap-module-source-map',
    entry: {
      'goog-module-example': './src/goog-module-example/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      library: 'App',
      libraryTarget: 'umd',
      globalObject: 'this',
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
      new GCLibraryPlugin({
        sources: ['src/goog-module-example']
      }),
      new HtmlPlugin({
        chunks: ['goog-module-example'],
        template: 'src/index.ejs',
        filename: 'google-module-example.html',
        title: 'goog.module example'
      })
    ]
  },

  {
    mode: MODE,
    devtool: 'cheap-module-source-map',
    entry: {
      'goog-declare-example': './src/goog-declare-example/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      library: 'App',
      libraryTarget: 'umd',
      globalObject: 'this',
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
      new GCLibraryPlugin({
        sources: ['src/goog-declare-example']
      }),
      new HtmlPlugin({
        chunks: ['goog-declare-example'],
        template: 'src/index.ejs',
        filename: 'google-declare-example.html',
        title: 'goog.declareModuleId example'
      })
    ]
  }
];