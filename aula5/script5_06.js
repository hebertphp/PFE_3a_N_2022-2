let a,b;
const saida=document.querySelector(".saida");
a=6;
b=5;
if (a == b) {
 saida.innerHTML="A variável a é igual a variável b";
}
else if (a < b){
 saida.innerHTML="A variável a é menor a variável b";
}
else{
 saida.innerHTML="A variável a é maior a variável b";
}
