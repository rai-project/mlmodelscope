export default (promise, onFinally) => {
  onFinally = onFinally || (() => {});

  return promise.then(
    val => Promise.resolve(onFinally()).then(() => val),
    err =>
      Promise.resolve(onFinally()).then(() => {
        throw err;
      })
  );
};
