// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False








function validBraces(braces) {
 let stack = [];
 const openingbraces = ['(', '{', '['];
 const closingbraces = [')', '}', ']'];
 
 for(let i =0 ; i<braces.length ; i++){
//      console.log(braces.charAt(i))
     if(openingbraces.includes(braces.charAt(i))){
        stack.push(braces.charAt(i))
     }else if(closingbraces.includes(braces.charAt(i))){
       
        let lastOpeningBraces = stack.pop();

       //find the corresponding opening brace that matches with the closing brace
        let correspondingOpeningBrace = openingbraces[closingbraces.indexOf(braces.charAt(i))]

       
       if(lastOpeningBraces !== correspondingOpeningBrace ){
           return false
       }
     }
 }
  
  return stack.length === 0;
  
  
}