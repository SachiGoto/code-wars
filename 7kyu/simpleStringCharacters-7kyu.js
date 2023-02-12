
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.



function solve(s){
    let uppercase=0, 
        lowercase = 0, 
        numbers = 0,
        specialchar = 0;
    
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  
    for(let i=0; i<[...s].length; i++){
       if(!isNaN(Number(s[i]))) numbers++
       else if(specialChars.test(s[i])) specialchar++
       else if(s[i].toUpperCase() == s[i] ) uppercase++
       else lowercase++
    }
  
    return [uppercase,lowercase,numbers,specialchar]
  
  }