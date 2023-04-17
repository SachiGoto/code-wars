// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 140, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.





// Thought process ---------------------------
    // input is array - [string, number, []]
    // return the hacked names as an array 
    
    //var array = [
  // ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
  // ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
  // ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
  // ];
    
    // ['name1', 'name3' ]
    
    // for loop to loop through each parent array
    // inside the for loop, create another for loop. Then loop through each grade and calculated the sum of the grades. 
    // if(it's a -> add 30 and on ); if (array.length >= 5, add extra 20); 
    
    // push the name, score, totalScre 
    // newArr = []; 
    // compared the calculated score with the score in the array if it's not the same, 
    // push the hacker's name in the new array 
function findHack(arr) {
    let newArr =[];
  
    for(let i=0; i< arr.length; i++){
     let totalScore = arr[i][2].map(grade=> grade === 'A'? grade = 30:grade ==='B'?grade = 20:grade==='C'?grade = 10:grade==='D'?grade = 5:grade = 0).reduce((x,y)=> x+y , 0)          
      if(arr[i][2].length >= 5 && arr[i][2].every(grade=> grade === 'A' || grade ==='B')) totalScore +=20
      if(totalScore >= 200 ) totalScore = 200
      if(arr[i][1] !== totalScore)newArr.push(arr[i][0])
    }
    
    return newArr

}