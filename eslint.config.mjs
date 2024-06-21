import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parserTs from '@typescript-eslint/parser';


export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      'eol-last': ['error', 'always']
    }
  },
  { files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node, parser: parserTs } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
