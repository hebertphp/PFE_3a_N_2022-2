let msg;//declaração da variável msg
const saida=document.querySelector(".saida");//class="saida"
const h1=document.querySelector('h1');//nome de tag <h1>

msg="Hoje a aula mudou!";

saida.innerHTML=`${msg}`;
saida.innerHTML+=`<br>Mesmo!!`;
saida.innerHTML+=`<br>${msg}`;

h1.innerHTML="Javascript";