

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.



function divCon(x){

    let integerResult = x.filter(x => typeof(x) == 'number').reduce((x, y)=>  x+y, 0)
    let stringResult = x.filter(x=> typeof(x) === 'string').reduce((x,y)=> Number(x) + Number(y), 0)            
  
    return integerResult-stringResult
  
    
    }