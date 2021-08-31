//Por cada cambio en este archivo, ejecutar el comando npm run build

const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true //Limpia el dist
    }, 
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles.css$/,
                use: [
                    MiniCssExtract.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPack({
            title: 'My Webpack App',
            template: './src/index.html',
        }),
        /*[name].[fullhash]: me permite poner el nombre del archivo
            por default. Además ayuda a que
            este archivo no se guarde en el caché del usuario.
        */
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [
                { 
                    from: "src/assets/",
                    to: "assets/" 
                }
            ],
        })
    ]
}