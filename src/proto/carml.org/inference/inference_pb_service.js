// package: carml.org.docker
// file: proto/carml.org/inference/inference.proto

var jspb = require("google-protobuf");
var proto_carml_org_inference_inference_pb = require("../../../proto/carml.org/inference/inference_pb");
var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb");
var github_com_gogo_protobuf_gogoproto_gogo_pb = require("../../../github.com/gogo/protobuf/gogoproto/gogo_pb");
var InferenceService = {
  serviceName: "carml.org.docker.InferenceService"
};
InferenceService.Infer = {
  methodName: "Infer",
  service: InferenceService,
  requestStream: false,
  responseStream: true,
  requestType: proto_carml_org_inference_inference_pb.InferenceRequest,
  responseType: proto_carml_org_inference_inference_pb.InferenceResponse
};
module.exports = {
  InferenceService: InferenceService
};
