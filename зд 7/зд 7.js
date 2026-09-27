function wave(str){
  let mas=[];
  for(let i=0;i<str.length;i++){
    let m="";
    if(str[i]==" ")continue;
    for(let j=0;j<str.length;j++){
    if(j==i){
      m+=str[i].toUpperCase();
      continue;
    }
      m+=str[j];
  }
    mas.push(m);
  }
  return mas;
}