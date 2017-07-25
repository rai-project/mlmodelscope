import { grpc } from "grpc-web-client";
import yeast from "yeast";
import { assign, sortBy } from "lodash";

// import { MXNet } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb_service";
// import { Null } from "../../../proto/github.com/rai-project/dlframework/mxnet/mxnet_pb";

function getModelInformations({ path }) {
  // const req = new Null();
  // return new Promise(resolve => {
  //   return grpc.invoke(MXNet.GetModelInformations, {
  //     request: req,
  //     host: "/api/mxnet",
  //     onMessage: message => {
  //       const infoList = sortBy(
  //         message
  //           .getInfoList()
  //           .map(e => assign({ uuid: yeast() }, e.toObject())),
  //         ["name"]
  //       );
  //       return resolve(
  //         path.onMessage({
  //           models: infoList
  //         })
  //       );
  //     },
  //     onEnd: (code, message, trailers) => {
  //       return resolve(path.onEnd({ code, message }));
  //     }
  //   });
  // });
}

export default getModelInformations;
