


// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




function toCamelCase(str){
    let newArr=[];
    if(str.includes("_")) newArr = str.split("_");
    if(str.includes("-")) newArr = str.split("-");
    
  for(let i=1; i<newArr.length; i++){
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1).toLowerCase(); 
  }
    return newArr.join("");
  }