import { grpc } from "grpc-web-client";

import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
import { Null } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

import getModelGraph from "../../model/actions/getModelGraph";

function getModelInformations(ctx) {
  const { state, uuid } = ctx;
  const req = new Null();
  grpc.invoke(MXNet.GetModelInformations, {
    request: req,
    host: "/api/mxnet",
    onMessage: message => {
      const infoList = message
        .getInfoList()
        .map(e => Object.assign({ uuid: uuid() }, e.toObject()))
        .sort(function(a, b) {
          // sort by name;
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      state.set("models.data", infoList);
      if (infoList.length !== 0) {
        state.set("models.currentModel", infoList[0].name);
      }
      getModelGraph(ctx);
    },
    onEnd: (code, message, trailers) => {}
  });
}

export default getModelInformations;
