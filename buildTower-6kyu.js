

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]






function towerBuilder(nFloors) {
    let arr =[], str='', stars =1, base = nFloors + nFloors-1;
    if(nFloors == 1 ){arr.push("*");return arr;}
    
    for(let row=1; row<=nFloors; row++){
       let whiteSpace = Math.floor((base-stars)/2);
      base === stars?str += "*".repeat(stars):str += " ".repeat(whiteSpace) + "*".repeat(stars)+ " ".repeat(whiteSpace)
      arr.push(str);
      str = '';
      stars = stars +2;
    }
    
    return arr;
  
  }