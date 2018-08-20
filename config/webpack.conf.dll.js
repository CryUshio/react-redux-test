const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        vendors: [
            'react', 'redux', 'react-router-dom', 'antd', 'prop-types', 'immer',
            'react-redux', 'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/dll'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, '../dist/dll', 'dll-manifest.json')
        })
    ]
};
