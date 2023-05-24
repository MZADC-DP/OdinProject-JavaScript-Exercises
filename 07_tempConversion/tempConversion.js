const convertToCelsius = function(temp) {
  if (temp === 32 || temp === 0) {
    let cel1 = (temp - 32) * (5/9);
    return Math.round(cel1);
  }

  let celsius = (temp - 32) * (5/9);
  return Math.round(celsius * 10) / 10; // Rounding to one decimal place
};

const convertToFahrenheit = function(temp) {
  if (temp === 32 || temp === 0) {
    let cel1 = (temp * 9/5) + 32;
    return Math.round(cel1);
  }

  let fahrenheit = (temp * 9/5) + 32;
  return Math.round(fahrenheit * 10) / 10; // Rounding to one decimal place
};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
