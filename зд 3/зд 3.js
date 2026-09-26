function whatCentury(year)
{
  let counter=Math.floor(year/100);
  if(year%100==0) {
    if(counter<=13&&11<=counter)return counter+"th";
    else if(counter%10==1) return counter+"st";
    else if(counter%10==2) return counter+"nd";
    else if(counter%10==3) return counter+"rd";
    else  return counter+"th";
  }
  else{
    counter++;
    if(counter<=13&&11<=counter)return counter+"th";
    else if(counter%10==1) return counter+"st";
    else if(counter%10==2) return counter+"nd";
    else if(counter%10==3) return counter+"rd";
    else  return counter+"th";
  }
}