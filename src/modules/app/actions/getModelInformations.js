import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import { Null } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getModelInformations({ state, uuid, controller, props }) {
  var req = new Null();
  grpc.invoke(MXNet.GetModelInformations, {
    request: req,
    host: "/api/mxnet",
    onMessage: message => {
      const infoList = message.getInfoList().map(e => e.toObject());
      state.set("models.data", infoList);
    },
    onEnd: (code, message, trailers) => {}
  });
}

export default getModelInformations;
