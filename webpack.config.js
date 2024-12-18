const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './static/js/contact.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Dotenv()
    ],
    mode: 'production'
};