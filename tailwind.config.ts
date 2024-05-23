import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg-color': '#09141A',
        'button-gradient-start': '#62CDCB',
        'button-gradient-end': '#4599DB',
        'white-opacity-9': 'rgba(255, 255, 255, 0.09)',
      },
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
