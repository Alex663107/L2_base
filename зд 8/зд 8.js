function expandedForm(num) {
      let m=num,k=-1;
      while(m>0){
      k++;
      m=Math.floor(m/10);
    }
let str=`${num}`,str1="";
  
  for(let i=0;i<str.length;i++){
    

    if(str[i]=='0'){
      k--;
      continue;}
    if(str1!=""){
      str1+=" + "
    }
    str1+=str[i]+"0".repeat(k);
    k--
  }
return str1;
}