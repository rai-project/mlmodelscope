// package: carml.org.web
// file: proto/carml.org/inference/inference.proto

import * as proto_carml_org_inference_inference_pb from "../../../proto/carml.org/inference/inference_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as github_com_rai_project_dlframework_mxnet_model_pb from "../../../github.com/rai-project/dlframework/mxnet/model_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
export class Service {
  static serviceName = "carml.org.web.Service";
}
export namespace Service {
  export class Infer {
    static readonly methodName = "Infer";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_carml_org_inference_inference_pb.InferenceRequest;
    static readonly responseType = proto_carml_org_inference_inference_pb.InferenceResponse;
  }
  export class Models {
    static readonly methodName = "Models";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_carml_org_inference_inference_pb.Null;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_model_pb.ModelInformations;
  }
  export class GetModelInformation {
    static readonly methodName = "GetModelInformation";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_carml_org_inference_inference_pb.GetModelInformationRequest;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_model_pb.ModelInformation;
  }
  export class GetModelGraph {
    static readonly methodName = "GetModelGraph";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_carml_org_inference_inference_pb.GetModelInformationRequest;
    static readonly responseType = github_com_rai_project_dlframework_mxnet_model_pb.Graph;
  }
}
