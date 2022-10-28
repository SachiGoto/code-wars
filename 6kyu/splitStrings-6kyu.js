

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']






function solution(str){
    let arr=[];
    str.length%2? str+= "_":str;
    for(let count=0; count<str.length; count=count+2){
      arr.push([...str].splice(count,2).join(""))}
    return arr
  }