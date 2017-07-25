import yeast from "yeast";
import { assign, sortBy } from "lodash";

import DLFramework from "../../../swagger/dlframework";

function getFrameworkManifests({ path }) {
  let dl = new DLFramework({
    domain: "http://localhost:3000/api"
  });
  console.log(dl.GetFrameworkManifests());
}
export default getFrameworkManifests;
