const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  let target = "https://www.mlmodelscope.org";
  if (process.env.REACT_APP_IS_LOCAL === true) {
    target = "http://localhost:8088";
  }

  app.use(
    proxy("/api", {
      target,
      changeOrigin: true,
      ws: true,
      secure: false,
    })
  );
};
