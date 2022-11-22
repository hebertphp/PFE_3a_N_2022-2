const saida=document.querySelector('.saida');
const num=[10,20,30,40,50];

saida.innerHTML=`Todos os valores de num: ${num}<hr>`;
saida.innerHTML+=`num possui ${num.length} valores<hr>`;
saida.innerHTML+=`Valor da primeira posição de num: ${num[0]} <hr>`;
saida.innerHTML+=`Valor da última posição de num: ${num[num.length-1]} <hr>`;