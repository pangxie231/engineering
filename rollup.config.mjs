import vuePlugin from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import html from '@rollup/plugin-html'
import replace from '@rollup/plugin-replace'

/**@type {import('rollup').RollupOptions} */
export default  {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    vuePlugin({
      preprocessStyles: true
    }),
    postcss({}),
    html(),
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      preventAssignment: true,
    })
  ],
  // external: ['vue']
}