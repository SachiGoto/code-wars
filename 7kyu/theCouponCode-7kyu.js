// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let month = ["January", "February", "March", "April","May", "June","July","August","September","October","November","December"]
       
    
    
    let currArr = currentDate.replace(',', '').split(" ");
    let exArr = expirationDate.replace(',', '').split(" ");
    
     let currentMonth = month.indexOf(currArr[0])+1;
    let expirationMonth = month.indexOf(exArr[0])+1;
  
    currArr.splice(0,1,currentMonth)
    exArr.splice(0,1,expirationMonth) 
  
    let curDate = currArr.map(x=>+x);
    let exDate = exArr.map(x=>+x);
    
    console.log(curDate, exDate);
  
    
      if(enteredCode !== correctCode){
      return false
      }else{
        if(curDate[2]<exDate[2])return true
        else if(curDate[2]>exDate[2])return false
        else if(curDate[0]<exDate[0])return true;
        else if(curDate[0]>exDate[0])return false;
        else if(curDate[1]<exDate[1])return true;
        else if(curDate[1]>exDate[1]) return false;
        else return true;
        
    }
  
       
          
  }
    











// -- first attempt 

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     let month = ["January", "February", "March", "April","May", "June","July","August","September","October","November","December"]
//     let currentDateArr = [...currentDate.replace(',', '').split(" ")];
//     let expirationDateArr = [...expirationDate.replace(',', '').split(" ")];
  
//     let currentDateMonth = month.indexOf(currentDateArr[0]) +1;
//     let expirationDateMonth = month.indexOf(expirationDateArr[0])+1;
  
    
//    currentDateArr.splice(0,1,currentDateMonth);
  
//    expirationDateArr.splice(0,1,expirationDateMonth); 
  
    
//       if(enteredCode !== correctCode){
//       return false
//       }else{
        
//               if(+currentDateArr[2] < +expirationDateArr[2]) return true
//               else if(+currentDateArr[0] < +expirationDateArr[0])
//               return true
//               else if(+currentDateArr[1]>+expirationDateArr[1])
//               return false
          
//            return true
//       }
        
  
       
          
//   }