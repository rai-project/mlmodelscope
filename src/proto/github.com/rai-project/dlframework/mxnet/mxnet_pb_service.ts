// package: carml.org.mxnet
// file: github.com/rai-project/dlframework/mxnet/mxnet.proto

import * as github_com_rai_project_dlframework_mxnet_mxnet_pb from "../../../../github.com/rai-project/dlframework/mxnet/mxnet_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
export class MXNet {
  static serviceName = "carml.org.mxnet.MXNet";
}
export namespace MXNet {
  export class InferURL {
    static readonly methodName = "InferURL";
    static readonly service = MXNet;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceRequest;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceResponse;
  }
  export class InferBytes {
    static readonly methodName = "InferBytes";
    static readonly service = MXNet;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceRequest;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetInferenceResponse;
  }
  export class GetModelInformations {
    static readonly methodName = "GetModelInformations";
    static readonly service = MXNet;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_mxnet_mxnet_pb.Null;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_mxnet_pb.ModelInformations;
  }
  export class GetModelInformation {
    static readonly methodName = "GetModelInformation";
    static readonly service = MXNet;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetModelInformationRequest;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_mxnet_pb.Model.Information;
  }
  export class GetModelGraph {
    static readonly methodName = "GetModelGraph";
    static readonly service = MXNet;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_mxnet_mxnet_pb.MXNetModelInformationRequest;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_mxnet_pb.Model.Graph;
  }
}
