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
        // Test globals used in Vitest/Playwright lessons
        describe: true,
        test: true,
        it: true,
        expect: true,
        beforeEach: true, 
        afterEach: true,    
        vi: true,           
        require: true,
        module: true,
        process: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
