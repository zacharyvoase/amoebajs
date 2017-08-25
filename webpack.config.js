path = require('path')

var nodeTarget = {
    target: 'node',
    entry: './lib/index.js',
    output: {
        library: 'amoeba',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'),
        filename: 'amoebajs_node.js'
    },
    module: {
        rules: [
            { test: /\.bc$/, use: 'llvmbc-wasm-loader' },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};

var webTarget = {
    target: 'web',
    entry: './lib/index.js',
    output: {
        library: 'amoeba',
        libraryTarget: 'window',
        path: path.resolve(__dirname, 'dist'),
        filename: 'amoebajs_web.js'
    },
    module: {
        rules: [
            { test: /\.bc$/, use: 'llvmbc-wasm-loader' },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    externals: ['fs', 'path']
};

module.exports = [nodeTarget, webTarget];

