/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0B9201',
                dark: '#0b0c12',
                toggle: '#15151b',
            },
            fontFamily: {
                'sans': ["'Inter', sans-serif", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
