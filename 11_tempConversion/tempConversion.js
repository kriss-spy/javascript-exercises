// Fahrenheit -459.67~infinity
const convertToCelsius = function () {
  if (arguments.length != 1) {
    return "ERROR";
  }
  let f = arguments[0];
  if (typeof f !== "number" || f < -459.67) {
    return "ERROR";
  }
  let c = (f - 32) / 1.8;
  return Math.floor(c) == c ? c : Number(c.toFixed(1));
};
// Celsius -273.15~infinity
const convertToFahrenheit = function () {
  if (arguments.length != 1) {
    return "ERROR";
  }
  let c = arguments[0];
  if (typeof c !== "number" || c < -273.15) {
    return "ERROR";
  }
  let f = 1.8 * c + 32;
  return Math.floor(f) == f ? f : Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
