import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import ts from 'rollup-plugin-typescript'
import json from 'rollup-plugin-json'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'public/bundle.mjs',
      format: 'es', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
    },
    {
      file: 'public/bundle.js',
      format: 'cjs', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      mainFields: ['module', 'main'].filter(Boolean),
    }),
    commonjs({ include: /\/node_modules\// }), // converts date-fns to ES modules
    json(),
    ts(),
    production && terser(), // minify, but only in production
  ],
}
