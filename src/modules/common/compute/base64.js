import { compute } from "cerebral";

export default e =>
  compute(e, item => {
    return btoa(item);
  });
