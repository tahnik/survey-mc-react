const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
    entry: './app.js',
    output: {
        path: './bin/',
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
    },
    {
        entry: './views/index.js',
        output: {
            path: './bin',
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                output: {
                    comments: false,
                },
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    }
]
