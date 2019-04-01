const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  disableEsLint,
  addLessLoader,
  addWebpackAlias,
  useBabelRc,
  addTslintLoader,
} = require("customize-cra");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  // useBabelRc(),
  fixBabelImports("antd", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  fixBabelImports("antd-mobile", { libraryName: "antd-mobile", libraryDirectory: "lib" }),
  fixBabelImports("lodash", {
    libraryName: "lodash",
    libraryDirectory: "",
    camel2DashComponentName: false, // default: true
  }),
  addWebpackAlias({
    ["@"]: resolve("src"),
    ["@components"]: resolve("components"),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      "@primary-color": "#19263a",
      "@menu-dark-color": "white",
      "@menu-dark-bg": "#19263a",
      "@menu-dark-item-active-bg": "#E94A37",
      "@font-family": `"IBM Plex Sans Condensed", "Helvetica Neue", Arial, sans-serif`,
      "@code-family": `"IBM Plex Mono", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier, monospace`,
    },
  }),
  addTslintLoader()
);
