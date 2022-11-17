

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.







function queueTime(customers, n) {

   if(customers.length ===0) return 0
   
   else if(n==1)return customers.reduce((x,y)=> x+y,0)
      
   else if(n>=2 && n<customers.length){
     let tills =[];
     let numOfCustomers = customers.length; 
     
     // the inial tills array is for assigning one customer on each till
       for(let i=0; i<n; i++){
          tills.push(customers[i])
          numOfCustomers--;
        }
     
     // keep track of each element in an customer array
      let counter = n;
      while(numOfCustomers >0){
       // new cusomer is added to the till that has the smallest number 
       let findTheSmallest =  tills.reduce((a, b) => Math.min(a, b))
       let findIndex = tills.indexOf(findTheSmallest)
        tills[findIndex] += customers[counter]
       
        numOfCustomers--
        counter++
 
      }
      
     return tills.reduce((x,y)=>Math.max(x,y));
   
     
   }else return customers.reduce((x,y)=> Math.max(x,y))
     
 
 }