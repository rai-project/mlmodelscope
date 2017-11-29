/*
 * Minio Browser (C) 2016 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var moment = require("moment");
var async = require("async");
var exec = require("child_process").exec;
var fs = require("fs");
var rimraf = require("rimraf");

var isProduction = true;
var assetsFileName = "";
var commitId = "";
var date = moment.utc();
var version = date.format("YYYY-MM-DDTHH:mm:ss") + "Z";
var releaseTag = date.format("YYYY-MM-DDTHH-mm-ss") + "Z";
var buildType = "production";
var assetsFileName = "pkg/web/bindata_assetfs.go";
if (process.env.IO_UI_BUILD) buildType = process.env.IO_UI_BUILD;

async.waterfall(
  [
    function(cb) {
      var cmd = 'git log --format="%H" -n1';
      console.log("Running", cmd);
      exec(cmd, cb);
    },
    function(stdout, stderr, cb) {
      if (!stdout) throw new Error("commitId is empty");
      commitId = stdout.replace("\n", "");
      if (commitId.length !== 40) throw new Error("commitId invalid : " + commitId);
      var cmd =
        'go-bindata-assetfs -pkg web -nomemcopy -ignore="^.*\\.go|\\.DS_Store" -o ' +
        assetsFileName +
        " build/...";
      console.log(cmd);
      console.log("Running", cmd);
      exec(cmd, cb);
    },
    function(stdout, stderr, cb) {
      var cmd = "gofmt -s -w -l " + assetsFileName;
      console.log("Running", cmd);
      exec(cmd, cb);
    },
    function(stdout, stderr, cb) {
      fs.appendFileSync(assetsFileName, "\n");
      fs.appendFileSync(assetsFileName, 'var UIReleaseTag = "' + releaseTag + '"\n');
      fs.appendFileSync(assetsFileName, 'var UIBuildType = "' + buildType + '"\n');
      fs.appendFileSync(assetsFileName, 'var UICommitID = "' + commitId + '"\n');
      fs.appendFileSync(assetsFileName, 'var UIVersion = "' + version + '"');
      fs.appendFileSync(assetsFileName, "\n");
      var contents = fs.readFileSync(assetsFileName, "utf8");
      contents = contents
        .replace(/CarML/g, "MLModelScope")
        .replace(/carml/g, "MLModelScope");
      // if (isProduction) {
      // 	contents = contents
      // 		.replace(/_productionIndexHtml/g, '_productionIndexHTML')
      // 		.replace(/productionIndexHtmlBytes/g, 'productionIndexHTMLBytes')
      // 		.replace(/productionIndexHtml/g, 'productionIndexHTML')
      // 		.replace(/_productionIndex_bundleJs/g, '_productionIndexBundleJs')
      // 		.replace(/productionIndex_bundleJsBytes/g, 'productionIndexBundleJsBytes')
      // 		.replace(/productionIndex_bundleJs/g, 'productionIndexBundleJs')
      // 		.replace(/_productionJqueryUiMinJs/g, '_productionJqueryUIMinJs')
      // 		.replace(/productionJqueryUiMinJsBytes/g, 'productionJqueryUIMinJsBytes')
      // 		.replace(/productionJqueryUiMinJs/g, 'productionJqueryUIMinJs');
      // } else {
      // 	contents = contents
      // 		.readFileSync(assetsFileName, 'utf8')
      // 		.replace(/_assetsIndexHtml/g, '_assetsIndexHTML')
      // 		.replace(/assetsIndexHtmlBytes/g, 'assetsIndexHTMLBytes')
      // 		.replace(/assetsIndexHtml/g, 'assetsIndexHTML')
      // 		.replace(/_assetsIndex_bundleJs/g, '_assetsIndexBundleJs')
      // 		.replace(/assetsIndex_bundleJsBytes/g, 'assetsIndexBundleJsBytes')
      // 		.replace(/assetsIndex_bundleJs/g, 'assetsIndexBundleJs')
      // 		.replace(/_assetsJqueryUiMinJs/g, '_assetsJqueryUIMinJs')
      // 		.replace(/assetsJqueryUiMinJsBytes/g, 'assetsJqueryUIMinJsBytes')
      // 		.replace(/assetsJqueryUiMinJs/g, 'assetsJqueryUIMinJs');
      // }
      contents = contents.replace(/UI_VERSION/g, version);
      contents = contents.replace(/main_bundle.js/g, "main_bundle.js");

      fs.writeFileSync(assetsFileName, contents, "utf8");
      console.log("UI assets file :", assetsFileName);
      cb();
    },
  ],
  function(err) {
    if (err) return console.log(err);
  }
);
