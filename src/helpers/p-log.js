import pTap from "./p-tap";

let pLog = loggerFn =>
  pTap(val => {
    const log = loggerFn || console.log;
    log(val);
  });

pLog.catch = loggerFn =>
  pTap.catch(err => {
    const log = loggerFn || console.log;
    log(err.stack || err);
  });

export default pLog;
