// package: carml.org.web
// file: proto/carml.org/inference/inference.proto

var jspb = require("google-protobuf");
var proto_carml_org_inference_inference_pb = require("../../../proto/carml.org/inference/inference_pb");
var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb");
var github_com_rai_project_dlframework_mxnet_model_pb = require("../../../github.com/rai-project/dlframework/mxnet/model_pb");
var github_com_gogo_protobuf_gogoproto_gogo_pb = require("../../../github.com/gogo/protobuf/gogoproto/gogo_pb");
var Service = {
  serviceName: "carml.org.web.Service"
};
Service.Infer = {
  methodName: "Infer",
  service: Service,
  requestStream: false,
  responseStream: true,
  requestType: proto_carml_org_inference_inference_pb.InferenceRequest,
  responseType: proto_carml_org_inference_inference_pb.InferenceResponse
};
Service.Models = {
  methodName: "Models",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: proto_carml_org_inference_inference_pb.Null,
  responseType:
    github_com_rai_project_dlframework_mxnet_model_pb.ModelInformations
};
Service.GetModelInformation = {
  methodName: "GetModelInformation",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType:
    proto_carml_org_inference_inference_pb.GetModelInformationRequest,
  responseType:
    github_com_rai_project_dlframework_mxnet_model_pb.ModelInformation
};
module.exports = {
  Service: Service
};
