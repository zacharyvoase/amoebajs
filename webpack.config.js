const path = require('path')

const rules = [
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

const nodeTarget = {
    target: 'node',
    entry: './lib/index.js',
    output: {
        library: 'amoeba',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'),
        filename: 'amoebajs_node.js'
    },
    module: {
        rules: rules
    }
}

const webTarget = {
    target: 'web',
    entry: './lib/index.js',
    output: {
        library: 'amoeba',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'amoebajs_web.js'
    },
    module: {
        rules: rules
    },
    externals: ['fs', 'path']
}

module.exports = [nodeTarget, webTarget]
