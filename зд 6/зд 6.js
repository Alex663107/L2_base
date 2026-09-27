function toWeirdCase(string){
  let m=0,p="";
  for(let i=0;i<string.length;i++){
    if(string[i]==' '){m=0;p+=string[i];continue;}
    else if(m%2==0)p+=string[i].toUpperCase();
    else p+=string[i].toLowerCase();
    m++;
  }
  return p;
}