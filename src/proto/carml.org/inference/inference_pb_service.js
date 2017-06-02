// package: carml.org.docker
// file: carml.org/inference/inference.proto

var jspb = require("google-protobuf");
var carml_org_inference_inference_pb = require("../../carml.org/inference/inference_pb");
var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb");
var InferenceService = {
  serviceName: "carml.org.docker.InferenceService"
};
InferenceService.Infer = {
  methodName: "Infer",
  service: InferenceService,
  requestStream: false,
  responseStream: true,
  requestType: carml_org_inference_inference_pb.InferenceRequest,
  responseType: carml_org_inference_inference_pb.InferenceResponse
};
module.exports = {
  InferenceService: InferenceService
};
