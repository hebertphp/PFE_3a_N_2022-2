const saida=document.querySelector('.saida');

const numeros=[5,6,7,9];

saida.innerHTML=`Original: ${numeros}<br>`;

numeros[0]++;//numeros[0]=6;
numeros[1]=numeros[0]%2;//
saida.innerHTML+=`Alterações: ${numeros}<br>`;