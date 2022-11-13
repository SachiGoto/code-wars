
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


function isSolved(board) {
    let row = board, column=[], diagnal=[];
    // create a column array
    for(let i=0; i<3;i++){
      let col =[];
    
      for(let j=0; j<3; j++){col.push(board[j][i])}
        column.push(col);
        col =[];
      }  
    
    // create a diagnal array
      let di =[];
      for(let j=0; j<3; j++){di.push(board[j][j]);}
        diagnal.push(di);
        di =[];
      let count =2;
      for(let j=0; j<3;j++){
        di.push(board[j][count])
        count--;
      }
      diagnal.push(di)
    
   // count how many 0, 1,2 are in each row
    let rowCount ={}; 
    
     for(let i=0; i<row.length; i++){
         row[i].forEach(number => {
         rowCount[number] = (rowCount[number] || 0) + 1;});
      
  // if there are three 1s, return 1 and if there are three 2s, return 2
      for(number in rowCount){
         if(rowCount[number] == 3 && number == 1) return 1;
         else if(rowCount[number] == 3 && number == 2) return 2;}
         rowCount ={};
  };
  
     // count how many 0, 1,2 are in each column
    let columnCount ={};
    
      for(let i=0; i<column.length; i++){
        column[i].forEach(number => {
        columnCount[number] = (columnCount[number] || 0) + 1;});
        
  // if there are three 1s, return 1 and if there are three 2s, return 2
      for(number in columnCount){
        if(columnCount[number] == 3 && number == 1) return 1;
        else if(columnCount[number == 3] && number ==2) return 2;
      } columnCount ={};
  };
  
      // count how many 0, 1,2 are in each diagnal
      let diagnalCount = { };
    
      for(let i=0; i<2; i++){
        diagnal[i].forEach(number => {
        diagnalCount[number] = (diagnalCount[number] || 0) + 1;});
        
  // if there are three 1s, return 1 and if there are three 2s, return 2
      for(number in diagnalCount){
        if(diagnalCount[number] == 3 && number == 1) return 1;
        else if(diagnalCount[number == 3] && number ==2) return 2;
       diagnalCount ={}; }}
  
        for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
          if(row[i].indexOf(row[i][j]) !== row[i].lastIndexOf(row[i][j]) && row[i][j] == 0) return -1
          else if(column[i].indexOf(column[i][j]) !== column[i].lastIndexOf(column[i][j]) && column[i][j] == 0 ) return -1}}
    
        for(let l=0; l<2; l++){ 
        for(let k=0; k<3; k++){
            if(diagnal[l].indexOf(diagnal[l][k]) !== diagnal[l].lastIndexOf(diagnal[l][k]) && diagnal[l][k] == 0) return -1}}
    
    // when there is one zero
    
    for(let i=0; i<3; i++){
       if(row[i].includes(0) || column[i].includes(0)) return -1;}
    
    for(let i=0; i<2; i++){
      if(diagnal[i].includes(0)) return -1;} return 0;}