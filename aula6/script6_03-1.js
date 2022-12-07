const saida=document.querySelector('.saida');
//        0   1   2
const x=[2020,2,"Hoje"];

saida.innerHTML=`x = ${x}<hr>`; //mostra todos os valores do array x

x[0]++;//x[0]=2020 ++(soma 1) //x[0]=2021
x[1]=x[0]%2;//x[1]=2021%2//x[1]=1
x[2]+=" em dia"; //x[2]="Hoje em dia"

saida.innerHTML+=`x[0] = ${x[0]}<br>`;
saida.innerHTML+=`x[1] = ${x[1]}<br>`;
saida.innerHTML+=`x[2] = ${x[2]}<br>`;