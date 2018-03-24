const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: __dirname + '/index.html',
    inject: 'body',
    alwaysWriteToDisk: true
});


module.exports = {
    entry: {
        'bundle': "./src/index.tsx",
        'fabric': "office-ui-fabric-react/dist/css/fabric.css",
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/dist",
        publicPath: '/',
    },

    plugins: [
        HtmlWebpackPluginConfig
    ],

    devServer: {
        open: 'http://localhost:9000',
        port: 9000,
        publicPath: "/",
    },
    node: {
        __filename: true,
    },


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".scss"],
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
                loader: "url-loader",
            },


        ]
    },
};