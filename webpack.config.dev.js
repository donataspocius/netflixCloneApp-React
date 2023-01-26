const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const cssLoaders = [MiniCssExtractPlugin.loader, "css-loader"];

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: "babel-loader",
      },
      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      { test: /\.css$/, use: cssLoaders },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
};
