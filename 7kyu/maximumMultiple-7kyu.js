
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.






function maxMultiple(divisor, bound){

    let arr = [], i = 0;
    while(divisor*i <= bound){
       arr.push(divisor*i)
       i++}
    
    return arr[arr.length-1]
  }



