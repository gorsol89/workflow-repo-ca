// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".husky/**",
      ".vscode/**",
      "playwright-report/**",
      "test-results/**",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Test globals we will use in Vitest/Playwright lessons
        describe: true,
        test: true,
        it: true,
        expect: true,
        // Node-style globals needed for Tailwind config and env usage
        require: true,
        module: true,
        process: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
