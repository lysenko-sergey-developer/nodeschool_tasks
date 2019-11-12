function longDelayInvocation(number) {
  let acc = number;
  const add = function(nextNumber) {
    if (nextNumber === undefined) {
      return acc;
    } else {
      acc += nextNumber;
      return add;
    }
  };
  return add;
}

module.exports = longDelayInvocation;
