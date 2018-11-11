const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");
const rewireIdx = require("react-app-rewire-idx");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
    config
  );
  config = injectBabelPlugin(
    ["import", { libraryName: "antd-mobile", libraryDirectory: "lib" }, "antd-mobile"],
    config
  );
  config = injectBabelPlugin(
    [
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false, // default: true
      },
      "lodash",
    ],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      // "@primary-color": "#1a263a",
      "@font-family": `"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif`,
      "@code-family": `"IBM Plex Mono", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier, monospace`,
    },
    javascriptEnabled: true,
  })(config, env);

  config = rewireIdx(config, env);
  return config;
};
