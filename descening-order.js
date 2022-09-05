DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    if(n.toString().length === 1)return n
    else{
    let arr = [...n.toString()];
    let descendingOrder = arr.sort(function(a,b){
    return a >= b ? -1:1;
    })
   return Number(descendingOrder.join(''));
    }
    }

