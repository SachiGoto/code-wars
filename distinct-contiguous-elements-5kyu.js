

// Count distinct elements in every window of size k
// Given an array of size n and an integer k, return the count of distinct contiguous numbers for all windows of size k. Consider that k is always lower or equals to n.

// Example:
// ``` Input: arr = {1, 2, 1, 3, 4, 2, 3} k = 4 Since we have n = 7 and k = 4, we have 4 windows with 4 contiguous elements.
// Answer: [3,4,4,3]

// <h2>Explanation:</h2>
// First window is {1, 2, 1, 3} and we have 3 distinct numbers;
// Second window is {2, 1, 3, 4} and we have 4 distinct numbers;
// Third window is {1, 3, 4, 2} and we have 4 distinct numbers;
// Fourth window is {3, 4, 2, 3} and we have 3 distinct numbers.











function countContiguousDistinct(k, arr) {
    let len = arr.length;
    let newArr = arr.slice();
    let newArr2 =[];
    let counter=0;
  
  // making arrays with size k 
  for(let i=0; i<len; i++){
      newArr2.push(newArr.splice(0,k)); 
      arr.splice(arr.indexOf(arr[0]),1);
       newArr = arr.slice();}
      
  return filteredArray = newArr2.filter(array=>array.length === k).map(x=>{
           const count = new Set(x);
           return count.size;})
  
  };
    