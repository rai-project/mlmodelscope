import yeast from "yeast";
import { assign, sortBy } from "lodash";

import HTTPError from "../../common/errors/http";
import { GetFrameworkManifest } from "../../../swagger/dlframework";

async function getFrameworkManifests({ http, resolve, path }) {
  return GetFrameworkManifest({
    frameworkName: "Tensorflow",
    frameworkVersion: "1.1"
  });
}
export default getFrameworkManifests;
