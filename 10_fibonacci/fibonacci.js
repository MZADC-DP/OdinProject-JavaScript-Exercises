const fibonacci = function(num) {

    let base = 0;
    let arr = [1, 1];

    if(num < 0 )
        return 'OOPS';

    for (let i = 0; i < num; i++)
    {
        arr[i + 2] = arr[i] + arr[i + 1];
    }

    return arr[num - 1];



};

// Do not edit below this line
module.exports = fibonacci;
