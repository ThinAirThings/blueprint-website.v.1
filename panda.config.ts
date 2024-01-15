import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import radixColorsPreset from "pandacss-preset-radix-colors";
export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {},
    },
    // Radix Preset
    presets: ['@pandacss/preset-panda', radixColorsPreset()],
    // The output directory for your css system
    outdir: "styled-system",

    // The JSX framework to use
    jsxFramework: "react",
    // Define Global CSS
    globalCss: defineGlobalStyles({
        '*': {
            boxSizing: 'border-box',
            p: 0,
            m: 0
        },
        'html, body': {
            maxWidth: 'screen',
            overflowX: 'hidden'
        },
        a: {
            color: 'inherit',
            textDecoration: 'none'
        }
    })
});
