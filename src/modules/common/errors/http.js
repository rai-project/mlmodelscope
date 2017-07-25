import ES6Error from "es6-error";

class HTTPError extends ES6Error {
  constructor({ message, code, stack, name }) {
    super(message);

    this.name = name;
    this.code = code;
    this.stack = stack;
    this.message = message;
  }
  // By adding a custom "toJSON" method you decide
  // how the error will be shown when passed to the
  // debugger and your catch handler
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      stack: this.stack
    };
  }
}

export default HTTPError;
