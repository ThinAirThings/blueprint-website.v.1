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
        colors: {
            ...slate,
            ...blue
        },
    },
    plugins: [],
    presets: [
        radixThemePreset
    ]
}
export default config
