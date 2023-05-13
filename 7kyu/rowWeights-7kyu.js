// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.






function rowWeights(array){
    // input - array of numbers
    // output - an array of two numbers. total weight of odd indices and total weight of evenindices 
    // example - rowWeights([50,60,70,80]), [120,140]);
    // psuedo code
    // declare variable oddIndex = 0 ; evenIndex = 0 ; 
    // go through each element, check if the index is odd or even 
    // if it's odd, add it to the oddIndex 
    // if it's even, add it to the evenIndex 
    // return those two numbers in an array
    let oddIndices = 0 ,  evenIndices = 0 ;
      array.forEach((elm, index) => {
       index%2 ?(oddIndices += array[index]): evenIndices += array[index];
    })
      
    return [ evenIndices, oddIndices ]
  
  }