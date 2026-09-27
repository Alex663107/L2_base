function solution(str){
  let mas=[];
  for(let i=0;i<str.length;i+=2){
    let m=str.length%2==0?str[i+1]:str.length-1==i?"_":str[i+1]
    mas.push(str[i]+m);
  }
  return mas;
}