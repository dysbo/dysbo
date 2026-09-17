import { reactRouter } from '@react-router/dev/vite'
import { type ConfigEnv, defineConfig } from 'vitest/config'

import type { CoverageOptions } from 'vitest/node'

const coverageSettings: CoverageOptions = {
  enabled: true,
  clean: true,
  thresholds: {
    functions: 100,
    branches: 100
  },
  include: ['./app/components/**']
}

export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: mode === 'test' ? [] : [reactRouter()],
  resolve: {
    tsconfigPaths: true
  },
  test: {
    clearMocks: true,
    globals: true,
    environment: 'jsdom',
    coverage: coverageSettings,
    setupFiles: ['./app/test/setup.ts']
  }
}))
