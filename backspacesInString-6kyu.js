
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""







function cleanString(s) {
    let newArr = [...s].slice();
     for(let i=0; i<newArr.length; i++){
         if(newArr[i]=="#"){
             // remove # and one element before. if index of # is 0,remove # only
             i===0?newArr.splice(i,1):newArr.splice(i-1,2); 
             i = -1;
             }
     }
   
     return newArr.join("");
 
 }