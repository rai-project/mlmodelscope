const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://www.mlmodelscope.org",
      changeOrigin: true,
      ws: true,
      secure: false,
    })
  );
};
