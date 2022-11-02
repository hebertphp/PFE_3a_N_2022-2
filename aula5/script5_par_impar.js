/*
Digitar um número inteiro (prompt) / parseInt
verificar se o número é PAR ou ÍMPAR %2 resto da divisão por 2
Mostrar o número digitar e mensagem PAR ou ÍMPAR
*/
const saida=document.querySelector(".saida");//class="saida"
let numero=parseInt(prompt("Digite um numero"));

if(numero%2 ==0){
    saida.innerHTML=`${numero} - PAR`;
}
else{
    saida.innerHTML=`${numero} - ÍMPAR`;
}