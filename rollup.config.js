import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/srcoll-progress.umd.js',
      format: 'umd',
      name: 'scrollProgress'
    },
    {
      file: 'dist/scroll-progress.es.js',
      format: 'es'
    },
    {
      file: 'dist/scroll-progress.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve()
  ]
}