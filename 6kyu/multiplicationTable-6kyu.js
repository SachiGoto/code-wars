// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]



multiplicationTable = function(size) {
  
  // 2 -> 2*2=4
  // multi dimentional array 
  
  // create a counter = 0 
  // first for loop - row 
  // second for loop - column 
  
  let result =[];
  for(let i=1; i<size+1; i++){
       let arr = []
      for(let j=1; j<size+1; j++){
        let counter = i*j
        arr.push(counter); 
      }
    result.push(arr);
  }
  return result
 
}