function findMissing(list) {  
  let step=(list[list.length-1]-list[0])/list.length;
  let m=list[0];
  for(let i =0;i<list.length ;i++){
    if(list[i]!=m)return m;
    m=m+step;
  }
  return list[0];
}