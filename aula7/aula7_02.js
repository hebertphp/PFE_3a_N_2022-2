const saida=document.querySelector('.saida');
const nome=document.querySelector('#nome');
const av1=document.querySelector('#av1');
const av2=document.querySelector('#av2');
const btn1=document.querySelector('.btn1');
const btn2=document.querySelector('.btn2');

btn1.onclick=calc;
btn1.onclick=boas_vindas;

btn2.addEventListener("click", calc);
btn2.addEventListener("click", boas_vindas);

function calc(){
    let media=(parseFloat(av1.value)+parseFloat(av2.value))/2;
    saida.innerHTML=`Nome: ${nome.value}<br>`;
    saida.innerHTML+=`AV1: ${av1.value}<br>`;
    saida.innerHTML+=`AV2: ${av2.value}<br>`;
    saida.innerHTML+=`Media: ${media}<br>`;
}
function boas_vindas() {//criação da função
    saida.innerHTML+=`Seja bem vindo(a) <br>`;
}