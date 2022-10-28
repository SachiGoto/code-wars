// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"







function removeUrlAnchor(url){
    let newUrl = [];
    if(![...url].includes("#")){return url;}
    [...url].forEach(x=>{
      if(x === "#"){newUrl = [...url].slice(0,[...url].indexOf(x))}
    })
    
    return newUrl.join("")
  
    
  }