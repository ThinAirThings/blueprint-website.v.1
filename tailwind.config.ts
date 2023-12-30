import type { Config } from 'tailwindcss'
import { radixThemePreset } from 'radix-themes-tw'
import {slate, blue} from '@radix-ui/colors'
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
        },
        colors: {
            ...slate,
            ...blue
        },
    },
    plugins: [],
    presets: [radixThemePreset]
}
export default config
