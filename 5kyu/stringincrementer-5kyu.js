
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

    let strArr = [];
    let arrStrng = [...strng].reverse();
            
    let numArr =[];
    let breakpoint = [...strng].reverse().find(x=> isNaN(x));
    breakpoint = [...strng].reverse().indexOf(breakpoint);
    console.log("breakpoint " , breakpoint);
    if(breakpoint === -1){
      strArr = [];
      numArr =[...strng]
    }
    else if(breakpoint === 0){
       numArr = [];
       strArr = [...strng].join("");
    }else{
       numArr = [...strng].slice(-Math.abs(breakpoint)).join("");
       strArr = [...strng].splice(0, ([...strng].length - breakpoint)).join("");
    }
    
  
   
  
  
  
  console.log("strArr ", strArr )
    console.log("numArr ", numArr)
  if(numArr.length === 0){
    console.log("strArr + 1 " , strArr + 1);
    return strArr + "1";
  }else if(numArr.length > 0 && strArr.length == 0){
    console.log("hello")
      let num = +numArr+1;
    num =  num.toString().padStart(numArr.length, '0');
    return num
  ;  
    }else{
      
      //   newArr = +newArr + 1; 
    let num = +numArr+1;
    console.log("Hi")
    console.log("newArr", num.toString().padStart(numArr.length, '0'));
    num =  num.toString().padStart(numArr.length, '0');
    strng = strArr + num;
  
    return strng;
      
    }
    
  
  
    
    }