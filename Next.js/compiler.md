### Next.js Compiler

The Next.js Compiler, written in Rust using SWC, allows Next.js to transform and minify your JavaScript code for production. This replaces Babel for individual files and Terser for minifying output bundles.

Compilation using the Next.js Compiler is 17x faster than Babel and enabled by default since Next.js version 12

SWC is an extensible Rust-based platform for the next generation of fast developer tools.

SWC can be used for `compilation, minification, bundling`, and more – and is designed to be extended.

Performance: We were able to achieve ~3x faster Fast Refresh and ~5x faster builds in Next.js by switching to SWC, with more room for optimization still in progress.

WebAssembly: Rust's support for WASM is essential for supporting all possible platforms and taking Next.js development everywhere.
