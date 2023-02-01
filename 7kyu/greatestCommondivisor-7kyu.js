

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.








function mygcd(x,y){

    let max = Math.max(x,y),
        min = Math.min(x,y),
        remainder;
     
     while(max%min > 0){
        remainder = max % min;
        max = min;
        min = remainder;   
     }
   
     return min
     
   }
