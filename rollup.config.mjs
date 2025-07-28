import vuePlugin from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import html from '@rollup/plugin-html'
import replace from '@rollup/plugin-replace'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import serve from 'rollup-plugin-serve'
import liverealod from 'rollup-plugin-livereload'

const isDev = process.env.NODE_ENV === 'development'

/**@type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    vuePlugin({
      preprocessStyles: true
    }),
    postcss({}),
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      preventAssignment: true,
    }),
    htmlTemplate({
      template: 'index.html',
    }),
    ...(isDev ? [serve({
      contentBase: 'dist',
      port: '8080'
    })]
      : []),
    ...(
      isDev ?
        [liverealod()] :
        []
    )
  ],
}