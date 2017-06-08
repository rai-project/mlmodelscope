import proto from "google-protobuf";
import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import {
  ModelInformations,
  Null
} from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getModelInformations({ state, uuid, controller, props }) {
  const req = new Null();
  grpc.invoke(MXNet.GetModelInformations, {
    request: req,
    host: "/api/mxnet",
    onMessage: message => {
      console.log({ onMessage: message });
    },
    onEnd: (code, message, trailers) => {
      console.log({ onEnd: message });
    }
  });
}

export default getModelInformations;
