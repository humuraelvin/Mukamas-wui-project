// tailwind.config.js
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            colors: {
                'pink-700': '#e82574',
                'pink-600': '#bc1c5c',
                'text-dark': '#0c0a09',
                'text-light': '#78716c',
            },
            maxWidth: {
                '6xl': '1200px',
            },
        },
    },
    plugins: [],
};
