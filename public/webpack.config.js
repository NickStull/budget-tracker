const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",

  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: {
    index: "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker App",
      short_name: "Budget App",
      description: "An application to keep track of a Budget that will work in offline situations",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;