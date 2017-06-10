import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import { MXNetInferenceRequest } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getInferenceResults({ state, uuid, controller, props }) {
  const modelName = state.get("models.currentModel");
  var req = new MXNetInferenceRequest();
  req.setModelName(modelName);
  grpc.invoke(MXNet.InferURL, {
    request: req,
    host: "/api/mxnet",
    onMessage: message => {
      state.set("models.model.features", message.getFeaturesList());
    },
    onEnd: (code, message, trailers) => {
      // console.log({ code, message, trailers });
    }
  });
}

export default getInferenceResults;
