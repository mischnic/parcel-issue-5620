import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default [
	{
		input: "lib-src/main.js",
		output: {
			name: "howLongUntilLunch",
			file: pkg.browser,
			format: "umd",
		},
		plugins: [resolve(), commonjs()],
	},

	{
		input: "lib-src/main.js",
		output: [
			{ file: pkg.main, exports: "auto", format: "cjs" },
			{ file: pkg.module, format: "es" },
		],
		plugins: [resolve(), commonjs()],
	},
];
