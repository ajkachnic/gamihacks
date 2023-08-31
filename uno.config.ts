// uno.config.ts
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives()
  ],
  rules: [
    // your custom rules
  ],
  theme: {
    fontFamily: {
      serif: "Instrument Serif",
      sans: "Switzer"
    }
  }
})