let a,b,c,d;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) || (a>=c);//d=(50<=120)||(50>=200)//d=(T)||(F)//d=TRUE
//document.write("(a<=b) || (a>=c) = "+d);//true
document.write(`(a<=b) || (a>=c) = ${d}`);