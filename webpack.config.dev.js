const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const cssLoaders = ["style-loader", "css-loader"];

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      { test: /\.css$/, use: cssLoaders },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
};
