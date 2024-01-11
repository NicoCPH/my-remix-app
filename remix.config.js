/** @type {import('@remix-run/dev').AppConfig} */
exports.routes = async (defineRoutes) => {
  // If you need to do async work, do it before calling `defineRoutes`, we use
  // the call stack of `route` inside to set nesting.

  return defineRoutes((route) => {
    route("/", "routes/_index.tsx", { index: true });
    route("about", "routes/about.tsx");
  });
};

export default {
  ignoredRouteFiles: ["**/.*"],
    
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
