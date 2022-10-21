
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.









function high(x){
    let word =0, totalArr=[];
    x = x.toLowerCase().split(" ");
    
    // loop through each word. then loop through each letter to convert a letter to a number
    // push them into an array
    for(let i=0; i<x.length; i++){
      for(let j=0; j<x[i].length; j++ ){
        word += x[i].charCodeAt(j)-96;}
       totalArr.push(word);
       word =0;
    }
   
    // sort the array and find the highest number. 
    let highestNumber = totalArr.slice().sort((a, b) => b-a).slice(0,1);
    
    // get a index of the highest number in the array
    let index = totalArr.indexOf(highestNumber[0]);
    
    return x[index]

}