const add = function(...nums) {
	
  let sum = 0;

  for (let i = 0; i < nums.length; i++)
  {
    sum += nums[i];
  }
  return sum;

};

const subtract = function(first , second) {

  return first - second;

	
};

  const sum = function(nums) {

    let sum = 0;

    if(nums.length == 0)
      return sum;

    for(let i = 0; i < nums.length; i++)
    {
      sum += parseInt(nums[i]);
    }

    return sum;
    
  };

const multiply = function(nums) {

    let sum = 0; 
    
    sum = Number(nums[0]);

    for(let i = 1; i < nums.length; i++)
    {
      sum *= Number(nums[i]);
    }

    return sum;

};

const power = function(first, second) {

  let sum = 1;

  for(let i = 0; i < second; i++)
  {
    sum *= first;
  }

  return sum;

	
};

const factorial = function(number) {

  if(number == 0)
    return 1;

  let sum = number;

  for(let i = 1; i < number; i++)
  {
    sum *= (number - i); 
  }

  return sum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
