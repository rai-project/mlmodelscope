const {
  override,
  getBabelLoader,
  addDecoratorsLegacy,
  fixBabelImports,
  disableEsLint,
  addLessLoader,
  addWebpackAlias,
  addBabelPlugin,
  useBabelRc,
  addTslintLoader,
} = require("customize-cra");
const path = require("path");
const Color = require("color");

function resolve(...dir) {
  return path.join(__dirname, ...dir);
}

function resolveSrc(...dir) {
  return path.join(__dirname, "src", ...dir);
}

function rewireSVGR(svgrLoaderOptions) {
  return function(config) {
    const svgReactLoader = {
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve(`@svgr/webpack`),
          options: svgrLoaderOptions,
        },
        {
          loader: "url-loader",
        },
      ],
    };
    config.module.rules.unshift(svgReactLoader);
    return config;
  };
}

const primaryColor = "#19263a";

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  // useBabelRc(),
  // rewireSVGR({ icon: true }),
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
    ["@components"]: resolveSrc("components"),
    ["@context"]: resolveSrc("context"),
    ["@routes"]: resolveSrc("routes"),
    ["@resources"]: resolveSrc("resources"),
    ["@icons"]: resolveSrc("resources", "icons"),
    ["@helpers"]: resolveSrc("helpers"),
    ["@common"]: resolveSrc("common"),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      "@primary-color": primaryColor,
      "@menu-dark-color": "white",
      "@menu-dark-bg": primaryColor,
      "@menu-highlight-color": Color(primaryColor)
        .lighten(0.2)
        .hex(),
      "@item-active-bg": Color(primaryColor)
        .lighten(0.2)
        .hex(),
      "@item-hover-bg": Color(primaryColor)
        .lighten(0.2)
        .hex(),
      "@menu-dark-item-active-bg": "#E94A37",
      "@font-family": `"Lato", "IBM Plex Sans Condensed", "Helvetica Neue", Arial, sans-serif`,
      "@code-family": `"Source Code Pro", "IBM Plex Mono", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier, monospace`,
    },
  }),
  addTslintLoader()
);
