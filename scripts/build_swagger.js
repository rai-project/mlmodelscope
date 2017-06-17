var fs = require("fs");
var CodeGen = require("swagger-js-codegen").CodeGen;

var file = "../dlframework/dlframework.swagger.json";
var outputDir = "src/swagger/";
var outputFile = outputDir + "dlframework";

var swagger = JSON.parse(fs.readFileSync(file, "UTF-8"));
var reactjsSourceCode = CodeGen.getReactCode({
  className: "DLFramework",
  swagger: swagger
});
var tsSourceCode = CodeGen.getTypescriptCode({
  className: "DLFramework",
  swagger: swagger
});
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
fs.writeFileSync(outputFile + ".js", "/* eslint-disable */\n");
fs.appendFileSync(outputFile + ".js", reactjsSourceCode);
fs.appendFileSync(outputFile + ".ts", tsSourceCode);
