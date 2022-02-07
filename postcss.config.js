const tailwindcss = require('tailwindcss')
const tailwind = require('./tailwind')

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}