const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // source file location
    entry: {
        visual: path.resolve(__dirname, "src", "js", "visual.js"),
        colorpicker: path.resolve(__dirname, "src", "js", "colorpicker.js")
    },
    mode: "development",
    target: "web",
    devServer: {hot: false},
    output: {
        path: path.resolve(__dirname, "src", "js", "dist"),
        filename: '[name].js'
    },
   
    plugins: [new HTMLWebpackPlugin({})]
};