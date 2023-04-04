
// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.





function consecutive(arr) {
    // array with numbers 
    // not always ascending order, all numbers
    // array can be empty
    
    //1. sort the array in an ascending order 
    //2. find the difference between the elements 
    //3. set a counter variable
    //4. if it's more than 1, add the difference -1 to the counter variable 
    
    // [4,5,6,7,8]
    // example [ 4,8,6] -> [ 4,6,8] -> 6-4 = 2 -> 2-1=1 counter += 1 -> ,  8-6=2 -> 2-1=1 -> counter +=1 
    // return counter 
  
    if(arr.length === 0 ) return 0
    else{
      let sortedArr = arr.sort((x,y) => x-y), counter =0;
     sortedArr.forEach((elm, i) =>{ 
       let difference = sortedArr[i+1] - sortedArr[i] 
       if(difference > 1) counter += difference -1
     })
    return counter
      
    }
    
  }