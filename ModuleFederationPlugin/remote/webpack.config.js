const { Configuration } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { ModuleFederationPlugin } = require("webpack").container;

/**
 * @type {Configuration}
 */
const config = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    port: 9001, // remote
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // 解释：ModuleFederationPlugin 是一个插件，用于将模块暴露给其他应用程序使用
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./addList": "./list.js",
      },
    }),
  ],
};

module.exports = config;
