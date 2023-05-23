const reverseString = function(str) {

    let words = "";

    for(let i = 0; i < str.length; i++)
        words += str[str.length - i - 1];

    return words;

};

// Do not edit below this line
module.exports = reverseString;
