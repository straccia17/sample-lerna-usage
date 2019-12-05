import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/utils2.js',
        format: 'esm'
    },
    plugins: [
        resolve()
    ]
}