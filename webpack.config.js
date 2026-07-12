const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/todo.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
