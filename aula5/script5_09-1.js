let i;//declaração de var i
const saida=document.querySelector(".saida");//referência de uma class="saida"
i=0;//var i recebe o valor 0, valor inicial
do{
    saida.innerHTML+=i + "<br>";
    i++;//somar 1
}while (i < 3); //condição
saida.innerHTML+="<hr>";
i=0;
while(i<3){
    saida.innerHTML+=i + "<br>";
    i++;//somar 1
}

/*
0
1
2
*/