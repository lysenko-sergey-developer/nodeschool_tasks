function delay_invocation(x) {
  return function(y) {
    return x + y;
  };
}

module.exports = delay_invocation;
