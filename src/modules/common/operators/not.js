import { Tag } from "cerebral/tags";

function notFactory(...args) {
  const notFunc = args.length > 1 ? args[args.length - 1] : null;
  const valueTemplates = args.length > 1 ? args.slice(0, -1) : args;
  function not({ state, path, resolve }) {
    if (valueTemplates.length > 0 && !(valueTemplates[0] instanceof Tag)) {
      throw new Error(
        `Cerebral operator.not: You have to use the STATE or PROPS TAG as values`
      );
    }
    if (!path || !path.true || !path.false) {
      throw new Error(
        "Cerebral operator.not: true/false paths need to be provided"
      );
    }
    const values = valueTemplates.map(value => resolve.value(value));
    const isTrue = Boolean(notFunc ? notFunc(...values) : values[0]);

    return isTrue ? path.false() : path.true();
  }

  not.displayName = `operator.not(${args
    .filter(arg => {
      return typeof arg !== "function";
    })
    .map(arg => {
      return String(arg);
    })
    .join(",")})`;

  return not;
}

export default notFactory;
