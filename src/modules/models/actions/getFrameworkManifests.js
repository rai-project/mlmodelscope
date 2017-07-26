import yeast from "yeast";
import { assign, sortBy } from "lodash";

import HTTPError from "../../common/errors/http";
import DLFramework from "../../../swagger/dlframework";

async function getFrameworkManifests({ http, resolve, path }) {
  let dl = new DLFramework({
    http,
    path,
    resolve
  });
  dl.GetFrameworkManifest({
    frameworkName: "Tensorflow",
    frameworkVersion: "1.1"
  });
}
export default getFrameworkManifests;
