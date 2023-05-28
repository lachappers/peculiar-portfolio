const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // mode: "none",
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lucy Chaplin",
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  output: {
    // filename: "[name].[ext]",
    // filename: "bundle.js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },

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
        // use: [
        //   {
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "/img/",
        //       publicPath: "/img/",
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
