const convertToCelsius = function (fahrenheit) { //華氏から摂氏
  return Math.round((5 / 9) * (fahrenheit - 32) * 10) / 10; //小数第一位で四捨五入
};

const convertToFahrenheit = function (celsius) { //摂氏から華氏
  return Math.round(((9 / 5) * celsius + 32) * 10) / 10; //小数第一位で四捨五入
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
