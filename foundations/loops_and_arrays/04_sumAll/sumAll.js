const sumAll = function (min, max) {
  if (typeof min !== "number" || typeof max !== "number") return "ERROR"; //数字か
  if (min <= 0 || max <= 0) return "ERROR"; //正の数か
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; //整数か
  if (min > max) {
    //minのほうが大きい場合は値を入れ替える
    [min, max] = [max, min];
    //分割代入
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
