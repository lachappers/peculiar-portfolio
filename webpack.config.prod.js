const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  // mode: "none",
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  // devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    client: {
      overlay: false,
    },
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      title: "Lucy Chaplin",
      template: "./src/index.html",
      inject: "body",
      // publicPath: "/peculiar-portfolio/",
    }),
  ],
  output: {
    // filename: "[name].[ext]",
    filename: "bundle.js",
    // filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext][query]",
        },
        // use: [
        //   {
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "/img/",
        //       publicPath: "dist/img/",
        //     },
        //   },
        // ],
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //     },
      //   },
      // },
    ],
  },
};
