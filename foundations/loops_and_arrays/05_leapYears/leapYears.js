const leapYears = function (year) {
  const isYearDivisibleByFourHundred = year % 400 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFour = year % 4 === 0;

  if (isYearDivisibleByFourHundred) { //400でわれるならうるう年
    return true;
  } else if (isCentury) { //100でわれるのはうるう年ではない
    return false;
  } else if (isYearDivisibleByFour) { //4でわれるならうるう年
    return true;
  } else { //残りはうるう年ではない
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
