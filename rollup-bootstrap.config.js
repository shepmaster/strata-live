import * as process from 'process';

import rust from '@wasm-tool/rollup-plugin-rust';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    input: './bindings/Cargo.toml',
    plugins: [rust({ debug: !isProduction })],
};
