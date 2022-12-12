// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

// Subsequence
// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// LCS examples
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"


function LCS(x, y) {
  
    console.log(x,y)
    if(x.includes(y)){
      return y
    }else{
    
    let xArr = [...x].slice()  ;
    let result = '';
      let counter = 0;
   while(counter < xArr.length){
      if(xArr.includes(y.charAt(counter))){
        if(counter <= y.indexOf(y.charAt(counter))){
        
          console.log("counter is ", counter);
         
           result += y.charAt(counter)
           xArr.splice(0,counter+1);
           console.log("xArr is ", xArr);
          counter = 0;
           }
       
       
         }
       counter++
    
      }return result

    }

}
