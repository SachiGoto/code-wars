// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"






var isAnagram = function(test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();
    let testSortedArray = [...test].sort(),
        originalSortedArray = [...original].sort();
      for(let i=0; i<testSortedArray.length; i++){
        if(testSortedArray[i] != originalSortedArray[i]){return false}
      }  return true;
  
  };