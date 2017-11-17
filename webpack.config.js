module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "./app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
};
