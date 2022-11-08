let a,b;
const saida=document.querySelector(".saida");
a=6;
b=5;
if (a == b) {
 saida.innerHTML="A variável a é igual a variável b";
}
else if (a < b){
 saida.innerHTML="A variável a é menor que a variável b";
}
else{
 saida.innerHTML="A variável a é maior que a variável b";
}
/*
se tiver 2 situaçãoes como fica?
if(){}
else{}

se tiver 3 situçãoes?
if(){ }
else if()
else { }

Se tiver 7 situações para analisar, 
como ficam as instruções if , else if, else
if(){ }
else if(){}
else if(){}
else if(){}
else if(){}
else if(){}
else{ }

Se tiver 4 situações
if(){}
else if(){}
else if(){}
else{}



*/