// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.




function solve(s) {
    let sArr = [...s].slice(),
        vowel = ["a", "e","i","o","u"],
        arr = 0, total = [];
  
    sArr.map(x=>{
          if(!vowel.includes(x)) arr += x.charCodeAt(x)-96;
          if(vowel.includes(x) || sArr.length-1 === sArr.indexOf(x)){
            if(arr>0){
               total.push(arr);
               arr =0;} 
          }
    })
  
     return total.reduce((a,b)=> a>b?a:b,0);

}