var fs = require("fs");
var CodeGen = require("swagger-js-codegen").CodeGen;

var file = "../dlframework/dlframework.swagger.json";
var outputDir = "src/swagger/";
var outputFile = outputDir + "index";

var swagger = JSON.parse(fs.readFileSync(file, "UTF-8"));
var reactjsSourceCode = CodeGen.getReactCode({
  className: "DLFramework",
  swagger: swagger,
  isES6: true,
  beautify: true,
  lint: false,
  template: {
    class: fs.readFileSync(__dirname + "/template/react-class.mustache", "utf-8"),
    method: fs.readFileSync(__dirname + "/template/method.mustache", "utf-8"),
  },
});
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
fs.writeFileSync(outputFile + ".js", "/* eslint-disable */\n");
fs.appendFileSync(outputFile + ".js", reactjsSourceCode);
