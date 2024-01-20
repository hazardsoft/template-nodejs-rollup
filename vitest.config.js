import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: "tests/**.test.ts",
    environment: "node",
    globals: false,
    setupFiles: "./tests/setup.ts",
    threads: false,
    watch: false,
    silent: false,
    clearMocks: true,
    fileParallelism: false,
  },
});
