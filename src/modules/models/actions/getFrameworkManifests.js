import yeast from "yeast";
import { assign, sortBy } from "lodash";

import HTTPError from "../../common/errors/http";
import DLFramework from "../../../swagger/dlframework";

async function getFrameworkManifests({ path }) {
  let dl = new DLFramework({
    domain: "http://localhost:3000/api"
  });
  // throw new HTTPError({
  //   message: "Test",
  //   code: 200,
  //   stack: [],
  //   name: "test2",
  // });
  dl
    .GetFrameworkManifest({
      frameworkName: "Tensorflow"
    })
    .then(response => {
      console.log("response = ", response);
    })
    .catch(err => {
      console.log("error = ", err);
      const r = err.body.json();
      console.log(r);
      const reader = err.body.getReader();
      reader.read().then(({ value, done }) => {
        if (done) {
          reader.close();
        }
        console.log(value);
      });
      // console.log(reader);
      // const { message, code, stack, name } = err;
      // console.log({ message, code, stack, name });
      throw new HTTPError(err);
    });
}
export default getFrameworkManifests;
