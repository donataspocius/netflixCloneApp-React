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
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },

      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      { test: /\.css$/, use: cssLoaders },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // (1)
        use: "file-loader",
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
};
