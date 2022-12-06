


// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100




function validParentheses(parens) {

    let parensArr = [...parens.slice()], counter = 0;
    
    while(counter < parensArr.length){
       if(parensArr[counter] === "(" && parensArr[counter +1] === ")"){
          parensArr.splice(counter, 2) 
          counter = 0; 
       }else counter++;
    }
  
    return parensArr.length === 0?true:false
     
  }