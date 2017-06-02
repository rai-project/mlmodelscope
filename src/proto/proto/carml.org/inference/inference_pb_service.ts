// package: carml.org.docker
// file: proto/carml.org/inference/inference.proto

import * as proto_carml_org_inference_inference_pb from "../../../proto/carml.org/inference/inference_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogo_protobuf_gogoproto_gogo_pb from "../../../gogo/protobuf/gogoproto/gogo_pb";
export class InferenceService {
  static serviceName = "carml.org.docker.InferenceService";
}
export namespace InferenceService {
  export class Infer {
    static readonly methodName = "Infer";
    static readonly service = InferenceService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_carml_org_inference_inference_pb.InferenceRequest;
    static readonly responseType = proto_carml_org_inference_inference_pb.InferenceResponse;
  }
}
