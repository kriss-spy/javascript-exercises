const sumAll = function () {
  if (arguments.length != 2) {
    return "ERROR";
  }
  let m = arguments[0];
  let n = arguments[1];
  function positiveInt(num) {
    return typeof num === "number" && Math.floor(num) == num && num > 0;
  }
  if (positiveInt(m) && positiveInt(n)) {
    return ((m + n) * (Math.abs(m - n) + 1)) / 2;
  } else {
    // console.error("ERROR");
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
