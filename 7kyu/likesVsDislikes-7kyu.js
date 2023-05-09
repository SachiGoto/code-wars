// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

function likeOrDislike(buttons) {
  
    // input array of strings either like or dislike 
    // return a string:  Like || Dislike || Nothing 
      
    // having two likes/dislike consecutively cancels out to nothing 
    
    // if like and dislike next to each other dislike will overwite like and vice versa 
      
    // have a current status variable that updates the like status 
    // use for loop to check if the current status is equal to each state. 
    //  if it's the same state becomes 'nothing' , it it is not the same the state gets overwritten by the state.
      
      console.log('buttons ', buttons)
      let currentStatus = 'Nothing'; 
      
      for(let i = 0; i< buttons.length; i++){
        
          if(buttons[i] === currentStatus ){
                currentStatus = 'Nothing'
             
          }else{
             currentStatus  = buttons[i]
          }
      }
      
    
      return currentStatus
    
    }