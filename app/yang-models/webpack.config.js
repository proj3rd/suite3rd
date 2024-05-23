const path = require("path");
const { BannerPlugin } = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    fetch: "./src/fetch.ts",
    parse: "./src/parse.ts",
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
    },
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
