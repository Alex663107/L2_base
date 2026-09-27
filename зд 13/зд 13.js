function hexStringToRGB(hexString) {
  let mas=splitUltramax(hexString);
  return {
    r: mas[0],
    g: mas[1],
    b: mas[2]
  };
}


function splitUltramax(hexString) {
  let m=hexString.replace("#","");
  let str=[];
  for(let i=0;i<3;i++){
    str[i]=(transletion(m[i*2])*16+transletion(m[i*2+1]));
  }
  return str;
}
function transletion(f) {
  let upper=String(f).toUpperCase();
  if(upper=="F")return 15;
  else if(upper=="E")return 14;
  else if(upper=="D")return 13;
  else if(upper=="C")return 12;
  else if(upper=="B")return 11;
  else if(upper=="A")return 10;
  return +upper;
  
}