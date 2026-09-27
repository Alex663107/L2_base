function longest(arr, n) {
  let mas=[];
  for(let i=0;i<arr.length;i++){
    mas[i]=[arr[i],arr[i].length,i];
  }
  
  for(let i=0;i<arr.length+1;i++){
    for(let j=0;j<arr.length-1;j++){
    if(mas[j][1]<mas[j+1][1]){
      let mas1=mas[j];
      mas[j]=mas[j+1];
      mas[j+1]=mas1;
    }
    }
  }
  for(let i=0;i<arr.length;i++){
    console.log(mas[i][0]);
  }
  return mas[n-1][0];
}