import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            animation: {
                fade: 'fadeIn 1s ease-in-out',
                fadeDelay: 'fadeIn 1s ease-in-out .5s 1 normal forwards',
            },

            // that is actual animation
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0%' },
                    '100%': { opacity: '100%' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
