const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

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
                    '--bind'
                ]
            }
        }
    },
    { test: /\.js$/, use: 'babel-loader' }
]

const plugins = [
    new webpack.BannerPlugin(
        fs.readFileSync('./amoeba-LICENSE', {encoding: 'utf-8'})
    )
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
    },
    plugins: plugins
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
    },
    plugins: plugins
}

module.exports = [nodeTarget, webTarget]
