// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

// Number of orders is always equal to number of people.

// For example,


// budget, people => (200, 9) will return 2.

// budget, people => (300, 9) will return 3 and so on.



function findCaterer(budget, people){
  
    // input - two arguments 1. integer budget , 2. integer number of people
    // return - 1, 2 or 3 
    
    // let caterer = [30,20,15]
    // let cost = 0; 
    // if people > 60 -> cost = (people * 30) * 0.8 
    // else cost = (people * 30) 
    // if(cost > budget ) -> second caterer  
    //else -> return 3 
  
  
       if(people === 0 ) return -1
       else if( people > 60 && (people * 30) * 0.8 <= budget) return 3
       else if( people <= 60 && (people * 30) <= budget ) return 3
       else if( (people * 20)  <=  budget ) return 2
       else if( (people * 15)  <=  budget ) return 1
       return -1 
}