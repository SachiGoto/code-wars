// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]







function sortEmotions(arr, order){
  
    // input -> an array of emotions, boolean order 
    // return -> if order is true, return emotions in descending order (super happy to super sad) 
              // if order is false, return in ascending order (super sad to super happy)
    
  //   arr = [':D', ':|', ':)', ':(', ':D']
  // sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
  // sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
    
    // psudo code 
    // create an object and assign number to each emoji 
    // loop arr and assign a number to each emoji 
    // sort the arr based on the number 
    // get rid of the number and return the sorted emotions in an array 
  
    
    let emojis = { '5':':D', '4': ':)', '3': ':|', '2': ':(' , '1': 'T_T' }
    let newArr = [];
    
    for(let i =0; i<arr.length; i++){
       for (const emoji in emojis){
              if(emojis[emoji] === arr[i]){
                    newArr.push({[emoji] : emojis[emoji]})
              }
         }
      
    }
    
     let sortedArr = newArr.sort((a,b)=>{
      return order? Object.keys(b)[0]  - Object.keys(a)[0]:Object.keys(a)[0] - Object.keys(b)[0] 
    })
    
    let result = []
    
  for(let i =0; i<sortedArr.length; i++){ result.push(Object.values(sortedArr[i]))
  }
  
    return result.flat()
  
  }