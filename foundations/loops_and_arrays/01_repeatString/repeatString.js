const repeatString = function (string, num) {
  let repeat = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeat += string;
    }
  } else if (num < 0) {
    repeat = "ERROR";
  }

  return repeat;
};

// Do not edit below this line
module.exports = repeatString;
