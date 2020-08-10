export * from "../target/wasm-pack/bindings/index";

type Exports = typeof import("../target/wasm-pack/bindings/index");
declare const init: () => Promise<Exports>;
export default init;
