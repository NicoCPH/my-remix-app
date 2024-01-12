import path from "node:path";
/** @type {import('@remix-run/dev').AppConfig} */

export default {
  ignoredRouteFiles: ["**/.*"],
  routes(defineRoutes) {
    return defineRoutes((route) => {
    route("/about", path.join("extra-routes", "test.tsx"));
    });
    },
    // serverModuleFormat: "cjs",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
