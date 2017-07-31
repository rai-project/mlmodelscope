import { Tag } from "cerebral/tags";

function andFactory(...args) {
  function and({ state, path, resolve }) {
    if (args.length > 0 && !(args[0] instanceof Tag)) {
      throw new Error(
        `Cerebral operator.and: You have to use the STATE or PROPS TAG as values.`
      );
    }
    if (!path || !path.true || !path.false) {
      throw new Error(
        "Cerebral operator.and: true/false paths need to be provided"
      );
    }
    const values = args.map(value => resolve.value(value));

    const isTrue = Boolean(values.every(e => Boolean(e === true)));
    return isTrue ? path.true() : path.false();
  }
  and.displayName = "operator.and";

  return and;
}

export default andFactory;
