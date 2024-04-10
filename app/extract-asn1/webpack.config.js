const path = require("path");
const { BannerPlugin } = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/cli.ts",
  target: "node",
  output: {
    filename: "cli.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@lib": path.resolve(__dirname, "../../src"),
    },
  },
  plugins: [
    new BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
