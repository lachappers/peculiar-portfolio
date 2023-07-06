/* eslint-disable import/extensions */
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  // devtool: "inline-source-map",
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    client: {
      overlay: false,
    },
  },
  plugins: [new ESLintPlugin()],

  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot)/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
});
