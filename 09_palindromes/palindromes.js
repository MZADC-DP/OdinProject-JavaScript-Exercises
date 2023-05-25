const palindromes = function (str) {
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //Removes all special characters and numbers from the string
    const reversedStr = alphanumericStr.split('').reverse().join('');    // Creates a reverse string of the original string
  
    return alphanumericStr === reversedStr;                              // Checks if they are equal
};

// Do not edit below this line
module.exports = palindromes;
