import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import { MXNetModelInformationRequest } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getModelInformations({ state, uuid, controller, props }) {
  var req = new MXNetModelInformationRequest();
  req.setModelName("caffenet");
  grpc.invoke(MXNet.GetModelGraph, {
    request: req,
    host: "/api/mxnet",
    onMessage: message => {
      console.log({ onMessage: message });
    },
    onEnd: (code, message, trailers) => {
      console.log("onEnd", { code, message, trailers });
    }
  });
}

export default getModelInformations;
