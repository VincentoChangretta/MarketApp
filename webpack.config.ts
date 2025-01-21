import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import webpack from "webpack";
import { BuildEnvs, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnvs) => {
  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  
  const PATHS: BuildPaths = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
  };

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    paths: PATHS,
    mode,
    isDev,
    port: PORT,
  });
  return config;
};
