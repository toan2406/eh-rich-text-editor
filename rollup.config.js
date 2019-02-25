import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
  ],
  external: ['react', 'react-dom'],
  watch: {
    include: 'src/**',
  },
};
