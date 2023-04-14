// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).  
  
  
// ** thought process ------------
  
  // input -> strings of array - strarr, integer -k
  // return the longest string 
  // k > strarr.lenght or strarr = 0 , k <= 0 -> return "" 
  
  // example 
  //strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
  // return "folingtrashy"
  
  // if k is <= 0 or if n === 0 or k > strarr.length  -> return "" 
  
  // k = 3 
  // let newStrArr = [];
  // useted for loop and concatinate k * elements 
  // let newStr = ''; 
  // loop through newStrArr and find the long string in the array 
  // return the string 

  if(strarr.length ===0 || strarr.length < k || k <=0 ){
    return ''
  }else{
    let newStrArr = []; 
    for(let i= 0; i< strarr.length; i++){
    let newStr = ''; 
    for(let j=i; j< i+k ; j++){
         (strarr[j] === undefined)? newStr = '': newStr += strarr[j];
     }
     newStrArr.push(newStr)
     newStr = '';
  }
  
 let newsortedStrArr = newStrArr.sort((x, y) => {return (x.length <= y.length)? 1 :-1});
 return newsortedStrArr[0]
  }