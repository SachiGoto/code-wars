

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.








function queueTime(customers, n) {
    //TODO
    console.log(n)
    console.log(customers)
    
    let till1 =[];
    let till2 =[];
    
    if(customers.length ===0){
      return 0
    }
    else if(n===1){
       let sum = customers.reduce((x,y)=> x+y,0)
       return sum
      
    }else if(n===2){
       let sortedArr = customers.sort((x,y)=> x>y?-1:1)
       
       for(let i =0; i< sortedArr.length ; i++){
            let largerNumber = sortedArr.length -1
            till1.push(sortedArr[sortedArr.length + largerNumber]);
            till2.push()
       }
    }
    
    
  }