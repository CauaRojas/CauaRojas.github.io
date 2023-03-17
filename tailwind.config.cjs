/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{svelte,ts,js}'],
    theme: {
        extend: {
            fontFamily: {
                ibm: ['IBM Plex Mono', 'monospace'],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
