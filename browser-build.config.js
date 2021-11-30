const TerserPlugin = require('terser-webpack-plugin');
require("@babel/polyfill");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/SldStyleParser.ts"],
  mode: 'production',
  output: {
    filename: "sldStyleParser.js",
    path: path.join(__dirname, "browser"),
    library: "GeoStylerSLDParser"
  },
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: [".ts", ".js", ".json"]
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      // All files with a '.ts'
      {
        test: /\.ts$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      }
    ]
  }
};
