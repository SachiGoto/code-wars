

// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"


// Thought process -------------
    // input - string contains one or more words
    // return - words that contain one exclamation mark 
    
    // example - remove("Hi!") === ""
    // remove("Hi! Hi!") === ""
    // remove("Hi! Hi! Hi!") === ""
    // remove("Hi Hi! Hi!") === "Hi"
    // remove("Hi! !Hi Hi!") === ""
    // remove("Hi! Hi!! Hi!") === "Hi!!"
    // remove("Hi! !Hi! Hi!") === "!Hi!"
    
    //psuedo code 
    // break a string by word - use slice(" ")
    // use for loop and loop through each word 
    // check if the word contains one !
    // if it is remove the word from the string 
    
    
    function remove (string) {
    let strArr = string.split(" ")
    let newStr = [];
  
    for(let i=0; i < strArr.length; i++){
    const count = {};
    strArr[i].split("").forEach(element => {
    count[element] = (count[element] || 0) + 1;
    })
  
    if( !count['!'] || count['!'] !== 1) newStr.push(strArr[i])
    }
    
  
    return newStr.join(" ")
  
  }