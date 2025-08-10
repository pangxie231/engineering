import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  js.configs['recommended'],
  ...tseslint.configs['recommended'],
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
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
    files: ['**/*.vue', '**/*.ts'],
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