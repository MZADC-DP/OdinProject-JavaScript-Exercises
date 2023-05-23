const sumAll = function(start , end) {
    let sum = 0;  
    const left = Number.isInteger(start);
    const right = Number.isInteger(end);
    
    if ( left && right && start > 0 && end > 0)
    {
        if (start > end)
        {
            for (let i = start; i >= end; i--)
            {
                sum += i;
            }
            
            return sum;

        }

        for (let i = start; i <= end; i++)
        {
            sum += i;
        }
        
        return sum;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
