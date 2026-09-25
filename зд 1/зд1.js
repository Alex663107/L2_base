function hasTwoCubeSums(n) {
let  a=0,b=0,c=0,d=0;
for(let  i=0;i*i*i<n;i++){
  if(Number.isInteger(Math.cbrt(n-Math.pow(i,3))) && a==0 && b==0){a= i;b=Math.round(Math.cbrt(n-Math.pow(i,3),1/3))}
  else if ( Number.isInteger(Math.cbrt(n-Math.pow(i,3))) && c==0 && d==0 && a!=i && b!=Math.round(Math.cbrt(n-Math.pow(i,3)))){c=i;d=Math.round(Math.cbrt(n-Math.pow(i,3),1/3))}
}
  if(a==0||b==0||c==0||d==0||b==c||a==d)return false;
  return Math.pow(a,3)+Math.pow(b,3)==Math.pow(c,3)+Math.pow(d,3);
}