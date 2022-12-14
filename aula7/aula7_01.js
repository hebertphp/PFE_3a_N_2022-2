/* -----------------------------------------
Documentação de código
function boas_vindas()
Objetivo: Enviar mensagem de boas vindas
Data de criação: 13/12/2022
Autor: Nome do autor
-------------------------------------------- */
const saida=document.querySelector('.saida');

function boas_vindas(nome) {//criação da função
    saida.innerHTML+=`Seja bem vindo(a) ${nome}!<br>`;
}
function media(nota1,nota2,nota3){
    let result=(nota1+nota2+nota3)/3;
    return result;//devolver algum valor
}
boas_vindas("Astrogildo");//executar/chamar a função
boas_vindas("Belarmina");
saida.innerHTML+=media(10,9,9)+"<br>";
saida.innerHTML+=media(8,6,6)+"<br>";