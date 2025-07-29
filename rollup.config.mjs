import vuePlugin from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import html from '@rollup/plugin-html'
import replace from '@rollup/plugin-replace'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import serve from 'rollup-plugin-serve'
import liverealod from 'rollup-plugin-livereload'
import del from 'rollup-plugin-delete'
import { visualizer } from 'rollup-plugin-visualizer'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'

const isDev = process.env.NODE_ENV === 'development'

/**@type {import('rollup').RollupOptions} */
export default {
  watch: {
    include: 'src/**'
  },
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    sourceMap: true
  },
  plugins: [
    del({
      targets: 'dist'
    }),
    nodeResolve(),
    vuePlugin({
      preprocessStyles: true,
    }),
    typescript({
      clean: true
    }),
    commonjs(),

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
    ...(
      isDev ?
        [liverealod()] :
        []
    ),
    ...(isDev ? [serve({
      // contentBase: '',
      contentBase: '',
      port: '8080'
    })]
      : []),
    visualizer()
  ],
}