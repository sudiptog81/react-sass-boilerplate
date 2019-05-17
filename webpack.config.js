/* eslint-disable no-undef */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        {
                            loader: (argv.mode === "development") ? "style-loader" : MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: (argv.mode === "development")
                            }
                        }
                    ]
                }
            ]
        },
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./dist/js"),
            publicPath: "/",
            filename: "bundle.js"
        },
        resolve: {
            extensions: ["*", ".js", ".jsx"]
        },
        devServer: {
            contentBase: "./dist"
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "../css/[name].css",
                chunkFilename: "../css/[id].css"
            })
        ]
    };
};