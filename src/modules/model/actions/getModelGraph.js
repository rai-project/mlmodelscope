import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import { MXNetModelInformationRequest } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getModelGraph({ state, uuid, controller, props }) {
  console.log("state = ", state);
  const modelName = state.get("models.currentModel");
  var req = new MXNetModelInformationRequest();
  req.setModelName(modelName);
  console.log("modelName = ", req);
  grpc.invoke(MXNet.GetModelGraph, {
    request: req,
    host: "/api/mxnet",
    onMessage: message => {
      state.set("models.model.graph", message.toObject());
    },
    onEnd: (code, message, trailers) => {
      console.log({ code, message, trailers });
    }
  });
}

export default getModelGraph;
