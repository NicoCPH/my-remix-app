import path from "node:path";
/** @type {import('@remix-run/dev').AppConfig} */

export default {
  ignoredRouteFiles: ["**/.*"],
  routes(defineRoutes) {
    return defineRoutes((route) => {
    route("/test", path.join("extra-routes/test", "test.tsx"));
    });
    },
};
