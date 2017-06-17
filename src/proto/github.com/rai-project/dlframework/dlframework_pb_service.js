/* eslint-disable */
// package: carml.org.dlframework
// file: github.com/rai-project/dlframework/dlframework.proto

var jspb = require("google-protobuf");
var github_com_rai_project_dlframework_dlframework_pb = require("../../../github.com/rai-project/dlframework/dlframework_pb");
var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb");
var google_api_annotations_pb = require("../../../google/api/annotations_pb");
var github_com_gogo_protobuf_gogoproto_gogo_pb = require("../../../github.com/gogo/protobuf/gogoproto/gogo_pb");
var registry = {
  serviceName: "carml.org.dlframework.registry"
};
registry.GetFrameworkManifests = {
  methodName: "GetFrameworkManifests",
  service: registry,
  requestStream: false,
  responseStream: false,
  requestType: github_com_rai_project_dlframework_dlframework_pb.Null,
  responseType:
    github_com_rai_project_dlframework_dlframework_pb.GetFrameworkManifestsResponse
};
registry.GetFrameworkManifest = {
  methodName: "GetFrameworkManifest",
  service: registry,
  requestStream: false,
  responseStream: false,
  requestType:
    github_com_rai_project_dlframework_dlframework_pb.GetFrameworkManifestRequest,
  responseType:
    github_com_rai_project_dlframework_dlframework_pb.FrameworkManifest
};
registry.GetFrameworkModels = {
  methodName: "GetFrameworkModels",
  service: registry,
  requestStream: false,
  responseStream: false,
  requestType:
    github_com_rai_project_dlframework_dlframework_pb.GetFrameworkManifestRequest,
  responseType:
    github_com_rai_project_dlframework_dlframework_pb.GetModelManifestsResponse
};
registry.GetModelManifests = {
  methodName: "GetModelManifests",
  service: registry,
  requestStream: false,
  responseStream: false,
  requestType: github_com_rai_project_dlframework_dlframework_pb.Null,
  responseType:
    github_com_rai_project_dlframework_dlframework_pb.GetModelManifestsResponse
};
registry.GetFrameworkModelManifest = {
  methodName: "GetFrameworkModelManifest",
  service: registry,
  requestStream: false,
  responseStream: false,
  requestType:
    github_com_rai_project_dlframework_dlframework_pb.GetFrameworkModelManifestRequest,
  responseType: github_com_rai_project_dlframework_dlframework_pb.ModelManifest
};
registry.GetModelManifest = {
  methodName: "GetModelManifest",
  service: registry,
  requestStream: false,
  responseStream: false,
  requestType:
    github_com_rai_project_dlframework_dlframework_pb.GetModelManifestRequest,
  responseType: github_com_rai_project_dlframework_dlframework_pb.ModelManifest
};
var predictor = {
  serviceName: "carml.org.dlframework.predictor"
};
predictor.Predict = {
  methodName: "Predict",
  service: predictor,
  requestStream: false,
  responseStream: false,
  requestType: github_com_rai_project_dlframework_dlframework_pb.PredictRequest,
  responseType:
    github_com_rai_project_dlframework_dlframework_pb.PredictResponse
};
module.exports = {
  registry: registry,
  predictor: predictor
};
