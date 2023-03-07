
// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.









function nbDig(n, d) {
    let counter = 0 ; 
  
    for(let i=0; i <=n; i++){
      let digit = (i*i).toString();
      let tempArr = digit.split("").filter(item=>item == d.toString())
      counter += tempArr.length;
    }
  
    return counter;
  }