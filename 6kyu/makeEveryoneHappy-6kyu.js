
// Task:
// In this kata, your task will be to replace sad emoticons with funny ones.

// The emoticons, will be represented from:

// Eyes: marked as :, ; or =
// Nose (optional): marked as - or ~
// Mouth: marked as ( or [
// Examples:
// smile("Howdy :(")  // should return "Howdy :)"
// smile("Never be sad =[")  // should return "Never be sad =]"
// smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"












function smile(text) {
    let textArray = [...text],
        face =[":", ";", "=", "-", "~"],
        newArray = [];
   
    if(textArray.filter(x=>x.includes(face))){
      
         for(let i=0; i<[...text].length; i++){
           if(textArray[i] === "(" && face.includes(textArray[i-1]) ){
               let char = ')';
               newArray.push(char)
           }else if (textArray[i] === ")" && face.includes(textArray[i+1])){
             let char = '(';
               newArray.push(char)
           }else if (textArray[i] === "[" && face.includes(textArray[i-1]) ){
               let char  = ']';
               newArray.push(char)
           }else if (textArray[i] === "]" && face.includes(textArray[i+1]) ){
               let char  = '[';
               newArray.push(char)
         }else{
           newArray.push([...text][i])
          
         }
      }
      
      return newArray.join("");
      
          
    }else{
        return text;
      }
  
   
    
                     
  
    
  }
  