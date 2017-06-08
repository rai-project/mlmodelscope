/* eslint-disable */
// package: carml.org.mxnet
// file: github.com/rai-project/dlframework/mxnet/mxnet.proto

var jspb = require("google-protobuf");
var github_com_rai_project_dlframework_mxnet_mxnet_pb = require("../../../../github.com/rai-project/dlframework/mxnet/mxnet_pb");
var github_com_gogo_protobuf_gogoproto_gogo_pb = require("../../../../github.com/gogo/protobuf/gogoproto/gogo_pb");
var MXNet = {
  serviceName: "carml.org.mxnet.MXNet"
};
MXNet.InferURL = {
  methodName: "InferURL",
  service: MXNet,
  requestStream: false,
  responseStream: true,
  requestType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceRequest,
  responseType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceResponse
};
MXNet.InferBytes = {
  methodName: "InferBytes",
  service: MXNet,
  requestStream: false,
  responseStream: true,
  requestType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceRequest,
  responseType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceResponse
};
MXNet.GetModelInformations = {
  methodName: "GetModelInformations",
  service: MXNet,
  requestStream: false,
  responseStream: false,
  requestType: github_com_rai_project_dlframework_mxnet_mxnet_pb.Null,
  responseType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.ModelInformations
};
MXNet.GetModelInformation = {
  methodName: "GetModelInformation",
  service: MXNet,
  requestStream: false,
  responseStream: false,
  requestType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetModelInformationRequest,
  responseType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.Model.Information
};
MXNet.GetModelGraph = {
  methodName: "GetModelGraph",
  service: MXNet,
  requestStream: false,
  responseStream: false,
  requestType:
    github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetModelInformationRequest,
  responseType: github_com_rai_project_dlframework_mxnet_mxnet_pb.Model.Graph
};
module.exports = {
  MXNet: MXNet
};
