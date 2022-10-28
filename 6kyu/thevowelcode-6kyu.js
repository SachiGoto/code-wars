

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.



var alphabetArr = ["a", "e", "i","o","u"]

function encode(string) {
  let  newstring = ''
  for(let i=0; i<string.length; i++){
    alphabetArr.includes(string.charAt(i))?newstring += Number(alphabetArr.indexOf(string.charAt(i))) + 1:newstring += string.charAt(i)
  }
  return newstring
  }
  
function decode(string) {
      let number = ["1","2","3","4","5"],
      string2 = '';
  for(let i=0; i<string.length; i++){
    let num = +string.charAt(i) -1 ;
    number.includes(string.charAt(i))?string2 += alphabetArr[num]:string2 += string.charAt(i);
  }
  return string2
  
  }