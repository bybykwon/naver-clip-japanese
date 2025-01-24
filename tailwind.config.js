/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        container: {
            mawWidth: {
                DEFAULT: '1340px',
            },
            center: true,
            px: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '4rem',
                lg: '6rem',
                xl: '8rem',
            },
        },
        extend: {
            backgroundImage: {
                'custom-gradient': `
          linear-gradient(#000, #000, #000), 
          linear-gradient(173deg, rgba(173, 255, 95, 0.8) 25.53%, rgba(165, 239, 248, 0.8) 49.32%, rgba(139, 109, 243, 0.8) 74.85%)
        `,
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'custom-dark': '#1C1B23',
                'naver-green': '#80EA26',
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const newUtilities = {
                // focus mixin
                '.focus-primary': {
                    outlineOffset: '-0.4rem',
                    outline: '2px solid rgba(36, 107, 235, 0.8)', // 예시: primary 색상
                },
                '.g-container': {
                    width: '100%',
                    maxWidth: theme('screens.xl'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                },
                '.bar': {
                    display: 'flex',
                    'column-gap': '17px',
                    '> *': {
                        position: 'relative',
                        '&:last-child::before': {
                            display: 'none',
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '53%',
                            right: '-6px',
                            transform: 'translateY(-50%)',
                            width: '1px',
                            height: '60%',
                            background: '#adadad',
                            opacity: '0.5',
                        },
                    },
                },
                '.flex-center': {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
        },
    ],
};
