import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dest/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    resolve(),
    uglify(),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['react']
}
