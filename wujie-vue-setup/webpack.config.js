const { Configuration } = require("webpack");
const path = require("path");

/**
 * @type {Configuration} 配置智能提示
 */
const config = {
  mode: "none", // none: 不使用任何默认优化
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
    library: "wujievue",
    libraryTarget: "umd",
    umdNamedDefine: true, // 为 UMD 的构建指定一个命名空间，否则会生成一个匿名的对象
  },
  externals: {
    vue: "vue",
    wujie: "wujie",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
