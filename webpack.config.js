// const path = require("path");
// const autoprefixer = require("autoprefixer");
// // const ExtractCSS = require("extract-text-webpack-plugin");
// const ExtractCSS = require("mini-css-extract-plugin");

// const MODE = process.env.WEBPACK_ENV;
// const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// const OUTPUT_DIR = path.join(__dirname, "static");

// const config = {
//   entry: ENTRY_FILE,
//   mode: MODE,
//   module: {
//     rules: [
//       {
//         test: /\.(scss)$/,
//         use: ExtractCSS.extract([
//           {
//             loader: "css-loader",
//           },
//           {
//             loader: "postcss-loader",
//             options: {
//               plugin() {
//                 return [autoprefixer({ browsers: "cover 99.5%" })];
//               },
//             },
//           },
//           {
//             loader: "sass-loader",
//           },
//         ]),
//       },
//     ],
//   },
//   output: {
//     path: OUTPUT_DIR,
//     filename: "[name].[format]",
//   },
//   plugins: [new ExtractCSS("styles.css")],
// };

// module.exports = config;

const path = require("path");

// const ExtractCSS = require("extract-text-webpack-plugin");
const MiniExtractCSS = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniExtractCSS.loader,
            options: {
              hmr: process.env.WEBPACK_ENV === "development",
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [
                  autoprefixer({
                    overrideBrowserslist: "cover 99.5%",
                  }),
                ];
              },
            },
          },

          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniExtractCSS({
      filename: "styles.css",
    }),
  ],
};

module.exports = config;
