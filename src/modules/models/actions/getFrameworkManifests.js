import yeast from "yeast";
import { assign, sortBy } from "lodash";
import Q from "q";

import DLFramework from "../../../swagger/dlframework";

function getFrameworkManifests({ path }) {
  let dl = new DLFramework({
    domain: "http://localhost:3000/api"
  });
  let promise = dl.GetFrameworkManifest({
    frameworkName: "Tensorflow"
  });
  Q.fcall(promise).then(console.log);
}
export default getFrameworkManifests;
