function ipv4Parser(ip, mask){
    let ip1=ip.split('.').map(Number);
    let mask1=mask.split('.').map(Number);

    let ip2=[];
    let mask2=[];

    for(let i=0;i<4;i++){
        ip2.push(ip1[i] & mask1[i]);
        mask2.push(ip1[i]&(~mask1[i]&255));
    }
    let result=[],m="",l="";
    for(let i=0;i<4;i++){
        m+=ip2[i]+(i%3==0?i==0?'.':'':'.');
        l+=mask2[i]+(i%3==0?i==0?'.':'':'.');
    }
    console.log(m);console.log(l);
    result.push(m);result.push(l);
    return result;
}