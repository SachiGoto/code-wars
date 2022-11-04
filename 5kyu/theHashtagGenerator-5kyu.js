

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false





function generateHashtag (str) {
    　if(str.split(" ").join("").trim().length >= 140 || str.trim().length === 0 ){ return false}
      let newArray =  str.trim().split(" ").map(x=> x.charAt(0).toUpperCase() + x.slice(1));
      return "#" + newArray.join("");
      
      
  }