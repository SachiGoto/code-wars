// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



//test case //
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(solution('world'), 'dlrow');
//     assert.strictEqual(solution('hello'), 'olleh');
//     assert.strictEqual(solution(''), '');
//     assert.strictEqual(solution('h'), 'h');
//   });
// });  

// describe("Random tests", () => {  
  
//   const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   "
  
//   function randint(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   it("Testing for 100 random tests", () => {
//     for(let i = 0; i < 100; i++){
//       let word = Array.from({length: randint(0, 20)}, (_, i) => s[randint(0, s.length - 1)]).join``
//       let expected = [...word].reverse().join``
//       assert.strictEqual(solution(word), expected, `solution(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`);
//     }
//   })
// })



function solution(str){
    return str = [...str].reverse().join(''); 
  }
  