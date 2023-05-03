// DESCRIPTION:
// You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i ). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#).

// example:

// function p([1,2,3,4],1,2)
//  should return [2,3]

//  how ?
//  Array => [1,2,3,4]
//            | | | |
//  index =>  0 1 2 3
//  portion     |_|   => [2,3]

// function p([1,2,3,4],-1,2)
//  should return [2,3]

//  how ?
//  Array => [1,  2,  3, 4]
//            |   |   |  |
//  index=>   -3 -2  -1  0
//  portion=>     |___|      =>[2,3]

// function p([1],1,5)
//  should return -1

// how ?
// Array => [1]
//           |
// index=>   0
// required starting index =>1 , which does not exist so we return -1

function portion(a, i, n) {
  // input - 1. array, 2. starting position, 3. n: number of portion to return
  // return - n portion of the array starting from position i

  // psuedo code
  // // check if i is positive or negative
  // positive for loop, loop starts from starting position i
  // negative I will reverse the array and make the starting position positive
  //   console.log(a, i, n)
  if (n > a.length) {
    return -1;
  }

  let result = [];

  if (i > 0) {
    if (a.length - i < n) {
      return -1;
    }
    for (let j = i, counter = 0; counter < n; j++, counter++) {
      result.push(a[j]);
    }
    return result;
  } else {
    if (a.length + i < n) {
      return -1;
    }

    let reversedArray = a.slice().reverse();

    for (let j = Math.abs(i), counter = 0; counter < n; j++, counter++) {
      result.push(reversedArray[j]);
    }

    return result.reverse();
  }
}
