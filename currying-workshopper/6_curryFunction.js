function makeCurrying(func) {
  let argsLength = func.length;
  const argsArray = [];

  const applyArgs = function(...args) {
    argsLength -= args.length;
    if (argsLength > 0) {
      argsArray.push(...args);
      return applyArgs;
    } else {
      return func(...argsArray, ...args);
    }
  }
  return applyArgs;
}
module.exports = makeCurrying;


