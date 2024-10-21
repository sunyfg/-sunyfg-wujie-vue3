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
    port: 9002, // remote
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote: "remote@http://localhost:9001/remoteEntry.js",
      },
    }),
  ],
};

module.exports = config;
