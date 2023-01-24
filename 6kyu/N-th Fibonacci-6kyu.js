
// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.









function nthFibo(n) {

    let fibArr = [];
     for(let i =0 ; i<n; i++){
     if(i === 0) fibArr.push(0)
     else if(i === 1) fibArr.push(1)
     else fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]) 
     }
     
     return fibArr[n-1]
   
   }