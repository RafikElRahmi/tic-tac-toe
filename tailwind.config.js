/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from "./src/libs";

export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: tailwindConfig,
    plugins: [],
};
