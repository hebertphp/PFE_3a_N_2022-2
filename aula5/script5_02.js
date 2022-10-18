let a,b;
const saida=document.querySelector(".saida");
a = 5;
b = 6;
saida.innerHTML=`a = ${a}, b = ${b}<br>`;
if (a == b) {
  saida.innerHTML+="A variável a é igual a variável b";
}
else {
  saida.innerHTML+="A variável a não é igual a variável b";
}
