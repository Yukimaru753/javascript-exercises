const sumAll = function (min, max) {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    min < 0 ||
    max < 0 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max)
  ) {
    return "ERROR";
  } else if (min > max) {
    let passNum = max;
    max = min;
    min = passNum;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
