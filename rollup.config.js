import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

const plugins = [
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
];

const external = [
  'react',
  'react-dom',
  'styled-components',
  'slate',
  'slate-react',
];

const watch = { include: 'src/**' };

export default [
  {
    input: 'src/index.js',
    output: [{ file: 'lib/index.js', format: 'es' }],
    plugins,
    external,
    watch,
  },
  {
    input: 'src/plugins/index.js',
    output: [{ file: 'lib/plugins/index.js', format: 'es' }],
    plugins,
    external,
    watch,
  },
];
