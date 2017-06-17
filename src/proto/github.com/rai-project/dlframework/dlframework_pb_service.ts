// package: carml.org.dlframework
// file: github.com/rai-project/dlframework/dlframework.proto

import * as github_com_rai_project_dlframework_dlframework_pb from "../../../github.com/rai-project/dlframework/dlframework_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../../github.com/gogo/protobuf/gogoproto/gogo_pb";
export class registry {
  static serviceName = "carml.org.dlframework.registry";
}
export namespace registry {
  export class GetFrameworkManifests {
    static readonly methodName = "GetFrameworkManifests";
    static readonly service = registry;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.Null;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.GetFrameworkManifestsResponse;
  }
  export class GetFrameworkManifest {
    static readonly methodName = "GetFrameworkManifest";
    static readonly service = registry;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.GetFrameworkManifestRequest;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.FrameworkManifest;
  }
  export class GetFrameworkModels {
    static readonly methodName = "GetFrameworkModels";
    static readonly service = registry;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.GetFrameworkManifestRequest;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.GetModelManifestsResponse;
  }
  export class GetModelManifests {
    static readonly methodName = "GetModelManifests";
    static readonly service = registry;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.Null;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.GetModelManifestsResponse;
  }
  export class GetFrameworkModelManifest {
    static readonly methodName = "GetFrameworkModelManifest";
    static readonly service = registry;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.GetFrameworkModelManifestRequest;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.ModelManifest;
  }
  export class GetModelManifest {
    static readonly methodName = "GetModelManifest";
    static readonly service = registry;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.GetModelManifestRequest;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.ModelManifest;
  }
}
export class predictor {
  static serviceName = "carml.org.dlframework.predictor";
}
export namespace predictor {
  export class Predict {
    static readonly methodName = "Predict";
    static readonly service = predictor;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = github_com_rai_project_dlframework_dlframework_pb.PredictRequest;
    static readonly responseType = github_com_rai_project_dlframework_dlframework_pb.PredictResponse;
  }
}
