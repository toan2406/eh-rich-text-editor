import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.js', format: 'cjs' },
    { file: 'lib/index.es.js', format: 'es' },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: { esrever: ['reverse'] },
    }),
    globals(),
    builtins(),
  ],
  external: ['react', 'react-dom', 'styled-components'],
  watch: {
    include: 'src/**',
  },
};
