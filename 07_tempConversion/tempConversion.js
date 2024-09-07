const convertToCelsius = function(degreesFahrenheit) {
  let degreesC = (degreesFahrenheit - 32) * 5/9;
  degreesC = Math.round(degreesC * 10) / 10
  return degreesC;
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesF = degreesCelsius * (9/5) + 32;
  degreesF = Math.round(degreesF * 10) / 10
  return degreesF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
