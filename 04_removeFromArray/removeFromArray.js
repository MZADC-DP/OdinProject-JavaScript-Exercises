const removeFromArray = function(baseArr , ...removeValue) {
    /*
        Code Breakdown:

        1. Creating a new array object to keep the values that have not been removed
        2. Using filter method to check if the value is part of the remove list
        3. Creating a new function with => & baseElement (just a placeholder name) and using includes to check if the remove list contains what we have
        4. ! is used to say that if what we have is not on the remove list, make it true so we can keep it, else make it false
    
    
        Methods:

        1. Filter - Creates a new array that contains values that passes a specific test
        2. includes - Checks if the value exists within the list
    */
    let newArr = baseArr.filter((baseElement) => !removeValue.includes(baseElement));
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
