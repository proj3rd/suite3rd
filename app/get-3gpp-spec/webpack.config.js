const path = require("path");

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
  },
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