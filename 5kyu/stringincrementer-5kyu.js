
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.



function incrementString (strng) {

  let arrStrng = [...strng].reverse(),
      strArr = [], numArr =[],
      // finding the first index that is a number in the string
       breakpoint = [...strng].reverse().find(x=> isNaN(x));
       breakpoint = [...strng].reverse().indexOf(breakpoint);


// if breakpoin is -1, that means there are only numbers in the string
  if(breakpoint === -1){
    strArr = [];
    numArr =[...strng].join("")
  }
  
  // if breakpoin is 0, that means there are no numbers
  else if(breakpoint === 0){
     numArr = [];
     strArr = [...strng].join("");
  }
  
  else{
     numArr = [...strng].slice(-Math.abs(breakpoint)).join("");
     strArr = [...strng].splice(0, ([...strng].length - breakpoint)).join("");
  }
  

if(numArr.length === 0) return strArr + "1";
  
else if(numArr.length > 0 && strArr.length == 0){
  let num = +numArr +1;
  num =  num.toString().padStart(numArr.length, '0');
  return num
  }
  
else{
  let num = +numArr+1;
  num =  num.toString().padStart(numArr.length, '0');
  strng = strArr + num;
  return strng;
    
  }
  
  }