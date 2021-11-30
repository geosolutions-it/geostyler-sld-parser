require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./src/SldStyleParser.ts"],
  mode: 'development',
  output: {
    filename: "sldStyleParser.js",
    path: path.join(__dirname, "browser"),
    library: "GeoStylerSLDParser"
  },
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: [".ts", ".js", ".json"]
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
          }
        ]
      }
    ]
  }
};
