const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9000
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
