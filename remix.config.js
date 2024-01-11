/** @type {import('@remix-run/dev').AppConfig} */
import path from "node:path";

export default {
  ignoredRouteFiles: ["**/.*"],
  routes(defineRoutes) {
    return defineRoutes((route) => {
    route("/", path.join("routes", "_index.tsx"), { index: true });
    route("/about", path.join("routes", "about.tsx"));
    });
    },
    // serverModuleFormat: "cjs",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
