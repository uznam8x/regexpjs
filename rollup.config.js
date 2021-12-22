import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "src/index.ts",
  output: {
    dir: "build",
    format: "umd",
    name: "regexpjs",
  },
  plugins: [babel({ babelHelpers: "bundled" }), typescript({ tsconfig: './tsconfig.json' }), uglify()],
};

export default config;
