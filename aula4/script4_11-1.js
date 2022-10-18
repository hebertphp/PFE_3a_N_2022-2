let a,b,res;
a=90;
b=10;
res=(a<b);//false true (bool)
document.write(`a = ${a} , b = ${b} <br>`);//a = 90 , b = 10
document.write(`a < b : ${(a<b)} <br>`);//false
document.write(`!( a < b) : ${!(a<b)}<br>`);//true
//document.write("res : "+typeof(res));//bool
document.write(`res :: ${typeof(res)}`);//bool