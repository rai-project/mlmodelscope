let pTap = fn => val => {
  const ret = () => val;
  return Promise.resolve(val)
    .then(fn)
    .then(ret, ret);
};

pTap.catch = fn => err => {
  const ret = () => Promise.reject(err);
  return Promise.resolve(err)
    .then(fn)
    .then(ret, ret);
};

export default pTap;
