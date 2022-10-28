// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]







function arrayDiff(a, b) {
    // checks if elements in array b exsists in array a. if it does't, it will result -1. 
    // giving condition that if it results -1, return the value. 
    const result = a.filter((x)=> b.indexOf(x) < 0)
    return result;
    
    }