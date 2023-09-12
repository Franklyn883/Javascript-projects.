const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./main.js", // Assuming this is your entry file
    output: {
        path: path.resolve(__dirname, "dist"), // Output directory
        filename: "bundle.js", // Output file name
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./root/views/index.html", // Path to your HTML file
            filename: "index.html", // Output file name
        }),
    ],
    mode: "development", // Set to 'production' for production build
};
