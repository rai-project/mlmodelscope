// package: carml.org.docker
// file: carml.org/inference/inference.proto

import * as carml_org_inference_inference_pb from "../../carml.org/inference/inference_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
export class InferenceService {
  static serviceName = "carml.org.docker.InferenceService";
}
export namespace InferenceService {
  export class Infer {
    static readonly methodName = "Infer";
    static readonly service = InferenceService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = carml_org_inference_inference_pb.InferenceRequest;
    static readonly responseType = carml_org_inference_inference_pb.InferenceResponse;
  }
}
