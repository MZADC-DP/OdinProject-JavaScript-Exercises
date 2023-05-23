const removeFromArray = function(baseArr , ...removeValue) {
    /*
        Code Breakdown:

        1. Creating a new array object to keep the values that have not been removed
        2. Using filter method to check if the value is part of the remove list
        3. Creating a new function with => & baseElement (just a placeholder name) and using includes to check if the remove list contains what we have
        4. ! is used to say that if what we have is not on the remove list, make it true so we can keep it, else make it false
    
        baseElement - Just a placeholder name for the variables inside of baseArr
        => !removeValue.includes(baseElement) - Refers to check if the variable inside baseArr exists with the removeValue list, 
                                                if it does it returns true but we do not want it hence the ! sign making it false
                                                if it returns false, it means it does not exists in the list, and we should keep that value
                                                hence ! makes it true. 
                                                As filter method only accepts values that are true
    
        Methods:

        1. Filter - Creates a new array that contains values that passes a specific test
        2. includes - Checks if the value exists within the list
    */
    let newArr = baseArr.filter((baseElement) => !removeValue.includes(baseElement));
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
