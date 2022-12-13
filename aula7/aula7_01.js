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
boas_vindas("Astrogildo");//executar/chamar a função
boas_vindas("Belarmina");