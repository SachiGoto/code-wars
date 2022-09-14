// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2




function digitalRoot(n) {
    let sum =0;
    while(n>0 || sum>9){
      if(n === 0){
        n = sum;
        sum =0;
      }
      // select the first digit of the number n //
      sum = sum + n %10;
      // select the rest of the digits in the number n //
      n = Math.floor(n/10);
    }  console.log("n is ", n)
    return sum;
  
  
    }
    