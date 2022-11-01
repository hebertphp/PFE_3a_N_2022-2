let msg;//declaração da variável msg
const saida=document.querySelector(".saida");//class="saida"

msg="Hoje a aula mudou!";

saida.innerHTML=`${msg}`;
saida.innerHTML+=`<br>Mesmo!!`;
saida.innerHTML+=`<br>${msg}`;