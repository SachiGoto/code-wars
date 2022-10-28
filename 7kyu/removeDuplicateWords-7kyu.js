// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'







function removeDuplicateWords (s) {
    let newarr = new Set(s.split(" "));
    let result =[];
    for(let word of newarr){result.push(word);}
    return result.join(" ");
  }