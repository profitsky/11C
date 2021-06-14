const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    main: "./src/App.js",
  },
  output: {
    filename: "js/[contenthash:6].[name]-bundle.js",
    path: path.resolve(__dirname, "../", "dist"),    
  },

  module: {

      rules:[
        {
          test: /\.s[ac]|c]ss$/i,
          use: [MiniCSSExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader" ]
        }, 

        { 
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts"
              }
            }
          ]
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:
          [
            "babel-loader"
          ]
        },
      ]
    },
  
   plugins: [  
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/template.html"),
      minify: true 
    }),
        
    new MiniCSSExtractPlugin({
      filename: "[name].[contenthash:6].css"
    }),    
  ],
}