const path = require('path')

const rules = [
    {
        test: /\.bc$/,
        use: {
            loader: 'llvmbc-wasm-loader',
            options: {
                command: [
                    'em++',
                    '-s', 'NO_EXIT_RUNTIME=1',
                    '-s', 'RESERVED_FUNCTION_POINTERS=1',
                ]
            }
        }
    },
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
    node: {
        fs: 'empty',
        path: 'empty'
    }
}

module.exports = [nodeTarget, webTarget]
