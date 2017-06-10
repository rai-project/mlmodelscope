import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import { MXNetModelInformationRequest } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getModelGraph({ state, uuid, controller, props: { name }, path }) {
  var req = new MXNetModelInformationRequest();
  req.setModelName(name);
  return new Promise(resolve => {
    grpc.invoke(MXNet.GetModelGraph, {
      request: req,
      host: "/api/mxnet",
      onMessage: message => {
        console.log(message.toObject());
        return resolve(
          path.onMessage({
            model: message.toObject()
          })
        );
      },
      onEnd: (code, message, trailers) => {
        return resolve(path.onEnd({ code, message }));
      }
    });
  });
}

export default getModelGraph;
