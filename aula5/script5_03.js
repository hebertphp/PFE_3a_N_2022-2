let num,res;
const saida=document.querySelector(".saida");
num=parseInt(prompt("Digite um número"));
res=num%2;
if(res==0){
 saida.innerHTML=`${num} - PAR`;
}
else{
    saida.innerHTML=`${num} - ÍMPAR`;
}
