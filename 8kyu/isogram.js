
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)







function isIsogram(str){
    let count = 0;
    let arr = [...str];
    for(i=0;i<arr.length; i++){
         for(j=0; j<arr.length; j++){
           (arr[i].toLowerCase() === arr[j].toLowerCase())? count++ : count;}}
    return (count > arr.length)?false:true;
    
    }