



// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Test cases

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("Fixed Tests", () => {
//     assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');
//   });
// });
 
// describe("Random Tests", () => {
  
//   function testSolution(str){
//       return this.str = str.substring(1, str.length-1);      
//   }
  
//   it("Testing for 100 random tests", () => {
//     for(let i = 0; i < 100; i++){
//       let possible = "abcdefghijklmnopqrstuvwxyz0123456789", text = "";
//        for(let k = 0; k < ~~(Math.random() * 10) + 2; k++){
//           text += possible.charAt(~~(Math.random() * possible.length));
//        }
//       assert.strictEqual(removeChar(text), testSolution(text), `Testing for str = ${JSON.stringify(text)}`);
//      }
//   });
// });  



function removeChar(str){
    return newStr = str.slice(1, str.length-1);
  };
  