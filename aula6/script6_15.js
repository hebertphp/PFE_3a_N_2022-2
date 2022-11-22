const saida=document.querySelector('.saida');

const valores=[10,20,30,40,50];
saida.innerHTML=valores+"<hr>";
valores.shift();
saida.innerHTML+=valores+"<hr>";
valores.pop();
saida.innerHTML+=valores;