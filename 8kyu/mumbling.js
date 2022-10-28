// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
    let lowercase =[];
    for(i=0; i<s.length; i++){
      lowercase.push(s[i].toUpperCase());
      for(j=0; j<i; j++){
      lowercase.push(s[i].toLowerCase())
        }
      if(i !== s.length-1){
        lowercase.push("-");
        }
    } return lowercase.join('');
      
      }



