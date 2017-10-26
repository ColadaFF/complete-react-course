const path = require("path");

const config = {
  context: __dirname,
  entry: "./js/index.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;