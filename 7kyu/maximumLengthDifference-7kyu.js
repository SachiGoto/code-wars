// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))
// 1.its asking for the largest difference of length of smallest number from array 1 compare to largest array 2
// 2.then you need to find the largest length of largest number from array 1 compare to smallet array 2
// 3.result must be the biggest one

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string




if(a1.length === 0 || a2.length === 0){
    return -1
  }
  
　let numArray1 = a1.map(x=> x.length),
      arr1Max = Math.max(...numArray1),
      arr1Min = Math.min(...numArray1)
  

  let numArray2 = a2.map(x=>x.length),
      arr2Max = Math.max(...numArray2),
      arr2Min = Math.min(...numArray2)

  return arr2Max - arr1Min > arr1Max - arr2Min? arr2Max - arr1Min:arr1Max - arr2Min