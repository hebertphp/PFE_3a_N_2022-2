let num,res;
const saida=document.querySelector(".saida");
num=parseInt(prompt("Digite um número"));
if(num%2==0){
    saida.innerHTML=`${num} - PAR`;
}
else{
    saida.innerHTML=`${num} - ÍMPAR`;
}
