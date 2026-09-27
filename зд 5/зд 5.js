function primeFactors(n){
let str="";
  for(let i=2;n!=1;i++){
    let b=false;
    for(let j=1;j<=9;j++){
      if(i%j==0 && i<10 && i!=2&& i!=3&& i!=5&& i!=7)b=true;
    }
    if (b)continue;
    for(let j=1;Number.isInteger(n/i);j++){
      n/=i;
      b=j;
    }
    if(b==1)str+=`(${i})`;
    else if(1<b)str+=`(${i}**${b})`;
  }
  return str;
}