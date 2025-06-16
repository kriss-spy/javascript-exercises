const leapYears = function () {
  if (arguments.length != 1) {
    return "ERROR";
  }
  let year = arguments[0];
  if (!(typeof year === "number" && Math.floor(year) == year && year > 0)) {
    return "ERROR";
  }
  if (year % 400 == 0) {
    return true;
  }
  if (year % 100 == 0) {
    return false;
  }
  return year % 4 == 0;
};

// Do not edit below this line
module.exports = leapYears;
