import js from "@eslint/js";
import globals from "globals";

export default [
  // server.js — Node.js CommonJS environment
  {
    files: ["server.js", "seed-data.js", "lib/**/*.js", "scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Downgrade style/preference rules to off — errors only
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      // These are the genuine bug-catchers we care about:
      "no-undef": "error",
      "no-unreachable": "error",
      "no-dupe-keys": "error",
      "no-dupe-args": "error",
      "no-duplicate-case": "error",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-self-assign": "error",
      "no-self-compare": "error",
      "use-isnan": "error",
      "no-loss-of-precision": "error",
      // False positive: initial placeholder value in try/catch pattern is intentional
      "no-useless-assignment": "off",
      // Best practice (error cause chain), not a bug — skip for now
      "preserve-caught-error": "off",
    },
  },
  // app.js — browser environment, no module system (inline script)
  {
    files: ["app.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        // Globals injected by server into the HTML page
        MERCATUS_SEED: "readonly",
        MERCATUS_DERIVED: "readonly",
        MERCATUS_BUILD: "readonly",
        MERCATUS_STATE: "readonly",
        MERCATUS_CONFIG: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-unreachable": "error",
      "no-dupe-keys": "error",
      "no-dupe-args": "error",
      "no-duplicate-case": "error",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-self-assign": "error",
      "no-self-compare": "error",
      "use-isnan": "error",
      "no-loss-of-precision": "error",
      "no-useless-assignment": "off",
      "preserve-caught-error": "off",
    },
  },
];
