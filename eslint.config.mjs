// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
//   pluginVue.configs["flat/essential"],
//   { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
// ]);


import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  js.configs['recommended'],
  ...tseslint.configs['recommended'],
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: globals.browser
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.d.ts'
    ]
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      // vue文件中包含ts,所以需要指定ts的解析器
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  },
  // 打包配置
  {
    files: ['rollup.config.mjs'],
    languageOptions: {
     globals: globals.node 
    }
  }

])