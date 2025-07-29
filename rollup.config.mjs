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
import typescript from '@rollup/plugin-typescript'

const isDev = process.env.NODE_ENV === 'development'

/**@type {import('rollup').RollupOptions} */
export default {
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
    // typescript({
    //   include: ['*.vue', '*.ts', '*.js'],
    //   transformers(p) {
    //     return {
    //       before: [((program) => {
    //         return context => {
    //           return sourceFile => {
    //             const filename = sourceFile.fileName;
    //             const text = sourceFile.getFullText();

    //             console.log(`\n📄 [transformer] Processing file: ${filename}`);
    //             console.log('--- Source code start ---');
    //             console.log(text.slice(0, 300)); // 只打印前 300 字符
    //             console.log('--- Source code end ---');
    //             return sourceFile
    //           }
    //         }
    //       })()]
    //     }
    //   }
    // }),
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
    ...(isDev ? [serve({
      contentBase: 'dist',
      port: '8080'
    })]
      : []),
    ...(
      isDev ?
        [liverealod()] :
        []
    ),
    visualizer()
  ],
}