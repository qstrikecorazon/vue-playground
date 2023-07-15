import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { type UserConfig, configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

const vitestConfig = defineConfig({
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})

export default mergeConfig(
  viteConfig as UserConfig,
  vitestConfig as UserConfig
)
