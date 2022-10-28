// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.






function topThreeWords(text) {
    let newText = text.toLowerCase().split(" ");
    let newText2 =[];
    let word= [];
    for(let a=0; a<newText.length; a++ ){
        let letters =[];
         for(let b=0; b<newText[a].length; b++){
                if((newText[a].charCodeAt(b)>96 && newText[a].charCodeAt(b)<123) || newText[a].charCodeAt(b) === 39){
                  word.push(newText[a].charAt(b));
             }
         }
  
      if(word.length >0){
          letters = word.join("");
          newText2.push(letters);  }
     
        word = []; }
  
    let count ={};
    
    newText2.forEach(function(x){count[x] = (count[x] || 0) +1 });
    let countArray = Object.entries(count);
    let sortedArray = countArray.sort((a,b)=>{
        return a[1]>=b[1]?-1:1;
     },0)
  
    let result = []
    
  if(newText2.length === 0){
    result =[];
  }else if(sortedArray.length ==1){
      if(sortedArray[0][0] === "'"){
         result =[];
      }else{
        result.push(sortedArray[0][0]);
      }
       
    }else if(sortedArray.length==2){
      for(let j=0; j<2; j++){
         result.push(sortedArray[j][0])
      }
     
    }else if(sortedArray.length>=3){
      for(let i=0; i<3; i++){
      result.push(sortedArray[i][0]);}
  }
     return result;
  }
    