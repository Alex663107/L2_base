function bingo(ticket, win){
let counter=0;
  for(let i=0;i<ticket.length;i++){
    for(let j=0;j<ticket[i][0].length;j++){
      if(ticket[i][0].charCodeAt(j)==ticket[i][1]){
        counter++;
        break;
      }
    }
  }
  return win<=counter? 'Winner!':'Loser!';
}