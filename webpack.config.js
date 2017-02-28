var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/index.js",
  module: {
    loaders: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        },
      },{
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  output: {
    path: __dirname + "/src",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
