import * as path from 'path';
import * as process from 'process';

import alias from '@rollup/plugin-alias';
import commonJs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import inject from '@rollup/plugin-inject';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import rust from '@wasm-tool/rollup-plugin-rust';
import typescript from 'rollup-plugin-typescript2';

const isProduction = process.env.NODE_ENV === 'production';
const env = isProduction ? 'production' : 'development';
const processPath = path.resolve(`./src/process.${env}.js`);

const config = {
    input: 'src/index.tsx',
    output: {
        file: 'dist/strata.js',
        format: 'iife',
    },
    plugins: [
        resolve(),
        commonJs({
            include: ['node_modules/**'],
        }),
        inject({
            process: processPath,
            include: ['node_modules/**'],
        }),
        alias({
            entries: [
                { find: 'bindings', replacement: './bindings/Cargo.toml' },
            ],
        }),
        postcss(),
        rust({
            debug: !isProduction,
        }),
        typescript(),
        html({
            title: 'Strata',
        }),
    ],
};

export default config;
